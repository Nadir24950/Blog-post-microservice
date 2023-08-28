#!/bin/bash 

#Cd to the terraform directory




track_file="./track.txt"
#Define Instance Number

last_line=$(tail -n 1 "$track_file")

instance_number=$(grep -o "[0-9]\+" <<< "$last_line")


sed -i "s/google_compute_instance.default.public_ip/google_compute_instance.default$instance_number.public_ip/g" "./terraform-app-cluster/dynamic.output.tf"

echo "\n $instance_number" > "track.txt"

# cd to direcotry
cd "$(dirname "$0")/terraform-app-cluster"

# Append the next resource bloc to the main.tf file

echo "\n
  #This was added by the automation script for instance $instance_number
  \nresource \"google_compute_disk\" \"app-cluster$instance_number-disk\" {
  project = var.project_id
  name    = \"app-cluster$instance_number-disk\"
  type    = \"pd-standard\"
  zone    = var.zone
  size    = 20
  image   = var.disk_image
  lifecycle {
    prevent_destroy = true
  }
}
resource \"google_compute_address\" \"app-cluster$instance_number-ip\" {
  project      = var.project_id
  address_type = \"EXTERNAL\"
  network_tier = \"PREMIUM\"
  region       = var.region
  name         = \"app-cluster$instance_number-ip\"
  description  = \"An external IP address for my app-cluster\"
}

resource \"google_compute_instance\" \"default$instance_number\" {
  name         = \"app-cluster$instance_number\"
  machine_type = \"e2-medium\"
  boot_disk {
      source = google_compute_disk.app-cluster$instance_number-disk.name
  }
  network_interface {
    network = \"default\"
    access_config {
      nat_ip = google_compute_address.app-cluster$instance_number-ip.address
    }
  }
  allow_stopping_for_update = true

  lifecycle {
    prevent_destroy = true
  }
}
">> main.tf

# Format the Terraform configuration
terraform fmt

# Verify and apply the Terraform configuration
if  terraform validate && ! terraform apply -auto-approve | tee terraform_apply_output_instance_$instance_number.txt | grep -q "error"; then
    echo "Terraform applied succefully"

#     ansible-playbook -i ansible-playbooks/app_cluster_hosts ansible-playbooks/provision-appcluster.yml
else
    echo "Terraform applied encounted a problem"
fi

cd ".."
instance_number=$((instance_number + 1))
# ansible-playbook -i ansible-playbooks/app_cluster_hosts ansible-playbooks/provision-appcluster.yml
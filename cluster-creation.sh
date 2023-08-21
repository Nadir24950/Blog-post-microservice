#!/bin/bash 

#Cd to the terraform directory
cd "$(dirname "$0")/terraform-app-cluster"


#Define Instance Number

instance_number=3

#Append the next resource bloc to the main.tf file

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

resource \"google_compute_instance\" \"default$instance_number\" {
  name         = \"app-cluster$instance_number\"
  machine_type = \"e2-medium\"
  boot_disk {
      source = google_compute_disk.app-cluster$instance_number-disk.name
  }
  network_interface {
    network = \"default\"
    access_config {
      network_tier = \"PREMIUM\"
    }
  }
  allow_stopping_for_update = true

  lifecycle {
    prevent_destroy = true
  }
}" >> main.tf

# Format the Terraform configuration
terraform fmt

# Verify and apply the Terraform configuration
if  terraform validate && ! terraform apply -auto-approve | tee terraform_apply_output_instance_$instance_number.txt | grep -q "error"; then
    echo "Terraform applied succefully"
else
    echo "Terraform applied encounted a problem"
fi


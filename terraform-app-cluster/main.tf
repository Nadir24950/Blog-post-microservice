terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.51.0"
    }
  }
}

provider "google" {
  credentials = var.credentials_file

  project = var.project_id
  region  = var.region
  zone    = var.zone
}

resource "google_compute_address" "app-cluster2-ip" {
  project      = var.project_id
  address_type = "EXTERNAL"
  network_tier = "PREMIUM"
  region       = var.region
  name         = "app-cluster2-ip"
  description  = "An external IP address for my app-cluster2"
}

resource "google_compute_disk" "app-cluster2-disk" {
  project = var.project_id
  name    = "app-cluster2-disk"
  type    = "pd-standard"
  zone    = var.zone
  size    = 20
  image   = var.disk_image

  lifecycle {
    prevent_destroy = true
  }
}

resource "google_compute_instance" "default" {
  name         = "app-cluster2"
  machine_type = "e2-medium"
  boot_disk {
    source = google_compute_disk.app-cluster2-disk.name
  }
  network_interface {
    network = "default"
    access_config {
      nat_ip = google_compute_address.app-cluster2-ip.address
    }
  }
  allow_stopping_for_update = true

  lifecycle {
    prevent_destroy = true
  }
}

#This was added by the automation script for instance 3

resource "google_compute_address" "app-cluster3-ip" {
  project      = var.project_id
  address_type = "EXTERNAL"
  network_tier = "PREMIUM"
  region       = var.region
  name         = "app-cluster3-ip"
  description  = "An external IP address for my app-cluster3"
}

resource "google_compute_disk" "app-cluster3-disk" {
  project = var.project_id
  name    = "app-cluster3-disk"
  type    = "pd-standard"
  zone    = var.zone
  size    = 20
  image   = var.disk_image
  lifecycle {
    prevent_destroy = true
  }
}

resource "google_compute_instance" "default3" {
  name         = "app-cluster3"
  machine_type = "e2-medium"
  boot_disk {
    source = google_compute_disk.app-cluster3-disk.name
  }
  network_interface {
    network = "default"
    access_config {
      nat_ip = google_compute_address.app-cluster3-ip.address
    }
  }
  allow_stopping_for_update = true

  lifecycle {
    prevent_destroy = true
  }
}


#This was added by the automation script for instance 4

resource "google_compute_disk" "app-cluster4-disk" {
  project = var.project_id
  name    = "app-cluster4-disk"
  type    = "pd-standard"
  zone    = var.zone
  size    = 20
  image   = var.disk_image
  lifecycle {
    prevent_destroy = true
  }
}
resource "google_compute_address" "app-cluster4-ip" {
  project      = var.project_id
  address_type = "EXTERNAL"
  network_tier = "PREMIUM"
  region       = var.region
  name         = "app-cluster4-ip"
  description  = "An external IP address for my app-cluster"
}

resource "google_compute_instance" "default4" {
  name         = "app-cluster4"
  machine_type = "e2-medium"
  boot_disk {
    source = google_compute_disk.app-cluster4-disk.name
  }
  network_interface {
    network = "default"
    access_config {
      nat_ip = google_compute_address.app-cluster4-ip.address
    }
  }
  allow_stopping_for_update = true

  lifecycle {
    prevent_destroy = true
  }
}


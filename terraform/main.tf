provider "aws" {
  profile = "default"
  version = "~> 2.27"
  region = "${var.region}"
}

terraform{
      backend "s3" {
        bucket = "prm-327778747031-terraform-states"
        key = "gpportal/terraform.tfstate"
        region = "eu-west-2"
        encrypt = true
    }
}



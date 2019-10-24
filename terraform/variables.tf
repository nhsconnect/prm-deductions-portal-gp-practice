variable "region" {
  type = "string"
  default = "eu-west-2"
}

variable "deductions_vpc_cidr" {
  type = "string"
}

variable "deductions_app_private_a_subnet_cidr" {
  type = "string"
}

variable "deductions_app_private_b_subnet_cidr" {
  type = "string"
}

variable "deductions_app_private_c_subnet_cidr" {
  type = "string"
}

variable "deductions_app_public_a_subnet_cidr" {
  type = "string"
}

variable "deductions_app_public_b_subnet_cidr" {
  type = "string"
}

variable "subnet_az1" {
    type = "string"
}

variable "subnet_az2" {
    type = "string"
}

variable "subnet_az3" {
    type = "string"
}




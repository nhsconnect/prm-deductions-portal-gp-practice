resource "aws_vpc" "deductions-web-vpc" {
    cidr_block = "${var.deductions_vpc_cidr}"

    tags = {
        Name = "deductions-web-vpc"
    }
}
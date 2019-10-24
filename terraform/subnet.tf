resource "aws_subnet" "deductions-web-public-a-subnet" {
  vpc_id     = "${aws_vpc.deductions-web-vpc.id}"
  cidr_block = "${var.deductions_app_public_a_subnet_cidr}"
  availability_zone = "${var.subnet_az1}"
  map_public_ip_on_launch = true

  tags = {
    Name = "deductions-web-public-a"
  }
}

resource "aws_subnet" "deductions-web-public-b-subnet" {
  vpc_id     = "${aws_vpc.deductions-web-vpc.id}"
  cidr_block = "${var.deductions_app_public_b_subnet_cidr}"
  availability_zone = "${var.subnet_az2}"
  map_public_ip_on_launch = true

  tags = {
    Name = "deductions-web-public-b"
  }
}

resource "aws_subnet" "deductions-web-private-a-subnet" {
  vpc_id     = "${aws_vpc.deductions-web-vpc.id}"
  cidr_block = "${var.deductions_app_private_a_subnet_cidr}"
  availability_zone = "${var.subnet_az1}"

  tags = {
    Name = "deductions-web-private-a"
  }
}

resource "aws_subnet" "deductions-web-private-b-subnet" {
  vpc_id     = "${aws_vpc.deductions-web-vpc.id}"
  cidr_block = "${var.deductions_app_private_b_subnet_cidr}"
  availability_zone = "${var.subnet_az2}"

  tags = {
    Name = "deductions-web-private-b"
  }
}

resource "aws_subnet" "deductions-web-private-c-subnet" {
  vpc_id     = "${aws_vpc.deductions-web-vpc.id}"
  cidr_block = "${var.deductions_app_private_c_subnet_cidr}"
  availability_zone = "${var.subnet_az3}"

  tags = {
    Name = "deductions-web-private-c"
  }
}
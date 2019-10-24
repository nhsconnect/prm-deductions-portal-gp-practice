resource "aws_internet_gateway" "deductions-web-igw" {
  vpc_id = "${aws_vpc.deductions-web-vpc.id}"

  tags = {
    Name = "deductions-web-igw"
  }
}
resource "aws_nat_gateway" "deductions-web-public-a-natg" {
  allocation_id = "${aws_eip.deductions-vpc-public-a-natg-eip.id}"
  subnet_id     = "${aws_subnet.deductions-web-public-a-subnet.id}"

  tags = {
    Name = "deductions-web-public-a-natg"
  }
}

resource "aws_eip" "deductions-vpc-public-a-natg-eip" {
  vpc      = true
}
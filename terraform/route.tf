resource "aws_route_table" "public_a_rtb" {
  vpc_id = "${aws_vpc.deductions-web-vpc.id}"

  route {
    gateway_id = "${aws_internet_gateway.deductions-web-igw.id}"
    cidr_block = "0.0.0.0/0"
  }

  tags = {
    Name = "deductions-web-vpc-public-a-rtb"
  }
}

resource "aws_route_table" "public_b_rtb" {
  vpc_id = "${aws_vpc.deductions-web-vpc.id}"

  route {
    gateway_id = "${aws_internet_gateway.deductions-web-igw.id}"
    cidr_block = "0.0.0.0/0"
  }

  tags = {
    Name = "deductions-web-vpc-public-b-rtb"
  }
}

resource "aws_route_table" "private-a-rtb" {
  vpc_id = "${aws_vpc.deductions-web-vpc.id}"

  route {
    cidr_block = "0.0.0.0/0"
    nat_gateway_id = "${aws_nat_gateway.deductions-web-public-a-natg.id}"
  }

  tags = {
    Name = "deductions-web-vpc-private-a-rtb"
  }
}

resource "aws_route_table" "private-b-rtb" {
  vpc_id = "${aws_vpc.deductions-web-vpc.id}"

  route {
    cidr_block = "0.0.0.0/0"
    nat_gateway_id = "${aws_nat_gateway.deductions-web-public-a-natg.id}"
  }

  tags = {
    Name = "deductions-web-vpc-private-b-rtb"
  }
}

resource "aws_route_table" "private-c-rtb" {
  vpc_id = "${aws_vpc.deductions-web-vpc.id}"

  route {
    cidr_block = "0.0.0.0/0"
    nat_gateway_id = "${aws_nat_gateway.deductions-web-public-a-natg.id}"
  }

  tags = {
    Name = "deductions-web-vpc-private-c-rtb"
  }
}

resource "aws_route_table_association" "public-a-rta" {
  subnet_id      = "${aws_subnet.deductions-web-public-a-subnet.id}"
  route_table_id = "${aws_route_table.public_a_rtb.id}"
}

resource "aws_route_table_association" "public-b-rta" {
  subnet_id      = "${aws_subnet.deductions-web-public-b-subnet.id}"
  route_table_id = "${aws_route_table.public_b_rtb.id}"
}

resource "aws_route_table_association" "private-a-rta" {
  subnet_id      = "${aws_subnet.deductions-web-private-a-subnet.id}"
  route_table_id = "${aws_route_table.private-a-rtb.id}"
}

resource "aws_route_table_association" "private-b-rta" {
  subnet_id      = "${aws_subnet.deductions-web-private-b-subnet.id}"
  route_table_id = "${aws_route_table.private-b-rtb.id}"
}

resource "aws_route_table_association" "private-c-rta" {
  subnet_id      = "${aws_subnet.deductions-web-private-c-subnet.id}"
  route_table_id = "${aws_route_table.private-c-rtb.id}"
}
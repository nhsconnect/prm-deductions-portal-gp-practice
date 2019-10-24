resource "aws_instance" "deductions_bastion_a" {
    ami           = "ami-00a1270ce1e007c27"
    instance_type = "t2.micro"
    vpc_security_group_ids = ["${aws_security_group.bastion_a_sg.id}"]
    associate_public_ip_address = true
    subnet_id = "${aws_subnet.deductions-web-public-a-subnet.id}"
    key_name = "deductions-web-bastion"
    
    tags = {
        Name = "deductions-web-bastion-a"
    }
}

# resource "aws_instance" "deductions_bastion_b" {
#     ami           = "ami-00a1270ce1e007c27"
#     instance_type = "t2.micro"
#     vpc_security_group_ids = ["${aws_security_group.bastion_b_sg.id}"]
#     associate_public_ip_address = true
#     subnet_id = "${aws_subnet.deductions_public_a_subnet.id}"
#     key_name = "opentest-bastion"
    
#     tags = {
#         Name = "deductions-bastion-b"
#     }
# }

resource "aws_security_group" "bastion_a_sg" {
  vpc_id = "${aws_vpc.deductions-web-vpc.id}"
  name   = "deductions-web-bastion-a-sg"

  tags = {
      Name = "deductions-web-bastion-a-sg"
  }
}

# resource "aws_security_group" "bastion_b_sg" {
#   vpc_id = "${aws_vpc.deductions_vpc.id}"
#   name   = "deductions-bastion-b-sg"

#   tags = {
#       Name = "deductions-bastion-b-sg"
#   }  
# }
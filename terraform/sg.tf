resource "aws_security_group" "deductions-web-lb-sg" {
    name        = "deductions-web-lb-sg"
    description = "controls access to the ALB"
    vpc_id      = "${aws_vpc.deductions-web-vpc.id}"

    ingress {
        protocol    = "tcp"
        from_port   = 80
        to_port     = 80
        cidr_blocks = ["194.101.83.23/32"]
    }

    egress {
        from_port = 0
        to_port   = 0
        protocol  = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }

    tags = {
        Name = "deductions-web-lb-sg"
    }
}

# Traffic to the ECS Cluster should only come from the ALB
resource "aws_security_group" "deductions-web-ecs-tasks-sg" {
    name        = "deductions-web-ecs-tasks-sg"
    description = "allow inbound access from the ALB only"
    vpc_id      = "${aws_vpc.deductions-web-vpc.id}"

    ingress {
        protocol        = "tcp"
        from_port       = "3000"
        to_port         = "3000"
        security_groups = ["${aws_security_group.deductions-web-lb-sg.id}"]
    }

    egress {
        protocol    = "-1"
        from_port   = 0
        to_port     = 0
        cidr_blocks = ["0.0.0.0/0"]
    }

    tags = {
        Name = "deductions-web-ecs-tasks-sg"
    }    
}
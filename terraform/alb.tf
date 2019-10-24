resource "aws_alb" "deductions-web-alb" {
  name            = "deductions-web-alb"
  subnets         = ["${aws_subnet.deductions-web-public-a-subnet.id}", 
                     "${aws_subnet.deductions-web-public-b-subnet.id}"]

  security_groups = ["${aws_security_group.deductions-web-lb-sg.id}"]
}

resource "aws_alb_target_group" "deductions-web-alg-tg" {
  name        = "deductions-web-alg-tg"
  port        = 3000
  protocol    = "HTTP"
  vpc_id      = "${aws_vpc.deductions-web-vpc.id}"
  target_type = "ip"
}

# Redirect all traffic from the ALB to the target group
resource "aws_alb_listener" "deductions-web-alg-listener" {
  load_balancer_arn = "${aws_alb.deductions-web-alb.arn}"
  port              = "80"
  protocol          = "HTTP"

  default_action {
    target_group_arn = "${aws_alb_target_group.deductions-web-alg-tg.arn}"
    type             = "forward"
  }
}
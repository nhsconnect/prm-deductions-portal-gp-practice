resource "aws_alb_target_group" "alb-tg" {
  name                  = "${var.environment}-${var.component_name}-alb-tg"
  port                  = 3000
  protocol              = "HTTP"
  vpc_id                = data.terraform_remote_state.prm-deductions-infra.outputs.deductions_public_vpc_id
  target_type           = "ip"
  deregistration_delay  = 20
}

resource "aws_alb_listener" "alb-listener-https" {
  load_balancer_arn = aws_alb.alb.arn
  port              = "443"
  protocol          = "HTTPS"

  ssl_policy        = "ELBSecurityPolicy-TLS-1-2-2017-01"
  certificate_arn   = aws_acm_certificate_validation.default.certificate_arn

  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      message_body = "Error"
      status_code  = "501"
    }
  }
}


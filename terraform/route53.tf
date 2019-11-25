locals {
  deductions_public_alb_dns = data.terraform_remote_state.prm-deductions-infra.outputs.deductions_public_alb_dns
}

resource "aws_route53_record" "portal-dev-r53-record" {
  zone_id = data.aws_ssm_parameter.root_zone_id.value
  name    = "dev"
  type    = "CNAME"
  ttl     = "300"
  records = [local.deductions_public_alb_dns]
}
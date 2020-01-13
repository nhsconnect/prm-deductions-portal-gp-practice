locals {
  deductions_public_alb_dns = data.aws_ssm_parameter.deductions_public_alb_dns.value
  zone_id = data.aws_ssm_parameter.root_zone_id.value
}

resource "aws_route53_record" "portal-cname-r53-record" {
  zone_id = local.zone_id
  name    = var.environment
  type    = "CNAME"
  ttl     = "300"
  records = [local.deductions_public_alb_dns]
}

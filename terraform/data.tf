data "aws_caller_identity" "current" {}

data "aws_ssm_parameter" "root_zone_id" {
  name = "/NHS/deductions-${data.aws_caller_identity.current.account_id}/root_zone_id"
}

data "aws_ssm_parameter" "deductions_public_ecs_cluster_id" {
  name = "/nhs/${var.environment}/deductions_public_ecs_cluster_id"
}

data "aws_ssm_parameter" "deductions_public_gp_portal_sg_id" {
  name = "/nhs/${var.environment}/deductions_public_gp_portal_sg_id"
}

data "aws_ssm_parameter" "deductions_public_private_subnets" {
  name = "/nhs/${var.environment}/deductions_public_private_subnets"
}

data "aws_ssm_parameter" "identity_url" {
  name = "/NHS/${var.environment}-${data.aws_caller_identity.current.account_id}/gp-portal/identity_url"
}

data "aws_ssm_parameter" "redirect_uri" {
  name = "/NHS/${var.environment}-${data.aws_caller_identity.current.account_id}/gp-portal/redirect_uri"
}

data "aws_ssm_parameter" "user_info" {
  name = "/NHS/${var.environment}-${data.aws_caller_identity.current.account_id}/gp-portal/user_info"
}

data "aws_ssm_parameter" "client_id" {
  name = "/NHS/${var.environment}-${data.aws_caller_identity.current.account_id}/gp-portal/client_id"
}

data "aws_ssm_parameter" "deductions_public_alb_dns" {
  name = "/nhs/${var.environment}/deductions_public_alb_dns"
}

data "aws_ssm_parameter" "deductions_public_alb_httpl_arn" {
  name = "/nhs/${var.environment}/deductions_public_alb_httpl_arn"
}

data "aws_ssm_parameter" "deductions_public_vpc_id" {
  name = "/nhs/${var.environment}/deductions_public_vpc_id"
}

data "aws_ssm_parameter" "deductions_public_alb_arn" {
  name = "/nhs/${var.environment}/deductions_public_alb_arn"
}
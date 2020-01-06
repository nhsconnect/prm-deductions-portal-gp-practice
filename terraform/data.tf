data "aws_caller_identity" "current" {}

data "aws_ssm_parameter" "root_zone_id" {
  name = "/NHS/deductions-${data.aws_caller_identity.current.account_id}/root_zone_id"
}

data "terraform_remote_state" "prm-deductions-infra" {
  backend = "s3"

  config = {
        bucket  = "prm-327778747031-terraform-states"
        key     = "gpportal/terraform.tfstate"
        region  = "eu-west-2"
        encrypt = true
  }
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
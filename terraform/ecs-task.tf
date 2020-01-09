locals {
    task_execution_role     = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:role/${var.task_execution_role}"
    task_ecr_url            = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.region}.amazonaws.com"
    task_log_group          = "/nhs/deductions/${var.environment}-${data.aws_caller_identity.current.account_id}/${var.task_family}"
    environment_variables        = [
      { name = "REACT_APP_GP_PORTAL_IDENTITY_URL", value = data.aws_ssm_parameter.identity_url.value },
      { name = "REACT_APP_GP_PORTAL_REDIRECT_URI", value = data.aws_ssm_parameter.redirect_uri.value },
      { name = "REACT_APP_GP_PORTAL_USER_INFO", value = data.aws_ssm_parameter.user_info.value },
      { name = "REACT_APP_GP_PORTAL_CLIENT_ID", value = data.aws_ssm_parameter.client_id.value }
    ]
}

resource "aws_ecs_task_definition" "task" {
  family                    = var.task_family
  network_mode              = "awsvpc"
  requires_compatibilities  = ["FARGATE"]
  cpu                       = var.task_cpu
  memory                    = var.task_memory
  execution_role_arn        = local.task_execution_role

  container_definitions     =  templatefile("${path.module}/templates/ecs-task-def.tmpl", {
        container_name  = var.task_container_name,
        ecr_url         = local.task_ecr_url
        image_name      = var.task_image_name
        image_tag       = var.task_image_tag
        cpu             = var.task_cpu,
        memory          = var.task_memory,
        container_port  = var.task_container_port,
        host_port       = var.task_host_port,
        log_region      = var.region,
        log_group       = local.task_log_group,
        environment_variables = local.environment_variables
    })
}

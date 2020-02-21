locals {
  ecs_cluster_id    = data.aws_ssm_parameter.deductions_public_ecs_cluster_id.value
  ecs_tasks_sg_id   = data.aws_ssm_parameter.deductions_public_gp_portal_sg_id.value
  private_subnets   = split(",", data.aws_ssm_parameter.deductions_public_private_subnets.value)
}

resource "aws_ecs_service" "ecs-service" {
  name            = "${var.environment}-${var.component_name}-service"
  cluster         = local.ecs_cluster_id
  task_definition = aws_ecs_task_definition.task.arn
  desired_count   = var.service_desired_count
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = [local.ecs_tasks_sg_id]
    subnets         = local.private_subnets
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.alb-tg.arn
    container_name   = var.service_container_name
    container_port   = var.service_container_port
  }

  depends_on = [aws_alb_target_group.alb-tg, 
                    aws_alb_listener.alb-listener-https, 
                    aws_alb_listener_rule.alb-listener-rule]
}

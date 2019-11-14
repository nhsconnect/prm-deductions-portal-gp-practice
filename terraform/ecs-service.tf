locals {
  deductions_public_ecs_cluster_id    = data.terraform_remote_state.prm-deductions-infra.outputs.deductions_public_ecs_cluster_id
  deductions_public_ecs_tasks_sg_id   = data.terraform_remote_state.prm-deductions-infra.outputs.deductions_public_ecs_tasks_sg_id
  deductions_public_private_subnets   = data.terraform_remote_state.prm-deductions-infra.outputs.deductions_public_private_subnets
  deductions_public_alb_tg_arn        = data.terraform_remote_state.prm-deductions-infra.outputs.deductions_public_alb_tg_arn
}

resource "aws_ecs_service" "ecs-service" {
  name            = "${var.environment}-${var.component_name}-service"
  cluster         = "${local.deductions_public_ecs_cluster_id}"
  task_definition = "${aws_ecs_task_definition.task.arn}"
  desired_count   = "${var.service_desired_count}"
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = ["${local.deductions_public_ecs_tasks_sg_id}"]
    subnets         = "${local.deductions_public_private_subnets}"
  }

  load_balancer {
    target_group_arn = "${local.deductions_public_alb_tg_arn}"
    container_name   = "${var.service_container_name}"
    container_port   = "${var.service_container_port}"
  }
}
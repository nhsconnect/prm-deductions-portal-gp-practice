resource "aws_ecs_cluster" "deductions-web-ecs" {
  name = "deductions-web-ecs-cluster"
}

resource "aws_ecs_task_definition" "deductions-web-task" {
  family                   = "app"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "256"
  memory                   = "512"
  execution_role_arn       = "arn:aws:iam::327778747031:role/ecsTaskExecutionRole"

  container_definitions = <<DEFINITION
[
  {
    "cpu": 256,
    "image": "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.region}.amazonaws.com/deductions/gp-portal:latest",
    
    "memory": 512,
    "name": "app",
    "networkMode": "awsvpc",
    "portMappings": [
      {
        "containerPort": 3000,
        "hostPort": 3000
      }
    ]
  }
]
DEFINITION
}

data "aws_caller_identity" "current" {}

resource "aws_ecs_service" "deductions-web-ecs-service" {
  name            = "deductions-web-ecs-service"
  cluster         = "${aws_ecs_cluster.deductions-web-ecs.id}"
  task_definition = "${aws_ecs_task_definition.deductions-web-task.arn}"
  desired_count   = "2"
  launch_type     = "FARGATE"

  network_configuration {
    security_groups = ["${aws_security_group.deductions-web-ecs-tasks-sg.id}"]
    subnets         = ["${aws_subnet.deductions-web-private-a-subnet.id}", "${aws_subnet.deductions-web-private-b-subnet.id}"]
  }

  load_balancer {
    target_group_arn = "${aws_alb_target_group.deductions-web-alg-tg.arn}"
    container_name   = "app"
    container_port   = "3000"
  }

  depends_on = [
    "aws_alb_listener.deductions-web-alg-listener",
  ]
}
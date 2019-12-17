environment          = "dev"
component_name       = "gp-practice-portal"

task_execution_role  = "ecsTaskExecutionRole"
task_family          = "gp-portal"

task_container_name  = "gp-portal-container"
task_image_name      = "deductions/gp-portal"
task_cpu             = 256
task_memory          = 512
task_container_port  = 3000
task_host_port       = 3000

service_container_port  = "3000" 
service_container_name  = "gp-portal-container"
service_desired_count   = "2"
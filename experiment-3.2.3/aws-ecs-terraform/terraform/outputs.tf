output "alb_dns_name" {
  value       = aws_lb.app.dns_name
  description = "ALB DNS name for application access"
}

output "ecs_cluster_name" {
  value       = aws_ecs_cluster.main.name
  description = "ECS cluster name"
}

output "ecs_service_name" {
  value       = aws_ecs_service.app.name
  description = "ECS service name"
}

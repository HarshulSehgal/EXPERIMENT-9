# Experiment 3.2.3 - AWS Deployment with Load Balancing

## Aim
To deploy a full-stack application on AWS with load balancing and auto-scaling.

## Objectives Covered
1. AWS infrastructure via Terraform (VPC, subnets, ALB, ECS)
2. ECS service with auto-scaling group behavior (2 to 4 tasks)
3. Docker container deployment to ECS Fargate
4. Application Load Balancer routing
5. CI/CD deployment pipeline template

## Folder Layout
- `aws-ecs-terraform/app/` - Dockerized full-stack sample app
- `aws-ecs-terraform/terraform/` - Infrastructure as Code
- `aws-ecs-terraform/.github/workflows/deploy-aws.yml` - GitHub Actions deploy pipeline

## Prerequisites
- AWS account + IAM user with ECS/VPC/IAM/ALB/ECR permissions
- AWS CLI configured
- Terraform 1.5+
- Docker 20.10+

## Step 1: Provision Infrastructure
```bash
cd aws-ecs-terraform/terraform
cp terraform.tfvars.example terraform.tfvars

terraform init
terraform plan
terraform apply
```

## Step 2: Build and Push Image
Option A: Push manually to ECR, then update task definition.
Option B: Use provided GitHub Actions workflow for automated push and ECS deploy.

## Step 3: CI/CD Pipeline Secrets
Add these GitHub repository secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `ECR_REPOSITORY`
- `ECS_CLUSTER`
- `ECS_SERVICE`
- `ECS_TASK_FAMILY`

## Deployment Workflow Mapping
1. `terraform apply` provisions VPC, subnets, ALB, ECS cluster/service
2. Push to `main` triggers GitHub Actions deployment workflow
3. Workflow builds Docker image and pushes to ECR (`latest` + commit SHA)
4. ECS service updates task definition and performs rolling deployment
5. ALB distributes traffic across running tasks
6. Auto-scaling adjusts task count based on CPU utilization

## Expected Outcome Mapping
- Highly available app across 2 AZs (public + private subnets)
- Load-balanced traffic using ALB
- Auto-scaling range: minimum 2 tasks, maximum 4 tasks
- Zero-downtime rolling deployment settings via ECS service deployment config
- Fully codified IaC managed by Terraform

# Experiment 3.2 - Containerization, CI/CD, and AWS Deployment
**Course:** Full-Stack Web Development (24CSP-293)

## Overview
| Experiment | Title | Deliverable |
|---|---|---|
| 3.2.1 | Dockerize React Application with Multi-Stage Build | Optimized Docker image served via Nginx on port 8080 |
| 3.2.2 | CI/CD Pipeline with GitHub Actions | Automated test + Docker build/push to GHCR + Slack notifications |
| 3.2.3 | AWS Deployment with Load Balancing | Terraform-provisioned ECS + ALB + auto-scaling deployment |

## Folder Structure
- `experiment-3.2/experiment-3.2.1/`
- `experiment-3.2/experiment-3.2.2/`
- `experiment-3.2/experiment-3.2.3/`

## Quick Start
### 3.2.1 - Dockerized React App
```bash
cd experiment-3.2.1/react-docker-app
npm install
docker build -t exp-3-2-1-react .
docker run --rm -p 8080:8080 -e API_BASE_URL=http://api.example.com exp-3-2-1-react
```
Open: http://localhost:8080

### 3.2.2 - GitHub Actions CI/CD
```bash
cd experiment-3.2.2/ci-cd-react-app
npm install
npm test
npm run build
```
Push this folder to GitHub and enable workflow at:
- `.github/workflows/ci-cd.yml`

### 3.2.3 - AWS + Terraform Deployment
```bash
cd experiment-3.2.3/aws-ecs-terraform/terraform
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform apply
```
Then push to main branch to trigger `.github/workflows/deploy-aws.yml`

## Student Info
- **Name:** Dewang Singla
- **Course:** CONT_24CSP-293 - Full Stack I

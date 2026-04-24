# EXPERIMENT-9

## Experiment 3.2 - Containerization, CI/CD, and AWS Deployment
**Course:** Full-Stack Web Development (24CSP-293)

---

## Overview

| Experiment | Title | Deliverable |
|-----------|------|------------|
| 3.2.1 | Dockerize React Application with Multi-Stage Build | Optimized Docker image served via Nginx on port 8080 |
| 3.2.2 | CI/CD Pipeline with GitHub Actions | Automated test + Docker build/push to GHCR + Slack notifications |
| 3.2.3 | AWS Deployment with Load Balancing | Terraform-provisioned ECS + ALB + auto-scaling deployment |

---

## Folder Structure

- `experiment-3.2/experiment-3.2.1/`
- `experiment-3.2/experiment-3.2.2/`
- `experiment-3.2/experiment-3.2.3/`

---

## Quick Start

### 3.2.1 - Dockerized React App
```bash
cd experiment-3.2.1/react-docker-app
npm install
docker build -t exp-3-2-1-react .
docker run --rm -p 8080:8080 -e API_BASE_URL=http://api.example.com exp-3-2-1-react
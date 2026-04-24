# Experiment 3.2.1 - Dockerize React Application with Multi-Stage Build

## Aim
To containerize a React application using Docker multi-stage builds for optimized production deployment.

## Objectives Covered
1. Multi-stage Docker build (Node build stage + Nginx runtime stage)
2. Production Nginx configuration
3. Optimized image size (typically under 100MB)
4. Runtime environment variable handling
5. Container build and run workflow

## Project Structure
- `react-docker-app/` - React app with Docker + Nginx setup

## Prerequisites
- Docker 20.10+
- Node.js 18+

## Build and Run
```bash
cd react-docker-app
npm install
npm run build

# Build Docker image
docker build -t exp-3-2-1-react .

# Run on port 8080 with runtime env variable
docker run --rm -p 8080:8080 -e API_BASE_URL=http://api.example.com exp-3-2-1-react
```

Open: http://localhost:8080

## Validate Requirements
```bash
# Check compressed size
docker image ls exp-3-2-1-react

# Verify gzip response
curl -I -H "Accept-Encoding: gzip" http://localhost:8080

# Verify cache headers for assets
curl -I http://localhost:8080/assets/index.js
```

## Expected Outcome Mapping
- Production image: based on `nginx:alpine`, usually below 100MB for this app
- App served via Nginx on port `8080`
- Gzip enabled in `nginx.conf`
- Static asset caching headers set to long-lived immutable caching

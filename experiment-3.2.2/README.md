# Experiment 3.2.2 - CI/CD Pipeline with GitHub Actions

## Aim
To implement an automated CI/CD pipeline for React applications using GitHub Actions.

## Objectives Covered
1. GitHub Actions workflow configuration
2. Automated testing stage
3. Docker image build and push
4. Deploy to GitHub Container Registry (GHCR)
5. Deployment notifications to Slack

## Project Structure
- `ci-cd-react-app/` - React app + workflow + Dockerfile

## Setup Steps
1. Push `ci-cd-react-app` to a GitHub repository.
2. Add repository secret:
   - `SLACK_WEBHOOK_URL` (optional but required for Slack notifications)
3. Ensure workflow file exists at:
   - `.github/workflows/ci-cd.yml`

## Workflow Behavior
- On Pull Request to `main`:
  - Install dependencies
  - Run tests
  - Build React app
- On Push to `main`:
  - Run tests/build
  - Build Docker image
  - Push image to GHCR with tags:
    - `latest`
    - `sha-<short-commit-sha>`
  - Send Slack notification

## Local Validation
```bash
cd ci-cd-react-app
npm install
npm test
npm run build

docker build -t local-exp-3-2-2 .
docker run --rm -p 8080:8080 local-exp-3-2-2
```

Open: http://localhost:8080

## Netlify Deployment

This app is Netlify-ready.

1. Connect the `ci-cd-react-app` folder repository to Netlify.
2. Use the default settings from `netlify.toml`:
  - Build command: `npm run build`
  - Publish directory: `dist`
3. Deploy.

If deployment is configured manually in Netlify UI, make sure the same build command and publish directory are used.

## Expected Outcome Mapping
- PR creation triggers automated testing
- Docker image pushed to GitHub Container Registry
- Slack notification sent for deployment result
- Image includes both `latest` and commit SHA tags

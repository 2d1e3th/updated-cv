# IT415 Module 3 - Deployment and Management

## Application and environments

- Repository: https://github.com/2d1e3th/updated-cv
- Production: https://updated-cv-psi.vercel.app
- Build: `npm run build`
- Output: `dist`
- Production branch: `main`
- Lab branch: `codex/it415-module3-lab`

The app includes a Home page, About page, public GitHub REST data call, GitHub repository, and public environment-variable configuration.

## Environment variable exercise

Name: `VITE_GITHUB_USERNAME`
Value: `2d1e3th`
Purpose: selects the public account used by the GitHub repository feed.

1. Copy `.env.example` to `.env.local` for local development.
2. In Vercel, open the project's Environment Variables settings.
3. Add `VITE_GITHUB_USERNAME` with the public value `2d1e3th` for Development, Preview, and Production.
4. Redeploy after changing build-time environment variables.
5. Verify the Works page's GitHub feed and its fallback behavior.

`VITE_*` values are exposed to browsers. This setting is deliberately public and is not an API token. Never store a private credential under this prefix. `.env` and `.env.*` are ignored; `.env.example` is a tracked sample without secrets. The existing account is also a safe fallback so a missing setting does not break the site.

## Preview and release exercise

1. Create the lab branch from the current working portfolio.
2. Commit and push its configuration and homepage text change.
3. Inspect the Vercel Preview result for that exact commit.
4. Verify navigation, assets, CV, and the GitHub feed on the preview URL.
5. Merge the reviewed working branch into `main`.
6. Push `main` and observe the new Production deployment.

## Troubleshooting exercise

On the lab preview branch only, temporarily import a nonexistent stylesheet from `src/main.jsx`. The production build should fail with a missing-import/module error. Inspect the Vercel Build Logs, identify the first actionable error and source file, remove the incorrect import, commit the correction, and push again. Verify the repaired preview before releasing it.

An intentionally broken preview is an exercise, not an actual production incident. Keep the failed deployment in history as evidence. Do not merge the failing source state into production.

## Rollback demonstration

After a successful new production deployment, use Vercel's deployment history to restore an eligible earlier working production deployment. Verify its public site, then restore/promote the latest working release again. Record which source commits were active at each stage. A Git revert is not the same operation as Vercel Instant Rollback.

Dashboard access and plan eligibility are required. Do not claim this demonstration is complete based solely on a successful Git push or a written procedure.

## Submission evidence

Capture real Vercel dashboard screenshots of:

- Successful production deployment
- Preview deployment
- Deployment history
- Build logs showing the controlled error and successful correction

Include repository and production URLs and a short error/solution explanation. Keep source commits, deployment IDs, timestamps, and environment labels visible. Do not expose authentication tokens or secret environment values. Evidence is collected separately from the public website.

## Monitoring and recovery

For build failures, inspect the first actionable Build Logs error, dependencies, import capitalization, build command, and Node compatibility. For a deployed error, reproduce it in Preview and inspect network requests, routes, environment scopes, and any runtime logs. The current site is frontend-only; no serverless runtime logs should be invented. Severe production incidents may require restoring a known-good release before investigating.

Official references:
- https://vite.dev/guide/env-and-mode
- https://vercel.com/docs/deployments/environments
- https://vercel.com/docs/deployments/rollback-production-deployment

# Scalable Starter Monorepo Template

A scalable full-stack starter template using Turborepo for monorepo management. Includes Next.js frontend with TypeScript, Tailwind CSS, and shadcn/ui; Nest.js backend with TypeScript; Supabase for database, auth, and storage; Jest for unit/integration testing; Playwright for end-to-end testing; Husky for Git hooks; and GitHub Actions for CI/CD. Uses pnpm as the package manager.

## Structure
- `apps/frontend`: Next.js application with TypeScript, Tailwind CSS for the user interface.
- `apps/backend`: Nest.js API server with TypeScript, handling business logic and Supabase integration.
- `packages/ui`: Shared React components library using shadcn/ui and Tailwind CSS.
- `packages/eslint-config`: Shared ESLint configurations for code quality across the monorepo.
- `packages/typescript-config`: Shared TypeScript configurations for type safety and path aliases.
- `packages/supabase`: Shared Supabase client, CLI and utilities for database access, usable in both frontend and backend.
- `e2e/`: Playwright end-to-end tests covering full application flows.
- `supabase/`: Local Supabase CLI configurations and migration files.
- `.github/workflows/`: GitHub Actions for CI/CD pipelines (build, test).
- Root files: `turbo.json` for task orchestration, `pnpm-workspace.yaml` for workspaces, Husky hooks for pre-commit checks.

This structure keeps apps independent for easy scaling while sharing code via packages.

## Quick Setup
1. Install Node.js (version 20 or higher) from nodejs.org.
2. Install pnpm: Run `npm install -g pnpm` in your terminal.
3. Clone the repository: `git clone git@github.com:afrinxnahar/Turborepo-Fullstack-Starter-Template.git && cd Turborepo-Fullstack-Starter-Template`.
4. Install dependencies: `pnpm install`.
5. Set up environment: Copy `.env.example` to `.env` and fill in values (e.g., Supabase keys from your project dashboard).
6. Start development: `pnpm run dev` — Opens frontend at http://localhost:3000 and backend at http://localhost:8000.
7. For local database: Follow instructions in `packages/supabase/README.md` to run Supabase locally with Docker.

No coding needed to get started—browse the app in your web browser.

## Development Guide (For Developers)
This guide helps you extend the template. All commands run from the root unless noted.

### Adding Features
- **Frontend**: Edit files in `apps/frontend`. Add shadcn/ui components: `pnpm ui add <component-name>`.
- **Backend**: Add modules/services in `apps/backend/src`. Use `@repo/supabase` for database interactions.
- **Shared Code**: For new utilities, create packages with `pnpm turbo gen workspace --name <name> --type package`.
- **Database**: Use Supabase for tables, auth, and realtime. See `packages/supabase/README.md` for setup, local running, migrations, and syncing.

### Running and Building
- Development mode: `pnpm run dev` (runs frontend and backend in parallel).
- Build: `pnpm run build` (compiles all apps and packages).
- Lint: `pnpm run lint` (checks code style via ESLint).

### Testing
- Unit/Integration: `pnpm turbo run test` (uses Jest for frontend and backend).
- End-to-End: `pnpm test:e2e` (uses Playwright; start apps first with `pnpm run dev`).
- Watch mode: Add `--watch` to test scripts for live updates.

### CI/CD and Hooks
- CI/CD: Configured in `.github/workflows/ci.yml`—triggers on push/pull requests for build and test.
- Husky: Automatically runs lint and tests on commits (configured in `.husky/`).

### Deployment
- Frontend: Deploy to Vercel (connect repo and set env vars).
- Backend: Deploy to Railway or Render (set env vars for Supabase).
- Database: Use Supabase dashboard for production; manage schemas via migrations.

For questions, open a GitHub issue.

## Best Practices
- Commit often with clear messages; use branches for features (e.g., `git checkout -b feature:new-endpoint`).
- Keep shared packages minimal—only for cross-app logic like Supabase utils.
- Write tests early: Cover components/services with Jest; simulate user flows with Playwright.
- Pull Supabase schema frequently (`pnpm run supabase:pull`) to avoid conflicts.
- Use TypeScript strictly for safety; run `pnpm run build` before pushing.
- Monitor CI failures; fix lint/test issues pre-commit via Husky.

# Capsule

A modern monorepo built with Turborepo, TypeScript, and Next.js.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org/) app
- `@capsule/ui`: a React component library shared across applications
- `@capsule/eslint-config`: ESLint configurations (includes Next.js, React, and Prettier integration)
- `@capsule/typescript-config`: Shared `tsconfig.json` files used throughout the monorepo
- `@capsule/domain`: Domain logic and business rules

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/) with strict mode enabled.

### Tech Stack

- **[TypeScript](https://www.typescriptlang.org/)** - Static type checking (strict mode)
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io)** - Code formatting
- **[Husky](https://typicode.github.io/husky/)** - Git hooks
- **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters on staged files
- **[commitlint](https://commitlint.js.org/)** - Enforce conventional commits
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Turborepo](https://turbo.build/repo)** - Monorepo build system
- **[PostgreSQL](https://www.postgresql.org/)** - Production-ready database
- **[Docker](https://www.docker.com/)** - Containerization for development and deployment

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm 9.0.0
- Docker & Docker Compose (for database and containerized development)

### Local Development (without Docker)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build all apps and packages
pnpm build

# Run linting
pnpm lint

# Run type checking
pnpm check-types

# Format code
pnpm format
```

### Docker Development Setup (Recommended)

Docker provides an isolated development environment with PostgreSQL database.

#### Quick Start

```bash
# 1. Copy environment variables
cp .env.example .env

# 2. Start all services (database + app)
docker compose up -d

# 3. View logs
docker compose logs -f web

# 4. Stop all services
docker compose down
```

#### Available Services

- **web**: Next.js application (http://localhost:3000)
- **postgres**: PostgreSQL database (localhost:5432)
- **pgadmin**: Database management UI (http://localhost:5050) - Optional

#### Start pgAdmin (Database UI)

```bash
# Start with pgadmin
docker compose --profile tools up -d

# Access pgAdmin at http://localhost:5050
# Email: admin@capsule.local
# Password: admin
```

#### Useful Docker Commands

```bash
# Start services
docker compose up -d              # Start in background
docker compose up                 # Start with logs

# Stop services
docker compose down               # Stop and remove containers
docker compose down -v            # Stop and remove volumes (deletes database data)

# View logs
docker compose logs -f            # Follow all logs
docker compose logs -f web        # Follow web app logs
docker compose logs -f postgres   # Follow database logs

# Restart a service
docker compose restart web
docker compose restart postgres

# Execute commands inside containers
docker compose exec web pnpm lint           # Run lint inside container
docker compose exec postgres psql -U capsule -d capsule_dev  # Access database CLI

# Rebuild containers
docker compose build              # Rebuild all
docker compose build web          # Rebuild web only
docker compose up -d --build      # Rebuild and start
```

#### Database Access

**Connection String:**

```
postgresql://capsule:capsule_dev_password@localhost:5432/capsule_dev
```

**Using psql CLI:**

```bash
docker compose exec postgres psql -U capsule -d capsule_dev
```

**Using pgAdmin:**

1. Start pgAdmin: `docker compose --profile tools up -d`
2. Open http://localhost:5050
3. Login with credentials from `.env`
4. Add server:
   - Host: `postgres`
   - Port: `5432`
   - Database: `capsule_dev`
   - Username: `capsule`
   - Password: `capsule_dev_password`

#### Environment Variables

This project uses [Dotenv Vault](https://www.dotenv.org/docs/security/env-vault) for secure environment variable management.

**For team members with vault access:**

```bash
# Login to dotenv vault
npx dotenv-vault login

# Pull environment variables
npx dotenv-vault pull
```

**For local development without vault:**

```bash
# Copy example file
cp .env.example .env

# Edit .env with your local values
```

**Key variables:**

- `POSTGRES_USER`: Database user
- `POSTGRES_PASSWORD`: Database password
- `POSTGRES_DB`: Database name
- `DATABASE_URL`: Full connection string
- `WEB_PORT`: Port for web application

**Note:** The `.env.vault` file is encrypted and safe to commit to Git. Your local `.env` file is gitignored.

## Development Workflow

This project follows **GitHub Flow** for branch management:

### Branching Strategy

```
main (protected branch - always deployable)
  ↑
  └── feat/feature-name      # New features
  └── fix/bug-description    # Bug fixes
  └── chore/task-name        # Maintenance tasks
  └── refactor/description   # Code refactoring
  └── docs/description       # Documentation updates
```

### Branch Naming Convention

- `feat/description` - New features or enhancements
- `fix/description` - Bug fixes
- `chore/description` - Maintenance tasks (deps, configs, etc.)
- `refactor/description` - Code refactoring without functionality changes
- `docs/description` - Documentation updates

### Workflow Steps

1. **Create a feature branch from `main`**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes and commit**
   - Commits must follow [Conventional Commits](https://www.conventionalcommits.org/)
   - Examples: `feat: add user authentication`, `fix: resolve login bug`
   - commitlint will validate your commit messages

3. **Push your branch**

   ```bash
   git push -u origin feat/your-feature-name
   ```

4. **Open a Pull Request**
   - Go to GitHub and create a PR to `main`
   - CI will automatically run (lint, type-check, format-check)
   - All checks must pass before merging

5. **Merge to main**
   - Merge the PR once approved and all checks pass
   - Delete the feature branch after merging

### Commit Message Format

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

Types:
  feat:     New feature
  fix:      Bug fix
  docs:     Documentation changes
  style:    Code style changes (formatting, etc.)
  refactor: Code refactoring
  test:     Adding or updating tests
  chore:    Maintenance tasks
```

**Examples:**

```bash
git commit -m "feat: add user profile page"
git commit -m "fix: resolve navigation bug on mobile"
git commit -m "chore: update dependencies"
```

## Branch Protection

The `main` branch is protected with the following rules:

- ✅ Requires pull request before merging
- ✅ Requires status checks to pass (CI must pass)
- ✅ Requires branches to be up to date before merging
- ❌ No direct pushes to `main`

## CI/CD

GitHub Actions automatically runs on every push and pull request:

- **Lint**: ESLint validation across all workspaces
- **Type Check**: TypeScript type validation
- **Format Check**: Prettier format validation

See `.github/workflows/ci.yml` for configuration.

## Pre-commit Hooks

Husky runs automatically before each commit:

- **lint-staged**: Formats staged files with Prettier
- **commitlint**: Validates commit message format

## Project Structure

```
capsule/
├── apps/
│   └── web/              # Next.js application
├── packages/
│   ├── ui/               # Shared React components
│   ├── domain/           # Business logic
│   ├── eslint-config/    # Shared ESLint configs
│   └── typescript-config/# Shared TypeScript configs
├── .github/
│   └── workflows/        # GitHub Actions workflows
└── turbo.json           # Turborepo configuration
```

## Useful Commands

```bash
# Development
pnpm dev                 # Start all apps in dev mode
pnpm dev --filter=web    # Start only web app

# Building
pnpm build               # Build all apps and packages
pnpm build --filter=web  # Build only web app

# Code Quality
pnpm lint                # Run ESLint
pnpm check-types         # Run TypeScript compiler
pnpm format              # Format all files with Prettier

# Git Hooks
pnpm prepare             # Install Husky hooks
```

## Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Conventional Commits](https://www.conventionalcommits.org/)

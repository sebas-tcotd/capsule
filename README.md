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

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm 9.0.0

### Installation

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

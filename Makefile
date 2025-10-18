.PHONY: help dev dev-build up down logs clean db-shell db-reset install lint format

# Default target
help:
	@echo "Capsule Development Commands"
	@echo ""
	@echo "Setup:"
	@echo "  make install        Install dependencies"
	@echo "  make setup          Copy .env.example to .env"
	@echo ""
	@echo "Docker:"
	@echo "  make dev            Start development environment"
	@echo "  make dev-build      Rebuild and start development environment"
	@echo "  make up             Start all services in background"
	@echo "  make down           Stop all services"
	@echo "  make logs           Follow logs"
	@echo "  make clean          Stop services and remove volumes"
	@echo ""
	@echo "Database:"
	@echo "  make db-shell       Open PostgreSQL shell"
	@echo "  make db-reset       Reset database (recreate volumes)"
	@echo ""
	@echo "Development:"
	@echo "  make lint           Run linting"
	@echo "  make format         Format code with Prettier"
	@echo "  make types          Run type checking"

# Setup
install:
	pnpm install

setup:
	cp .env.example .env
	@echo "✅ .env file created. Please update values as needed."

# Docker commands
dev:
	docker compose up

dev-build:
	docker compose up --build

up:
	docker compose up -d

down:
	docker compose down

logs:
	docker compose logs -f

clean:
	docker compose down -v

# Database commands
db-shell:
	docker compose exec postgres psql -U capsule -d capsule_dev

db-reset:
	docker compose down -v
	docker compose up -d postgres
	@echo "✅ Database reset complete"

# Development commands
lint:
	pnpm lint

format:
	pnpm format

types:
	pnpm check-types

# Combined commands
rebuild: down dev-build

fresh: clean setup install up
	@echo "✅ Fresh environment ready!"

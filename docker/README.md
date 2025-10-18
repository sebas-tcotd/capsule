# Docker Setup

This directory contains Docker-related configuration for the Capsule project.

## Structure

```
docker/
├── postgres/
│   └── init/
│       └── 01-init.sql    # Database initialization script
└── README.md              # This file
```

## PostgreSQL Initialization

The `postgres/init/` directory contains SQL scripts that run automatically when the PostgreSQL container is created for the first time.

### Scripts

- **01-init.sql**: Creates the initial database schema, tables, and seed data

### What's Included

1. **Extensions**:
   - `uuid-ossp`: UUID generation
   - `pg_trgm`: Text search functionality

2. **Schema**: `capsule` schema for all application tables

3. **Tables**: Example `users` table with common patterns

4. **Triggers**: `updated_at` trigger for automatic timestamp updates

5. **Indexes**: Performance indexes on common query fields

6. **Seed Data**: Development user accounts

## Customization

### Adding New Initialization Scripts

Create numbered SQL files in `postgres/init/`:

```sql
-- docker/postgres/init/02-add-products.sql
CREATE TABLE capsule.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

Scripts run in alphabetical order (01, 02, 03, etc.).

### Resetting the Database

If you modify initialization scripts, you need to reset the database:

```bash
# Option 1: Using Makefile
make db-reset

# Option 2: Using docker compose
docker compose down -v
docker compose up -d postgres
```

**Warning**: This will delete all data in the database!

## Database Access

### Using psql

```bash
# Access database shell
docker compose exec postgres psql -U capsule -d capsule_dev

# Run a SQL file
docker compose exec -T postgres psql -U capsule -d capsule_dev < my-script.sql
```

### Using pgAdmin

1. Start pgAdmin:

   ```bash
   docker compose --profile tools up -d
   ```

2. Access at http://localhost:5050

3. Default credentials (from .env):
   - Email: `admin@capsule.local`
   - Password: `admin`

4. Add server connection:
   - **Name**: Capsule Dev
   - **Host**: `postgres` (container name)
   - **Port**: `5432`
   - **Database**: `capsule_dev`
   - **Username**: `capsule`
   - **Password**: `capsule_dev_password`

## Troubleshooting

### Database won't start

Check logs:

```bash
docker compose logs postgres
```

### Can't connect to database

1. Ensure container is running:

   ```bash
   docker compose ps
   ```

2. Check health status:

   ```bash
   docker compose ps postgres
   ```

3. Verify connection string in `.env`:
   ```
   DATABASE_URL=postgresql://capsule:capsule_dev_password@localhost:5432/capsule_dev
   ```

### Port already in use

If port 5432 is already in use, change it in `.env`:

```
POSTGRES_PORT=5433
```

Then update DATABASE_URL accordingly.

### Initialization scripts not running

Scripts only run on first container creation. To re-run:

```bash
docker compose down -v  # Remove volumes
docker compose up -d    # Recreate containers
```

## Production Considerations

This Docker setup is optimized for **development**. For production:

1. Use managed PostgreSQL (AWS RDS, Google Cloud SQL, etc.)
2. Don't use default passwords
3. Enable SSL connections
4. Set up regular backups
5. Configure connection pooling
6. Use environment-specific secrets management

## Learn More

- [PostgreSQL Docker Image](https://hub.docker.com/_/postgres)
- [pgAdmin Docker Image](https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

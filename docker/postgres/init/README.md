# Database Initialization Scripts

## Security Guidelines

These SQL scripts are **safe to commit to public repositories** because:

✅ They only contain database structure (schemas, tables, indexes)
✅ No credentials or secrets are hardcoded
✅ Seed data uses fake/example emails (.local, .example, .test domains)
✅ Only for development environment

## Files

- **01-init.sql**: Database schema and structure
- **02-seed-dev.sql**: Development seed data (fake/example data only)

## Adding New Scripts

Scripts run in alphabetical order. Follow these conventions:

### ✅ DO:

```sql
-- Use .local, .example, or .test domains
INSERT INTO users (email, name)
VALUES ('test@example.local', 'Test User');

-- Use obviously fake data
INSERT INTO products (name, price)
VALUES ('Example Product', 9.99);
```

### ❌ DON'T:

```sql
-- Real emails
INSERT INTO users (email) VALUES ('john@gmail.com');

-- Real API keys or secrets
INSERT INTO config (api_key) VALUES ('sk_live_abc123...');

-- Production data
INSERT INTO users SELECT * FROM production_backup;
```

## Production Data

**Never commit production data or real user information to version control.**

For production database setup:

1. Use environment-specific migrations (Prisma, TypeORM, etc.)
2. Keep production seeds in a secure location (not in Git)
3. Use database backups/snapshots for production data

## Questions?

If you're unsure whether something is safe to commit, ask yourself:

- Is this real user data? → Don't commit
- Does this contain secrets/credentials? → Don't commit
- Is this production data? → Don't commit
- Is this clearly fake/example data for development? → Safe to commit

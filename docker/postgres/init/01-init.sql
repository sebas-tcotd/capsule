-- Initialize Capsule Database
-- This script runs automatically when the PostgreSQL container is first created

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create schemas
CREATE SCHEMA IF NOT EXISTS capsule;

-- Set search path
ALTER DATABASE capsule_dev SET search_path TO capsule, public;

-- Example: Create a users table (you can modify this as needed)
CREATE TABLE IF NOT EXISTS capsule.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION capsule.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add trigger to users table
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON capsule.users
    FOR EACH ROW
    EXECUTE FUNCTION capsule.update_updated_at_column();

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_users_email ON capsule.users(email);
CREATE INDEX IF NOT EXISTS idx_users_created_at ON capsule.users(created_at);

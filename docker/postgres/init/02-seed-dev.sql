-- Development Seed Data
-- This file is safe for public repositories
-- Only contains fake/example data for local development

-- Insert development users (clearly fake emails)
INSERT INTO capsule.users (email, name)
VALUES
    ('dev1@example.local', 'Development User 1'),
    ('dev2@example.local', 'Development User 2'),
    ('test@example.local', 'Test User')
ON CONFLICT (email) DO NOTHING;

-- Add more seed data as needed for development
-- Always use .local, .test, or .example domains

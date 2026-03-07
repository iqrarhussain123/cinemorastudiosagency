-- Cinemora Studios Database Schema

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Leads table: captures discovery call bookings and contact form submissions
CREATE TABLE IF NOT EXISTS leads (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name        VARCHAR(255) NOT NULL,
    email       VARCHAR(255) NOT NULL,
    company     VARCHAR(255),
    message     TEXT,
    source      VARCHAR(64) NOT NULL DEFAULT 'website',
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_leads_email ON leads (email);
CREATE INDEX idx_leads_created_at ON leads (created_at DESC);

-- Testimonials table (future CMS use)
CREATE TABLE IF NOT EXISTS testimonials (
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_name VARCHAR(255) NOT NULL,
    author_role VARCHAR(255),
    quote       TEXT NOT NULL,
    rating      SMALLINT NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =======================================================
-- InSync EMS - Supabase Database Schema & Seed Data
-- =======================================================

-- 0. Clean up any existing employees table
DROP TABLE IF EXISTS employees CASCADE;

-- 1. Create Employees Table (company_email is NOT unique so you can test both accounts with one Gmail)
CREATE TABLE employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employee_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  gender TEXT DEFAULT 'Male',
  civil_status TEXT DEFAULT 'Single',
  company_email TEXT NOT NULL,
  contact_number TEXT,
  address TEXT,
  postal_code TEXT,
  department TEXT NOT NULL,
  position TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('Employee', 'Department Manager')),
  is_activated BOOLEAN DEFAULT false,
  must_change_password BOOLEAN DEFAULT true,
  default_password TEXT,
  password_hash TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- 3. Policies
CREATE POLICY "Allow public read for activation verification"
  ON employees FOR SELECT
  USING (true);

CREATE POLICY "Allow update during activation"
  ON employees FOR UPDATE
  USING (true);

-- 4. Seed Accounts
INSERT INTO employees (
  employee_id,
  full_name,
  gender,
  civil_status,
  company_email,
  contact_number,
  address,
  postal_code,
  department,
  position,
  role,
  is_activated,
  must_change_password,
  default_password
) VALUES 
-- Rexor Chico (Department Manager - Pre-activated)
(
  '24-1001-001',
  'Rexor V. Chico',
  'Male',
  'Single',
  'rexorchico@gmail.com',
  '+63 917 123 4567',
  'Makati City',
  '1200',
  'Engineering',
  'Department Manager',
  'Department Manager',
  true,
  false,
  'password123'
),
-- Irvine Santos / Test Employee (Unactivated, ready to activate)
(
  '24-1861-125',
  'Irvine Santos',
  'Male',
  'Single',
  'rexorchico@gmail.com',
  '+63 912 345 6789',
  '123 Ayala Avenue, Makati City',
  '1200',
  'Engineering',
  'Associate Software Engineer',
  'Employee',
  false,
  true,
  NULL
);

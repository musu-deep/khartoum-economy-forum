/*
# Create registrations table for forum attendees

1. New Tables
- `registrations`
  - `id` (uuid, primary key)
  - `name` (text, full name of registrant)
  - `email` (text, contact email)
  - `phone` (text, phone number)
  - `organization` (text, organization/institution name)
  - `role` (text, job title or role)
  - `category` (text, which target group they belong to: government, private_sector, unions, community, financial, academic)
  - `interest_areas` (text[], array of initiative areas they're interested in)
  - `will_present_paper` (boolean, whether they intend to present a paper)
  - `paper_title` (text, nullable, title of paper if presenting)
  - `message` (text, nullable, additional notes)
  - `status` (text, default 'pending' - registration status)
  - `created_at` (timestamptz, when registered)

2. Security
- Enable RLS on `registrations`.
- Allow anon + authenticated INSERT (public registration form, no login needed).
- Allow authenticated SELECT only (organizers can view registrations after login).
- No UPDATE or DELETE via anon (registrations are managed by organizers).
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  organization text NOT NULL,
  role text,
  category text NOT NULL DEFAULT 'community',
  interest_areas text[] DEFAULT '{}',
  will_present_paper boolean NOT NULL DEFAULT false,
  paper_title text,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_registrations" ON registrations;
CREATE POLICY "anon_insert_registrations"
ON registrations FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_registrations" ON registrations;
CREATE POLICY "auth_select_registrations"
ON registrations FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_registrations" ON registrations;
CREATE POLICY "auth_update_registrations"
ON registrations FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_registrations" ON registrations;
CREATE POLICY "auth_delete_registrations"
ON registrations FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON registrations (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_registrations_category ON registrations (category);
CREATE INDEX IF NOT EXISTS idx_registrations_status ON registrations (status);

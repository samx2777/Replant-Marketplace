/*
  # Create Carbon Marketplace Schema

  1. New Tables
    - `sponsors`
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (text) - Company or Individual
      - `sponsor_level` (text) - Gold, Silver, Bronze
      - `location` (text)
      - `joined_date` (timestamp)
      - `sponsored_tree_value` (numeric)
      - `nft_owned` (integer)
      - `carbon_value` (numeric)
      - `nft_sold` (integer)
      - `avatar_url` (text, nullable)
      - `created_at` (timestamp)
    
    - `planters`
      - `id` (uuid, primary key)
      - `name` (text)
      - `type` (text) - Community/Organisation
      - `verified` (boolean)
      - `location` (text)
      - `joined_date` (timestamp)
      - `trees_planted` (integer)
      - `nft_sold` (integer)
      - `planters_count` (integer)
      - `nft_for_sale` (integer)
      - `avatar_url` (text, nullable)
      - `created_at` (timestamp)
    
    - `nfts`
      - `id` (uuid, primary key)
      - `uid` (text)
      - `botanical_name` (text)
      - `common_name` (text)
      - `carbon_biomass` (numeric)
      - `carbon_value` (numeric)
      - `price` (numeric)
      - `image_url` (text)
      - `iucn_status` (text, nullable)
      - `native` (boolean)
      - `country` (text, nullable)
      - `location` (text, nullable)
      - `capture_date` (date, nullable)
      - `sponsored_by` (text, nullable)
      - `nft_collection` (text, nullable)
      - `planting_organisation` (text, nullable)
      - `planting_cost` (numeric, nullable)
      - `todays_value` (numeric, nullable)
      - `sponsor_id` (uuid, nullable)
      - `planter_id` (uuid, nullable)
      - `created_at` (timestamp)
    
    - `carbon_data`
      - `id` (uuid, primary key)
      - `date` (date)
      - `total_carbon` (numeric)
      - `carbon_sequestered` (numeric)
      - `carbon_biomass` (numeric)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

CREATE TABLE IF NOT EXISTS sponsors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text NOT NULL,
  sponsor_level text DEFAULT 'Bronze',
  location text NOT NULL,
  joined_date timestamptz DEFAULT now(),
  sponsored_tree_value numeric DEFAULT 0,
  nft_owned integer DEFAULT 0,
  carbon_value numeric DEFAULT 0,
  nft_sold integer DEFAULT 0,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS planters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  type text DEFAULT 'Community/Organisation',
  verified boolean DEFAULT false,
  location text NOT NULL,
  joined_date timestamptz DEFAULT now(),
  trees_planted integer DEFAULT 0,
  nft_sold integer DEFAULT 0,
  planters_count integer DEFAULT 0,
  nft_for_sale integer DEFAULT 0,
  avatar_url text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS nfts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  uid text NOT NULL,
  botanical_name text NOT NULL,
  common_name text NOT NULL,
  carbon_biomass numeric DEFAULT 0,
  carbon_value numeric DEFAULT 0,
  price numeric DEFAULT 0,
  image_url text NOT NULL,
  iucn_status text,
  native boolean DEFAULT true,
  country text,
  location text,
  capture_date date,
  sponsored_by text,
  nft_collection text,
  planting_organisation text,
  planting_cost numeric,
  todays_value numeric,
  sponsor_id uuid REFERENCES sponsors(id),
  planter_id uuid REFERENCES planters(id),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS carbon_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL DEFAULT CURRENT_DATE,
  total_carbon numeric DEFAULT 0,
  carbon_sequestered numeric DEFAULT 0,
  carbon_biomass numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE planters ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfts ENABLE ROW LEVEL SECURITY;
ALTER TABLE carbon_data ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to sponsors"
  ON sponsors FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to planters"
  ON planters FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to nfts"
  ON nfts FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Allow public read access to carbon_data"
  ON carbon_data FOR SELECT
  TO anon
  USING (true);

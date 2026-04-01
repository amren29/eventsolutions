-- Categories table
create table if not exists categories (
  id bigint generated always as identity primary key,
  name text not null,
  description text default '',
  created_at timestamptz default now()
);

-- Products table
create table if not exists products (
  id bigint generated always as identity primary key,
  slug text not null unique,
  name text not null,
  subtitle text default '',
  description text default '',
  category text not null,
  price numeric not null default 0,
  image_url text default '',
  includes text[] default '{}',
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table categories enable row level security;
alter table products enable row level security;

-- Allow public read access
create policy "Anyone can read categories" on categories for select using (true);
create policy "Anyone can read products" on products for select using (true);

-- Allow anon insert/update/delete (for admin panel without auth for now)
create policy "Anyone can insert categories" on categories for insert with check (true);
create policy "Anyone can update categories" on categories for update using (true);
create policy "Anyone can delete categories" on categories for delete using (true);

create policy "Anyone can insert products" on products for insert with check (true);
create policy "Anyone can update products" on products for update using (true);
create policy "Anyone can delete products" on products for delete using (true);

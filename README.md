# Event Solutions

Event supplies and management company based in Kota Kinabalu. We provide full event services — from supplies to complete event management.

## About

Event Solutions is a one-stop event company offering:

- Event supplies and equipment rental
- Full event management services
- Event decoration and setup
- Custom event packages

## Project Overview

This is a web application that serves as both an **online store** and an **admin panel** in a single project.

### Features

**Online Store (Public)**
- Browse event products and packages
- View product details and pricing
- Contact and inquiry system
- Company information and services

**Admin Panel**
- Product management (add, edit, delete)
- Product categories management
- Order/inquiry management
- Dashboard overview

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Supabase (PostgreSQL)
- **Auth:** Supabase Auth
- **Storage:** Supabase Storage
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/amren29/eventsolutions.git
   cd eventsolutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your Supabase project URL and anon key.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) for the store and [http://localhost:3000/admin](http://localhost:3000/admin) for the admin panel.

## License

All rights reserved. © 2026 Event Solutions

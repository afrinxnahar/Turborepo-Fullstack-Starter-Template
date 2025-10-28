## Local Supabase Development

### Prerequisites
Docker installed and running.  
pnpm package manager.  
Supabase CLI (installed via devDependencies).  
A Supabase account with an existing project (for linking remote DB).

### Setup and Running Locally
1. Install dependencies: `pnpm install`.  
2. Initialize Supabase config: `pnpm run supabase:link`. This links your local DB with remote database smoothly.
3. Start local Supabase: `pnpm run supabase:dev`. This runs a local stack (DB, auth, storage) using Docker.  
4. Access Supabase Studio: Open http://127.0.0.1:54323 in your browser (URL from command output).  

### Environment Variables
After running `pnpm run supabase:dev`, the output displays database URL (e.g., postgresql://postgres:postgres@127.0.0.1:54322/postgres ) and keys (anon key, service role key). Add these to `.env` in the project root:  
SUPABASE_URL=http://127.0.0.1:54321  
SUPABASE_ANON_KEY=eyJh... (from output)  

For production, use values from your Supabase project dashboard.

### Linking and Syncing with Remote DB
1. Link to remote project: Update the `supabase:link` script in package.json with your project ID (from Supabase dashboard URL), then run `pnpm run supabase:link`.  
2. Pull remote schema: `pnpm run supabase:pull`. This downloads remote changes to local migrations.  
3. Push local changes: `pnpm run supabase:push`. This applies local migrations to the remote DB.  

For migrations, create new ones with `pnpx supabase migration new <name>`, edit the SQL file in `supabase/migrations/`, then push.

### Best Practices
- Commit all migration files to version control for team consistency and rollback.  
- Use local Supabase for development and testing; switch to remote for staging/production via environment variables.  
- Reset the local database with `supabase db reset` before applying major schema changes to avoid conflicts.  
- Never hardcode sensitive keys; always use environment variables and add them to `.gitignore`.  
- Enable and test Row Level Security (RLS) policies in the local Studio dashboard to catch issues early.  
- Pull remote changes frequently with `supabase db pull` to stay in sync with production schema.
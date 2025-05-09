import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database.types'
const databaseUrl = process.env.NEXT_PUBLIC_DATABASE_URL
const databaseKey = process.env.NEXT_PUBLIC_DATABASE_KEY

if (!databaseUrl || !databaseKey) {
  throw new Error('Missing Database environment variables')
}

const supabase = createClient<Database>(databaseUrl, databaseKey)

export default supabase
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://txpemvuqgyynqtsyptgn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4cGVtdnVxZ3l5bnF0c3lwdGduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDExOTkxMjMsImV4cCI6MjAxNjc3NTEyM30.WSYqy--KE4P5lKye2gvxEmsOAEeWXIeyP6NylXCpAHg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
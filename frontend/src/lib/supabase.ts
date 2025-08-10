import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nwdilwnmxgaxpwtatflu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53ZGlsd25teGdheHB3dGF0Zmx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NjI1MDAsImV4cCI6MjA3MDMzODUwMH0.02Q6lRbJA9IzN6pJ7-g3a2XjdGtLapJez10iE85o6CQ'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://iokuidxrwuhnihrstdzf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlva3VpZHhyd3VobmlocnN0ZHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1NTA3MTAsImV4cCI6MjA0NDEyNjcxMH0.oc975shU6Lg0lWKXM7gbdGIY5SOolrlHcG2Eb5Ye068'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const isAuthenticated = async () => {
    const { data: session } = await supabase.auth.getSession();
    return session;
  };
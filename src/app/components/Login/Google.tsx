
'use client'

import Button from '@mui/material/Button'
import { useSupabase } from './supabase-provider'

// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase } = useSupabase();

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  };

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <Button onClick={handleGoogleLogin}>Google Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}
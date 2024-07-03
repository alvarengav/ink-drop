'use server'
import { createClient } from '@/utils/supabase/server'

import AuthButton from './AuthButton'

export default async function NavBar() {
  const canInitSupabaseClient = () => {
    try {
      createClient()
      return true
    } catch (e) {
      return false
    }
  }

  const isSupabaseConnected = canInitSupabaseClient()
  return (
    <>
      <nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
        <div className="flex w-full max-w-4xl items-center justify-between p-3 text-sm">
          <h1>Ink Drop</h1>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
    </>
  )
}

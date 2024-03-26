"use server"
import { createClient } from "@/utils/supabase/server"
import AuthButton from "./AuthButton"

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
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <h1>Ink Drop</h1>
          {isSupabaseConnected && <AuthButton />}
        </div>
      </nav>
    </>
  )
}

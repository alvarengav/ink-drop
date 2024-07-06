import NotesList from '@/components/NotesList'
import { createClient } from '@/utils/supabase/server'

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient()
      return true
    } catch (e) {
      return false
    }
  }

  canInitSupabaseClient()

  return (
    <div className="border-0 border-white">
      <NotesList />
    </div>
  )
}

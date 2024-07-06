import { PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { createClient } from '@/utils/supabase/server'

import { Input } from './form'
import NoteCard from './NoteCard'

interface NotesList {}

const NotesList: React.FC<NotesList> = async () => {
  const supabase = createClient()
  const { data: notes } = await supabase.from('notes').select()

  return (
    <div className="mb-24 px-8 text-white">
      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search note..."
          className="w-full max-w-96"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 space-y-10 sm:grid-cols-2 sm:space-y-0 md:grid-cols-3">
        {notes &&
          notes.map(note => (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          ))}
      </div>
      <Link
        href="/notes/create"
        className="btn-rounded btn-primary fixed bottom-8 right-8 flex transform items-center justify-center"
        aria-label="Create note"
        passHref
      >
        <PlusIcon className="h-6 w-6" />
      </Link>
    </div>
  )
}

export default NotesList

'use client'
import { PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import NoteCard from './NoteCard'

export interface Note {
  id: string
  title: string
  content: string
  created_at: Date
  update_at: Date
}

interface NotesComponentProps {}

const NotesComponent: React.FC<NotesComponentProps> = () => {
  const [notes, setNotes] = useState<Note[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('/api/notes')

      if (response.ok) {
        const data = await response.json()
        setNotes(data.notes)
        setIsLoading(false)
      }
    }

    fetchNotes()
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="h-screen p-8 text-white">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search note..."
          className="w-full rounded-lg bg-gray-900 p-4 text-white placeholder-gray-500 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            date_created={note.created_at}
            date_updated={note.update_at}
            onEdit={() => {}}
            onDelete={() => {}}
          />
        ))}
      </div>
      <Link
        href="/notes/create"
        className="fixed bottom-8 right-8 flex transform items-center justify-center rounded-full bg-blue-500 bg-opacity-70 p-4 text-xl text-white shadow-lg transition duration-300 ease-in-out hover:scale-110 hover:bg-opacity-80"
        aria-label="Create note"
        passHref
      >
        <PlusIcon className="h-6 w-6" />
      </Link>
    </div>
  )
}

export default NotesComponent

"use client"
import { useEffect, useState } from "react"
import NoteCard from "./NoteCard"
import { PlusIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

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
      const response = await fetch("/api/notes")

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
    <div className="text-white h-screen p-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search note..."
          className="w-full p-4 rounded-lg bg-gray-900 text-white placeholder-gray-500 focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {notes.map((note) => (
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
        className="fixed right-8 bottom-8 bg-blue-500 bg-opacity-70 hover:bg-opacity-80 p-4 rounded-full shadow-lg text-white text-xl transition duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
        aria-label="Create note"
        passHref
      >
        <PlusIcon className="h-6 w-6" />
      </Link>
    </div>
  )
}

export default NotesComponent

'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { Tables } from '@/types/database.types'

type Note = Tables<'notes'>
const EditNoteForm: React.FC = () => {
  const [note, setNote] = useState<Note | null>(null)
  const [loading, setLoading] = useState(true)
  const { noteId } = useParams<{ noteId: string }>()

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`/api/notes/${noteId}`)
        if (!response.ok) {
          throw new Error('Error fetching note')
        }
        const data = await response.json()
        setNote(data)
      } finally {
        setLoading(false)
      }
    }

    fetchNote()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) {
    return <p>Loading...</p> // O cualquier otro indicador de carga que prefieras
  }

  if (!note) {
    return <p>No note found</p> // Maneja el caso en que no se encuentra la nota
  }

  // Manejador para el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí manejarías la actualización de la nota
    // Por ejemplo, podrías enviar una solicitud PATCH a tu API con los datos del formulario
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={note.title || ''}
          value={note.title || ''}
          required
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white"
        />
      </div>
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-white"
        >
          Content
        </label>
        <textarea
          id="content"
          name="content"
          defaultValue={note.content || ''}
          required
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-800 text-white"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          Update Note
        </button>
      </div>
    </form>
  )
}

export default EditNoteForm

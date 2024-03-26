// pages/create-note.tsx
"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CreateNoteForm: React.FC = () => {
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const formData = Object.fromEntries(form.entries())

    const response = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (response.ok) {
      router.push("/")
    }
  }

  return (
    <div className="flex w-full items-center justify-center p-4 mt-10">
      <form onSubmit={handleSubmit} method="post" className="w-full max-w-lg">
        <div className="mb-6 bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-white mb-4">
            Create a New Note
          </h2>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-300"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-300"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={4}
              className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-gray-500 focus:bg-gray-600 focus:ring-0 text-white"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25 transition ease-in-out duration-150"
            >
              Create Note
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateNoteForm

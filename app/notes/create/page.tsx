'use client'
import { useRouter } from 'next/navigation'

const CreateNoteForm: React.FC = () => {
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const formData = Object.fromEntries(form.entries())

    const response = await fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      router.push('/')
    }
  }

  return (
    <div className="mt-10 flex w-full items-center justify-center p-4">
      <form onSubmit={handleSubmit} method="post" className="w-full max-w-lg">
        <div className="mb-6 rounded-lg bg-gray-800 p-8 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-white">
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
              className="mt-1 block w-full rounded-md border-transparent bg-gray-700 text-white focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
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
              className="mt-1 block w-full rounded-md border-transparent bg-gray-700 text-white focus:border-gray-500 focus:bg-gray-600 focus:ring-0"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-blue-500 focus:border-blue-700 focus:outline-none focus:ring focus:ring-blue-200 active:bg-blue-700 disabled:opacity-25"
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

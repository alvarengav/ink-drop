'use client'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Input, Textarea } from '@/components/form'

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
    <div className="flex w-full justify-center p-8">
      <div className="w-full max-w-lg">
        <Link href={'/'} className="btn px-0 normal-case">
          <ArrowLongLeftIcon className="mr-2 h-6 w-6" /> Go back
        </Link>
        <form onSubmit={handleSubmit} method="post" className="mt-4">
          <div className="mb-6 space-y-8 rounded-lg">
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
              <Input
                className="mt-2 w-full"
                type="text"
                id="title"
                name="title"
                placeholder="Note title"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-300"
              >
                Content
              </label>
              <Textarea
                className="mt-2 w-full"
                id="content"
                name="content"
                required
                placeholder="This is my note"
                rows={6}
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">
                Create Note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateNoteForm

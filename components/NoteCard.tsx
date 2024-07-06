import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Tables } from '@/types/database.types'
import { formatDate } from '@/utils/date'

interface NoteCardProps {
  onEdit: (id: string) => void
  onDelete: (id: string) => void
  note: Tables<'notes'>
}

const NoteCard: React.FC<NoteCardProps> = ({
  note,
  // onEdit,
  // onDelete,
}) => {
  const { id, title, content, created_at, updated_at } = note

  const formattedCreatedAt = formatDate(created_at)
  const formattedUpdatedAt = formatDate(updated_at)

  return (
    <div
      className={`flex flex-col justify-between rounded-lg bg-dark-300 p-4 shadow-card`}
    >
      <div>
        <h3 className={`mb-2 text-lg font-semibold text-white`}>{title}</h3>
        <p className="custom-scrollbar mb-4 max-h-48 overflow-y-auto text-text-accent">
          {content}
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <span className="text-text-secondary">
            Created: {formattedCreatedAt}
          </span>
          {formattedUpdatedAt && (
            <span className="text-text-secondary">
              Updated: {formattedUpdatedAt}
            </span>
          )}
        </div>
        <div className="flex-justify-end ml-auto mt-8 flex gap-4">
          <button
            className="btn btn-danger"
            // onClick={onDelete}
            aria-label="Delete note"
          >
            <TrashIcon className="mr-2 h-5 w-5" /> Delete
          </button>
          <Link
            href={`/notes/edit/${id}`}
            className="btn btn-primary"
            // onClick={onEdit}
            aria-label="Edit note"
            passHref
          >
            <PencilIcon className="mr-2 h-4 w-4" /> Edit
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NoteCard

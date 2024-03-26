import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

interface NoteCardProps {
  id: string
  title: string
  content: string
  date_created: Date
  date_updated: Date
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

const NoteCard: React.FC<NoteCardProps> = ({
  id,
  title,
  content,
  date_created,
  date_updated,
  onEdit,
  onDelete,
}) => {
  const dateCreated = new Date(date_created)
  const formattedCreatedDate = dateCreated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const dateUpdated = new Date(date_updated)
  const formattedUpdatedDate = dateUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Colores tomados de la imagen proporcionada, ajusta según la paleta exacta de tu proyecto
  const cardBackgroundColor = "bg-gray-800" // Ajustado para un contraste mejorado sobre fondo oscuro
  const dateTextColor = "text-gray-400" // Color gris para las fechas
  const editButtonColor = "bg-blue-500 bg-opacity-50 hover:bg-opacity-70"
  const deleteButtonColor = "bg-red-500 bg-opacity-50 hover:bg-opacity-70"
  const iconColor = "text-white text-opacity-90" // Iconos menos dominantes
  const iconSize = "h-4 w-4" // Tamaño de los iconos ajustado para coincidir con la imagen

  return (
    <div
      className={`rounded-lg shadow-md p-4 flex flex-col justify-between ${cardBackgroundColor}`}
    >
      <div>
        <h3 className={`text-lg font-semibold mb-2 text-white`}>{title}</h3>
        <p className={`mb-4 text-gray-300`}>{content}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col text-sm">
          <span className={`${dateTextColor}`}>
            Created: {formattedCreatedDate}
          </span>
          {date_updated && (
            <span className={`${dateTextColor}`}>
              Updated: {formattedUpdatedDate}
            </span>
          )}
        </div>
        <div className="flex ml-auto mt-3 flex-justify-end">
          <Link
            href={`/notes/edit/${id}`}
            className={`rounded-full p-2 bg-blue-600 ${editButtonColor} mr-2`}
            // onClick={onEdit}
            aria-label="Edit note"
            passHref
          >
            <PencilIcon className={`text-white ${iconColor} ${iconSize}`} />
          </Link>
          <button
            className={`rounded-full p-2 ${deleteButtonColor}`}
            // onClick={onDelete}
            aria-label="Delete note"
          >
            <TrashIcon className={`text-white ${iconColor} ${iconSize}`} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NoteCard

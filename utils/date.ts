export const formatDate = (
  dateInput: string | Date | null | undefined
): string | null => {
  if (!dateInput) return null

  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput

  return date
    ? date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null
}

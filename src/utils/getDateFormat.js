const getDateFormat = date => {
  if (!date) return date
  const dateValue = new Date(date)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  }).format(dateValue)
}

export default getDateFormat

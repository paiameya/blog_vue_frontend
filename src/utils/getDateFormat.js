const getDateFormat = date => {
  if (!date) return date
  const dateValue = new Date(date)
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(dateValue)
}

export default getDateFormat

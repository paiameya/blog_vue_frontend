export const getDateTimeFormat = date => {
  if (!date) return date
  const dateValue = new Date(date)
  return dateValue.toLocaleString()
}

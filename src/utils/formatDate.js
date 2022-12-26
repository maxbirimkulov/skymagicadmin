
export const toDate = (date) => {
    return new Intl.DateTimeFormat('ru-Ru', {
        day:'2-digit',
        month:'2-digit',
        year:'numeric'
    }).format(new Date(date))
}
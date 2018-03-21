
 const formatDate = (dateString) => {
    const date = new Date(dateString)
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

 const hideEmail = (email) => {
    const dots = '...'
    const [mail, domain] = email.split("@")
    const start = mail.substring(0, 3)
    const end = mail.substring(mail.length - 1, mail.length - 1 - 3)

    return [start, dots, end, "@", domain].join('');
}
export {formatDate,hideEmail}

function formatDate1(day, month, year){
    let dayFormat = String(day)
    let monthFormat = String(month)
    dayString = dayFormat.length < 2 ? '0'.concat(dayFormat): dayFormat
    monthString = monthFormat.length < 2 ? '0'.concat(monthFormat) : monthFormat

    return dayString.concat('/', monthString, '/', year)
}


function formatDate2(day, month, year){
    let dayFormat = String(day).padStart(2, '0')
    let monthFormat = String(month).padStart(2, '0')

    return `${dayFormat}/${monthFormat}/${year}`

}

console.log(formatDate2(21, 10, 2010))
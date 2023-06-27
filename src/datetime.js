export default function datetime(value, field) {
    if (typeof value != 'undefined' && isNaN((new Date(value)).getTime())) {
        throw new Error(`${field} is invalid date time format`)
    }
}
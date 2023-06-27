export default function numeric(value, field) {
    if (typeof value != 'undefined' && value - 0 != value) {
        throw new Error(`${field} except a number`)
    }
}
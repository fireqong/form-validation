export default function required(value, field) {
    field = field || ''

    if (typeof value == 'undefined' || (typeof value == 'string' && value.trim() == '')) {
        throw new Error(`${field} is required`)
    }
}
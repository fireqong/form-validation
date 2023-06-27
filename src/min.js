export default function min(value, field, length) {
    if (typeof value != 'undefined' && value.length < length) {
        let actualLength = value.length
        throw new Error(`${field} except length large than ${length}, but actual is ${actualLength}`)
    }
}
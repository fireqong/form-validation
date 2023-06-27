export default function length(value, field, length) {
    if (typeof value != 'undefined' && value.length != length) {
        let actualLength = value.length
        throw new Error(`${field} except length equal ${length}, but actual is ${actualLength}`)
    }
}
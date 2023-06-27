export default function max(value, field, length) {
    if (typeof value != 'undefined' && value.length > length) {
        let actualLength = value.length
        throw new Error(`${field} except length less than ${length}, but actual is ${actualLength}`)
    }
}
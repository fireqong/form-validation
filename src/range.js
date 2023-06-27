export default function range(value, field, ...range) {
    if (typeof value != 'undefined' && !range.includes(value)) {
        let list = range.join(',')
        throw new Error(`${field} need in the following list: ` + list)
    }
}
export default function password(value, field) {
    if (typeof value != 'undefined' && !/^[\d\w]*$/.test(value)) {
        throw new Error(`${field} need contain digital 、uppercase and lowercase letters`)
    }
}
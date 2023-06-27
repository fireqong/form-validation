export default function assertType(value, exceptType, field) {
    field = field || ''

    let gotType = typeof value
    if (gotType != exceptType) {
        throw new TypeError(`${field} except type ${exceptType}, got ${gotType}`)
    }
}

export function assertString(value, field) {
    assertType(value, 'string', field)
}

export function assertObject(value, field) {
    assertType(value, 'object', field)
}
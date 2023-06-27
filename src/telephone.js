export default function telephone(value, field) {
    if (typeof value != 'undefined' && !/^\d{11}$/.test(value)) {
        throw new Error(`${field} is not valid telephone`)
    }
}
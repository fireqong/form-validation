export default function idcard(value, field) {
    let coeffcient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    let remainder = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]

    if (value.length != 18) {
        throw new Error(`${field} is invalid id card number`)
    }

    let crc = value.substr(17, 1)
    let sum = 0
    let length = 17

    let data = value.substr(0, 17)

    for (let i=0; i<length; i++) {
        sum += (data[i] - 0) * coeffcient[i]
    }

    if (remainder[sum % 11] != crc) {
        throw new Error(`${field} is invalid id card number`)
    }
}
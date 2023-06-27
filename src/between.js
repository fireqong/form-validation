export default function between(value, field, startLength, endLength) {
    let detect = false
    let actualLength = 0
    
    if (typeof value != 'undefined') {
        if (value - 0 == value) {
            detect = (value-0) > (endLength-0) || (value-0) < (startLength-0)
            actualLength = value
        } else {
            detect = value.length > endLength || value.length < startLength
            actualLength = value.length
        }

        if (detect) {
            throw new Error(`${field} except length between in ${startLength} - ${endLength}, but actual is ${actualLength}`)
        }
        
    }
}
import { assertObject } from "./utils/assertType.js"
import required from "./required.js"
import max from "./max.js"
import min from "./min.js"
import between from "./between.js"
import numeric from "./numeric.js"
import length from "./length.js"
import telephone from "./telephone.js"
import password from "./password.js"
import range from "./range.js"
import idcard from "./idcard.js"
import email from "./email.js"
import datetime from "./datetime.js"

const ALLOWED_RULES = {
    required,
    max,
    min,
    between,
    numeric,
    length,
    telephone,
    password,
    range,
    idcard,
    email,
    datetime
}

class Validation {
    static customerFuncs = {}

    constructor(model, rules, messages) {
        messages = messages || {}

        assertObject(model, 'model')
        assertObject(rules, 'rules')
        assertObject(messages, 'messages')

        this.model = model
        this.rules = rules
        this.messages = messages

        console.log(model, rules, messages)
    }

    validate() {
        for (let [fieldName, ruleStr] of Object.entries(this.rules)) {
            let rules = this.parseRule(ruleStr)
            if (rules.length == 0) {
                continue;
            }

            for (let i in rules) {
                let validator = rules[i].name

                try {
                    if (Validation.customerFuncs.hasOwnProperty(validator)) {
                        Validation.customerFuncs[validator](this.model[fieldName], fieldName, ...rules[i].params)
                    } else {
                        ALLOWED_RULES[validator](this.model[fieldName], fieldName, ...rules[i].params)    
                    }
                } catch (e) {
                    if (this.messages.hasOwnProperty(fieldName)) {
                        if (typeof this.messages[fieldName] == 'string') {
                            throw new Error(this.messages[fieldName])
                        } else if (typeof this.messages[fieldName] == 'object') {
                            if (this.messages[fieldName].hasOwnProperty(validator)) {
                                throw new Error(this.messages[fieldName][validator])
                            }
                        }
                    }

                    throw e
                }
            }
        }
    }

    parseRule(ruleStr) {
        let ruleStrArr = ruleStr.split('|')
        let rules = []

        for (let i in ruleStrArr) {
            let ruleItem = ruleStrArr[i].split(':')

            if (!ALLOWED_RULES.hasOwnProperty(ruleItem[0]) && !Validation.customerFuncs.hasOwnProperty(ruleItem[0])) {
                throw new RangeError(`the rule ${ruleItem[0]} is no support, rule must in follow list: ` + Object.keys(ALLOWED_RULES).join(' ') + ' ' + Object.keys(Validation.customerFuncs).join(' '))
            }

            let params = typeof ruleItem[1] == 'undefined' ? [] : ruleItem[1].split(',')

            rules.push({
                name: ruleItem[0],
                params: params
            })
        }

        return rules
    }

    static register(funcName, func) {
        this.customerFuncs[funcName] = func
    }
}

export default Validation
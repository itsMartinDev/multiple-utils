"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmailAddress = exports.cleanSpacesInString = exports.generateRandomString = exports.countCharacter = exports.fillZerosOnTheLeft = exports.truncateString = exports.containsTwoConsecutiveCharacters = exports.itHasBalancedBrackets = exports.itHasNestedBrackets = exports.isValidPhoneString = void 0;
/**
 * Checks if the given string has a phone format, is formed from the next chars: +123456789.0() - and its lenght is not greater than 18 characters;
 * It has balanced parentesis and could start with; could start with +.
 * @param phone A string with the intent of being a phone number.
 * @returns true if the given value is a phone number, otherwise returns false.
 */
const isValidPhoneString = (phone) => {
    // Phone can be an empty string.
    if (phone === '') {
        return true;
    }
    if (phone.startsWith(' ') || phone.endsWith(' ')) {
        return false;
    }
    if (phone.length < 10 || phone.length > 18) {
        return false;
    }
    if (!(0, exports.itHasNestedBrackets)(phone, '(', ')') && (0, exports.itHasBalancedBrackets)(phone, '(', ')')) {
        // Check that there are not intermedial + chars
        for (let x = 1; x < phone.length; x++) {
            if (phone[x] === '+') {
                return false;
            }
        }
        // Check that the only characters allowed are numeric or special chars
        let allowedChars = '0123456789+ .()-';
        for (let x = 0; x < phone.length; x++) {
            if (!allowedChars.includes(phone[x])) {
                return false;
            }
        }
        // Check  if the number contains -- or '  ' (two following spaces), or points
        if ((0, exports.containsTwoConsecutiveCharacters)(phone, '-') || (0, exports.containsTwoConsecutiveCharacters)(phone, ' ') || (0, exports.containsTwoConsecutiveCharacters)(phone, '.')) {
            return false;
        }
        // Check that contains at least 10 numeric digits
        let numbers = 0;
        let numericDigits = '0123456789';
        for (let x = 0; x < phone.length; x++) {
            if (numericDigits.includes(phone[x])) {
                numbers = numbers + 1;
            }
        }
        if (numbers >= 10) {
            return true;
        }
    }
    return false;
};
exports.isValidPhoneString = isValidPhoneString;
/**
 * Checks if a given string has nested brackets.
 * @param pattern a string to check if it has nested curly braces.
 * @returns true if the string has nested curly braces inside other nested curly braces, otherwise return false.
 */
const itHasNestedBrackets = (pattern, openingBracketChar, closingBracketChar) => {
    const stack = [];
    if (openingBracketChar.length > 1 || closingBracketChar.length > 1) {
        throw new Error('The opening or closing bracket are not single characters.');
    }
    for (const char of pattern) {
        if (char === openingBracketChar) {
            if (stack.length > 0 && stack[stack.length - 1] === openingBracketChar) {
                return true;
            }
            else {
                stack.push(char);
            }
        }
        else if (char === closingBracketChar) {
            if (stack.length > 0 && stack[stack.length - 1] === openingBracketChar) {
                stack.pop();
            }
        }
    }
    return false;
};
exports.itHasNestedBrackets = itHasNestedBrackets;
/**
 * Checks if a given string is balanced with the given brackets.
 * @param pattern an string with the posibilty of containg some brackets with the intent of being balanced: ```'{{}{}{}}'``` or unbalanced ```'{{{{}'```
 * @param openingBracketChar The character that specifies the opening bracket.
 * @param closingBracketChar The character that specifies the opening bracket.
 * @returns true if the given string has equal pairs of open and closing brackets and they correspond each other. otherwise returns false.
 */
const itHasBalancedBrackets = (pattern, openingBracketChar, closingBracketChar) => {
    const stack = [];
    if (openingBracketChar.length > 1 || closingBracketChar.length > 1) {
        throw new Error('The opening or closing bracket are not single characters.');
    }
    for (const char of pattern) {
        if (char === openingBracketChar) {
            stack.push(char);
        }
        else if (char === closingBracketChar) {
            if (stack.length === 0) {
                return false;
            }
            if (stack.length > 0 && stack[stack.length - 1] === openingBracketChar) {
                stack.pop();
            }
        }
    }
    return stack.length === 0;
};
exports.itHasBalancedBrackets = itHasBalancedBrackets;
/**
 * Checks if a string contains two consecutive instances of the given char.
 * @param pattern The string to evaluate.
 * @param char The char that will serve as reference to check in the pattern.
 * @returns true if the given pattern has two consecutive instances of the given character, otherwise returns false.
 */
const containsTwoConsecutiveCharacters = (pattern, char) => {
    if (char.length > 1) {
        throw new Error('The given characters is not a single character.');
    }
    if (pattern.length === 0) {
        return false;
    }
    let lastChar = pattern[0];
    for (let x = 1; x < pattern.length; x++) {
        if (pattern[x] === lastChar && pattern[x] === char) {
            return true;
        }
        lastChar = pattern[x];
    }
    return false;
};
exports.containsTwoConsecutiveCharacters = containsTwoConsecutiveCharacters;
/**
 * Truncates the given string if its length is greater that the length provided.
 * @param stringToTruncate A string to truncate
 * @param length The lenght that the string should have at the end.
 * @returns A string truncated
 */
const truncateString = (stringToTruncate, length) => {
    if (stringToTruncate.length > length) {
        stringToTruncate = stringToTruncate.substring(0, length);
    }
    return stringToTruncate;
};
exports.truncateString = truncateString;
/**
 * Fills the given number with zeroes to the left.
 * @param number A number to fill with zeros.
 * @param totalLength The lenght of the total result.
 * @returns a string with the number specified, and zeros in the left if the length given is greater that the numbers length.
 */
const fillZerosOnTheLeft = (number, totalLength) => {
    let result = String(Math.abs(number)).padStart(Math.abs(totalLength), '0');
    if (number < 0) {
        result = `-${result}`;
    }
    return result;
};
exports.fillZerosOnTheLeft = fillZerosOnTheLeft;
/**
 * Counts the specific characters that exist in a given string
 ```
 ('lorem ipsum', 'm') returns 2
 ```
 * @param string an string.
 * @param character a character to search and count.
 * @returns the number of instances that a character appears in the given string
 */
const countCharacter = (string, character) => {
    if (character.length > 1) {
        throw new Error('The given characters is not a single character.');
    }
    return string.split(character).length - 1;
};
exports.countCharacter = countCharacter;
/**
 * Generates a string composed by random characters with the specified lenght.
 * @param length the resulting lenght of the returned string
 * @returns a string made of random characters (AZ-az-0-9 only).
 */
const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};
exports.generateRandomString = generateRandomString;
/**
 * Cleans the existing multiple spaces that a string could have, in the start, middle or end, leaving the string with single separation spaces in between
 * @param text a string that could have multiple spaces at the start, middle or end.
 * @returns a cleaned string with single spaces in between.
 */
const cleanSpacesInString = (text) => {
    text = text.trim();
    let cleanedString = text.replace(/\s\s+/g, ' ');
    return cleanedString;
};
exports.cleanSpacesInString = cleanSpacesInString;
/**
 * Evaluate the given string to define if is a correct email address
 * @param email a string with the intent to be an email address
 * @returns true if the given string is a valid email address, otherwise returns false.
 */
const isValidEmailAddress = (email) => {
    // If address is empty, define it as valid.
    if (email.length === 0) {
        return true;
    }
    // * Check if the email fits with the regex
    // Check that the local part is made up normal characters
    // Check that the domain part contains at least one dot
    // Check that the local part is made up normal characters
    // Check that the domain part does not starts with - . or _ 
    // Check that the domain part does not ends with - . or _ 
    let regexRule = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (regexRule.test(email)) {
        // Check that email has only one single at (@)
        if ((0, exports.countCharacter)(email, '@') === 1) {
            // Check that the lenght is between 8 and 256 characters
            if (email.length >= 8 && email.length <= 256) {
                let emailParts = email.split('@');
                let localPart = emailParts[0];
                let domainPart = emailParts[0];
                // Check that the lenght of the local part is greater or equal than 2
                if (localPart.length >= 2) {
                    // Check that the local part does not starts with - . or _ 
                    if (!localPart.startsWith('.') && !localPart.startsWith('-') && !localPart.startsWith('_')) {
                        // Check that the local part does not ends with - . or _ 
                        if (!localPart.endsWith('.') && !localPart.endsWith('-') && !localPart.endsWith('_')) {
                            // Check that the address has not double dots (..)
                            if (!(0, exports.containsTwoConsecutiveCharacters)(email, '.')) {
                                return true;
                            } // else { console.log(`email: ${email} doesnt fit the the local part has not double dots rule `) }
                        } // else { console.log(`email: ${email} doesnt fit the end with a character or number rule `) }
                    } // else { console.log(`email: ${email} doesnt fit the start with a character or number rule `) }
                } // else { console.log(`email: ${email} doesnt fit the lenght of the local part should greater than two rule`) }
            } // else { console.log(`email: ${email} doesnt fit the lenght rule `) }
        } // else { console.log(`email: ${email} doesnt fit the one single @ rule`) }
    } // else { console.log(`email: ${email} doesnt fit the regex `) }
    return false;
};
exports.isValidEmailAddress = isValidEmailAddress;

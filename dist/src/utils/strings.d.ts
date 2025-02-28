/**
 * Checks if the given string has a phone format, is formed from the next chars: +123456789.0() - and its lenght is not greater than 18 characters;
 * It has balanced parentesis and could start with; could start with +.
 * @param phone A string with the intent of being a phone number.
 * @returns true if the given value is a phone number, otherwise returns false.
 */
export declare const isValidPhoneString: (phone: string) => boolean;
/**
 * Checks if a given string has nested brackets.
 * @param pattern a string to check if it has nested curly braces.
 * @returns true if the string has nested curly braces inside other nested curly braces, otherwise return false.
 */
export declare const itHasNestedBrackets: (pattern: string, openingBracketChar: string, closingBracketChar: string) => boolean;
/**
 * Checks if a given string is balanced with the given brackets.
 * @param pattern an string with the posibilty of containg some brackets with the intent of being balanced: ```'{{}{}{}}'``` or unbalanced ```'{{{{}'```
 * @param openingBracketChar The character that specifies the opening bracket.
 * @param closingBracketChar The character that specifies the opening bracket.
 * @returns true if the given string has equal pairs of open and closing brackets and they correspond each other. otherwise returns false.
 */
export declare const itHasBalancedBrackets: (pattern: string, openingBracketChar: string, closingBracketChar: string) => boolean;
/**
 * Checks if a string contains two consecutive instances of the given char.
 * @param pattern The string to evaluate.
 * @param char The char that will serve as reference to check in the pattern.
 * @returns true if the given pattern has two consecutive instances of the given character, otherwise returns false.
 */
export declare const containsTwoConsecutiveCharacters: (pattern: string, char: string) => boolean;
/**
 * Truncates the given string if its length is greater that the length provided.
 * @param stringToTruncate A string to truncate
 * @param length The lenght that the string should have at the end.
 * @returns A string truncated
 */
export declare const truncateString: (stringToTruncate: string, length: number) => string;
/**
 * Fills the given number with zeroes to the left.
 * @param number A number to fill with zeros.
 * @param totalLength The lenght of the total result.
 * @returns a string with the number specified, and zeros in the left if the length given is greater that the numbers length.
 */
export declare const fillZerosOnTheLeft: (number: number, totalLength: number) => string;
/**
 * Counts the specific characters that exist in a given string
 ```
 ('lorem ipsum', 'm') returns 2
 ```
 * @param string an string.
 * @param character a character to search and count.
 * @returns the number of instances that a character appears in the given string
 */
export declare const countCharacter: (string: string, character: string) => number;
/**
 * Generates a string composed by random characters with the specified lenght.
 * @param length the resulting lenght of the returned string
 * @returns a string made of random characters (AZ-az-0-9 only).
 */
export declare const generateRandomString: (length: number) => string;
/**
 * Cleans the existing multiple spaces that a string could have, in the start, middle or end, leaving the string with single separation spaces in between
 * @param text a string that could have multiple spaces at the start, middle or end.
 * @returns a cleaned string with single spaces in between.
 */
export declare const cleanSpacesInString: (text: string) => string;
/**
 * Evaluate the given string to define if is a correct email address
 * @param email a string with the intent to be an email address
 * @returns true if the given string is a valid email address, otherwise returns false.
 */
export declare const isValidEmailAddress: (email: string) => boolean;
//# sourceMappingURL=strings.d.ts.map
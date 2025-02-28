
# Multiple utilities

Small library that implements some methods to handle different types of values in Typescript.





## String methods

Methods to help you handle strings.

| Method | Returns | Description                |
| :-------- | :------- | :------------------------- |
| `isValidPhoneString(phone: string)` | `boolean` | Checks if the given string has a phone format that is formed from the next chars: +123456789.0(); its lenght is not greater than 18 characters and have not bad formations |
| `itHasNestedBrackets(pattern: string, openingBracketChar: string, closingBracketChar: string)` | `boolean` | Checks if a given string has nested brackets |
| `itHasBalancedBrackets(pattern: string, openingBracketChar: string, closingBracketChar: string)` | `boolean` | Checks if a given string is balanced with the given brackets.  |
| `containsTwoConsecutiveCharacters(pattern: string, char: string)` | `boolean` | Checks if a string contains two consecutive instances of the given char.  |
| `truncateString(string: string, length: number)` | `string` | Truncates the given string if its length is greater that the length provided.  |
| `fillZerosOnTheLeft(number: number, totalLength: number)` | `string` | Fills the given number with zeroes to the left.  |
| `countCharacter(string: string, character: string)` | `string` | Counts the specific characters that exist in a given string  |
| `generateRandomString(length: number)` | `string` | Generates a string composed by random characters (AZ-az-0-9 only) with the specified lenght. |
| `cleanSpacesInString(text: string)` | `string` | Cleans the existing multiple spaces that a string could have, in the start, middle or end, leaving the string with single separation spaces in between. |
| `isValidEmailAddress(email: string)` | `boolean` | Evaluate the given string to define if is a correct email address. |


## Contributing

Contributions are always welcome!

Pull requests should have tests to cover the new methods, covering a wide range of posible scenarios.


## Support

For support, open an new issue in this the repository site.


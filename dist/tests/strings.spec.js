"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const src_1 = require("../src");
(0, test_1.test)('it should test the isValidPhoneString method', async () => {
    // * Try to evaluate values that are valid phones
    (0, test_1.expect)((0, src_1.isValidPhoneString)('')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(52)9990001100')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+(52)9990001100')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+52 999 000 11 00')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+ 52 999 000 11 00')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+ 52.999.000.11.00')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1234567890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123-456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(123) 456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123.456.7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1234567890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 123-456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123-456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(123) 456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123 456 7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123.456.7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+91 (123) 456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('18005551234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 800 555 1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 800 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+86 800 555 1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1-800-555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 (800) 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800) 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)5551234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800-555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800.555.1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1-718-444-1122')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('718-444-1122')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(718)-444-1122')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('17184441122')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('7184441122')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('718.444.1122')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1718.444.1122')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1-123-456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 123-456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 (123) 456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 123 456 7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1.123.456.7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+91 (123) 456-7890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('18005551234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 800 555 1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 800 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+86 800 555 1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1-800-555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 (800) 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800) 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)5551234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800-555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800.555.1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('18001234567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 800 123 4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1-800-123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+18001234567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 800 123 4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 (800) 123 4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1(800)1234567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1800 1234567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1.8001234567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1.800.123.4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 (800) 123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('18001234567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 800 123 4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 800 123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+86 800 123 4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1-800-123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 (800) 123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800) 123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)1234567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800-123-4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800.123.4567')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1231231231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123-1231231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123123-1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123-123 1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123 123-1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('123-123-1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(123)123-1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(123)123 1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(123) 123-1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(123) 123 1231')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+99 1234567890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+991234567890')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(555) 444-6789')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('555-444-6789')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('555.444.6789')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('555 444 6789')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('18005551234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 800 555 1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 800 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+86 800 555 1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1-800-555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1.800.555.1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1.800.555.1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 (800) 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800) 555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(800)5551234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800-555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800.555.1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(003) 555-1212')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(103) 555-1212')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(911) 555-1212')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('18005551234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 800 555 1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+86 800-555-1234')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 (800) 555-1234')).toBeTruthy();
    // * Try to evaluate values that are invalid phones
    (0, test_1.expect)((0, src_1.isValidPhoneString)('         ')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('ABC DEF')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('lorem ipsum')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('52+9990001100')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(52)+(999)0001100')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+ 52+999 000 11 00')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+ 52.999.000.11.00+')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(529990001100')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('((52))9990001100')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('((52))9990001100')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('52 999..0001100')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(((((())))))))')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('()()()()()()')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('(((((())))))')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('  01  ')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('++++++++++++++')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('-----------')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('.............')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+0.-+0.-')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('0.0.0.0.0.0.0')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+917 (123) 456-7890')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1+8005551234')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 800) 555 1234')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+1 800) 555-1234')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('+(86 800 555 1234')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)(' 1-800-555-1234')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1 (800) 555-1234 ')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('1--800--123--4567')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800.555..1234')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('800 555  1234')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('8 0   0  4  4  4  5   55 5')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('8:0:0:5:5:5:1:2:3:4')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('8 0 0 5 5 5 1 2 3 4')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidPhoneString)('8-0-0-5-5-5-1-2-3-4')).toBeFalsy();
});
(0, test_1.test)('it should test the itHasNestedBrackets method', async () => {
    // * Try to evaluate strings that have nested brackets
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('{{}}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('this text has { some { nested } curly braces}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('{00{YY}00}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('{{{YY}}}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('TEST{NUMBER}-{-{DIFERENT{00{X}00}TEXT}-}', '{', '}')).toBeTruthy();
    // * Try to evaluate strings that have not nested brackets
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('[00{YY}00]', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('{}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('{}{}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('CASE-{DD}/{MM}/{YY}-{0}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('LOREM-IPSUM-{}{}{}{}{}{}{}{}{}{}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('#-{DD}{MM}{YYYY}-{000000}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasNestedBrackets)('NO CURLY BRACES', '{', '}')).toBeFalsy();
});
(0, test_1.test)('it should test the itHasBalancedBrackets method', async () => {
    // * Try to evaluate if some strings have balanaced brackets
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('TESTING', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{{}}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{}{}{{}{}{}}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{{{}}}{}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{{{}}}{}{}{}{}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{{{}}}{}{}{{}}{}', '{', '}')).toBeTruthy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('TEXT{TESTING{{EXAMPLE}}}{654}{AAA}{{999}//}---{}', '{', '}')).toBeTruthy();
    // * Try to evaluate if some strings have not balanaced brackets
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{}}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{{{{', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{{{}}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('}}{}{}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('TEXT{{{}}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('TEXT{TESTING{{EXAMPLE}}}{654}{AAA}{{999}//---{}', '{', '}')).toBeFalsy();
    (0, test_1.expect)((0, src_1.itHasBalancedBrackets)('{}{{}{{{}{}}{{}{}{}{{}{', '{', '}')).toBeFalsy();
});
(0, test_1.test)('it should test the containsTwoConsecutiveCharacters method', async () => {
    // * Try to evaluate strings that have two consecutive characters of the given character
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('..', '.')).toEqual(true);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('  ', ' ')).toEqual(true);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('lorem  ipsum', ' ')).toEqual(true);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('lorem//ipsum', '/')).toEqual(true);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('ttyybbccffhhggttyyddsseerrttdd', 'h')).toEqual(true);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('........', '.')).toEqual(true);
    // * Try to evaluate strings that have not two consecutive characters of the given character
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('', '.')).toEqual(false);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('lorem ipsum', ' ')).toEqual(false);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('......', '_')).toEqual(false);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('45824682215', '8')).toEqual(false);
    (0, test_1.expect)((0, src_1.containsTwoConsecutiveCharacters)('lorem//ipsum', 'm')).toEqual(false);
    // * Try to pass a string instead of a character
    try {
        (0, src_1.containsTwoConsecutiveCharacters)('', '.');
    }
    catch (error) {
        (0, test_1.expect)(error.message).toEqual('The given characters is not a single character.');
    }
});
(0, test_1.test)('it should test the truncateString method', async () => {
    // * Try to trunctate some strings
    (0, test_1.expect)((0, src_1.truncateString)('', 10)).toEqual('');
    (0, test_1.expect)((0, src_1.truncateString)('Lorem ipsum dolor sit', 0)).toEqual('');
    (0, test_1.expect)((0, src_1.truncateString)('Lorem ipsum dolor sit', -1)).toEqual('');
    (0, test_1.expect)((0, src_1.truncateString)('Lorem ipsum dolor sit', 1)).toEqual('L');
    (0, test_1.expect)((0, src_1.truncateString)('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, totam!', 10)).toEqual('Lorem ipsu');
    (0, test_1.expect)((0, src_1.truncateString)('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, totam!', 10.25)).toEqual('Lorem ipsu');
});
(0, test_1.test)('it should test the fillZerosOnTheLeft method', async () => {
    // * Try to fillwith zeroes some numbers
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(-10, 10)).toEqual('-0000000010');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(1234567890, 8)).toEqual('1234567890');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(0, 0)).toEqual('0');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(0, 1)).toEqual('0');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(0, 2)).toEqual('00');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(9, 2)).toEqual('09');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(9, 3)).toEqual('009');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(9, -3)).toEqual('009');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(9.2564, 10)).toEqual('00009.2564');
    (0, test_1.expect)((0, src_1.fillZerosOnTheLeft)(9.2564, 10.54)).toEqual('00009.2564');
});
(0, test_1.test)('it should test the countCharacter method', async () => {
    // * Try to count existing characters in some strings
    (0, test_1.expect)((0, src_1.countCharacter)('mmmmmmmmmm', 'm')).toEqual(10);
    (0, test_1.expect)((0, src_1.countCharacter)('.._._.......  _..____.___.  -._._..__.-.-..-.', '.')).toEqual(23);
    (0, test_1.expect)((0, src_1.countCharacter)('KDUAOQUENDJUAKSANDSABHDCJNSA', 'A')).toEqual(5);
    (0, test_1.expect)((0, src_1.countCharacter)('KDUAOQUENDJUAKSANDSABHDCJNSA', 'a')).toEqual(0);
    (0, test_1.expect)((0, src_1.countCharacter)('              ', 'a')).toEqual(0);
    (0, test_1.expect)((0, src_1.countCharacter)('', 'a')).toEqual(0);
    (0, test_1.expect)((0, src_1.countCharacter)('the char . appears in this tring only once', '.')).toEqual(1);
    (0, test_1.expect)((0, src_1.countCharacter)('count the at in this @ string because appears @ sometimes @', '@')).toEqual(3);
    (0, test_1.expect)((0, src_1.countCharacter)('..{}{{{![[]***///++--*/*/***&·"·$%!"]}}}.·$%&("!·%/··"=·)$)"·"()$·")")!)=·)$·"=!)!"', '!')).toEqual(6);
    try {
        (0, src_1.countCharacter)('mmmmmmmmmm', 'mm');
    }
    catch (error) {
        (0, test_1.expect)(error.message).toEqual('The given characters is not a single character.');
    }
});
(0, test_1.test)('it should test the generateRandomString method', async () => {
    // * Try to generate some random strings
    (0, test_1.expect)((0, src_1.generateRandomString)(20).length).toEqual(20);
});
(0, test_1.test)('it should test the cleanSpacesInString method', async () => {
    // * Try to generate some random strings
    (0, test_1.expect)((0, src_1.cleanSpacesInString)('            ')).toEqual('');
    (0, test_1.expect)((0, src_1.cleanSpacesInString)('   .    ')).toEqual('.');
    (0, test_1.expect)((0, src_1.cleanSpacesInString)('   .    .  ')).toEqual('. .');
    (0, test_1.expect)((0, src_1.cleanSpacesInString)('   this is     my new string   with    some   spaces  ')).toEqual('this is my new string with some spaces');
    (0, test_1.expect)((0, src_1.cleanSpacesInString)('   this is     my new string   with    some   spaces & special characters like    $     %    !    "    4   9  9   6    5 ')).toEqual('this is my new string with some spaces & special characters like $ % ! " 4 9 9 6 5');
});
(0, test_1.test)('it should test the isValidEmailAddress method', async () => {
    // * Valid email addresses
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('ie@my.co')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('simple@example.com')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('very.common@example.com')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('FirstName.LastName@EasierReading.org')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('long.email-address-with-hyphens@and.subdomains.example.com')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('example@s.example')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('xx@example.com')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('user@example.com')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('user123@email.co.uk')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('john.doe@company.org')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('user_name1234@email-provider.net')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('info@sub.domain.com')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('name@my-email-provider.xyz')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('john.doe@email.travel')).toBeTruthy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`user@invalid-tld.777`)).toBeTruthy();
    // * Invalid email addresses
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('m@t.c')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('m@t.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('m@te.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('x@example.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('example@gmail.com.')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('example@.gmail.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('example@gmail_.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('example@_gmail.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('my+email@testing.com.')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('my$email@testing.com.')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('my-email@test..ing.com.')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('my_email@testing.com.')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('m@2@t.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('m@@t.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('mt.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('user.name+tag+sorting@example.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`abc.example.com`)).toBeFalsy(); // (no @ character)
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`a@b@c@example.com`)).toBeFalsy(); //  (only one @ is allowed outside quotation marks)
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`a"b(c)d,e:f;g<h>i[j\k]l@example.com`)).toBeFalsy(); //  (none of the special characters in this local-part are allowed outside quotation marks)
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`just"not"right@example.com`)).toBeFalsy(); //  (quoted strings must be dot separated or be the only element making up the local-part)
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`this is"not\allowed@example.com`)).toBeFalsy(); //  (spaces, quotes, and backslashes may only exist when within quoted strings and preceded by a backslash)
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`this\ still\"not\\allowed@example.com`)).toBeFalsy(); //  (even if escaped (preceded by a backslash), spaces, quotes, and backslashes must still be contained by quotes)
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`1234567890123456789012345678901234567890123456789012345678901234+x@example.com`)).toBeFalsy(); //  (local-part is longer than 64 characters)
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`i.like.underscores@but_they_are_not_allowed_in_this_part`)).toBeFalsy(); // 
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`abc.@example.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`.abc@example.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`ab..c@example.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`abc-@example.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`-abc@example.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`abc_@example.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`_abc@example.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`my_email_is_so_long_that_could_break_the_spaec_and_time_but_the_defined_internet_rules_to_be_a_correct_short_and_elegible_email_address_that_can_be_used_without_any_problem@some_long_lost_and_remote_server_in_the_world_under_a_restricted_area_in_the_arizona_desert.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`wλ_ϝʍᴉƨϝԍq_ԍwɑᴉɼ@ƨowԍƨԍʁʌԍʁ.cow`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`🇲🇾_🇹🇼🇮🇸🇹🇪🇩_🇪🇲🇦🇮🇱@🇸🇴🇲🇪🇸🇪🇷🇻🇪🇷.🇨🇴🇲`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`ⓂⓎ_ⓉⓌⒾⓈⓉⒺⒹ_ⒺⓂⒶⒾⓁ@ⓈⓄⓂⒺⓈⒺⓇⓋⒺⓇ.ⒸⓄⓂ`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`𐒄𐒍_ᎿᏊᎥᎴᎿ𐒢Ꮷ_𐒢𐒄λᎥᏓ@Ꮄ𐒀𐒄𐒢Ꮄ𐒢ⲄᏉ𐒢Ⲅ.𐒨𐒀𐒄`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('user123@[192.168.1.1]')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)('_______@domain.com')).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`user#domain.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`user#domain.con`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`user&name@email-provider.net`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`spaced user@domain.info`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`double..dots@email.org`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`@.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`user@domain with space.com`)).toBeFalsy();
    (0, test_1.expect)((0, src_1.isValidEmailAddress)(`user@domain..com`)).toBeFalsy();
});

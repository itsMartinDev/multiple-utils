import { test, expect } from '@playwright/test';
import { cleanSpacesInString, containsTwoConsecutiveCharacters, countCharacter, fillZerosOnTheLeft, generateRandomString, isValidEmailAddress, isValidPhoneString, itHasBalancedBrackets, itHasNestedBrackets, truncateString } from '../src';

test('it should test the isValidPhoneString method', async () => {

  // * Try to evaluate values that are valid phones


  expect(isValidPhoneString('')).toBeTruthy()

  expect(isValidPhoneString('(52)9990001100')).toBeTruthy()
  expect(isValidPhoneString('+(52)9990001100')).toBeTruthy()
  expect(isValidPhoneString('+52 999 000 11 00')).toBeTruthy()
  expect(isValidPhoneString('+ 52 999 000 11 00')).toBeTruthy()
  expect(isValidPhoneString('+ 52.999.000.11.00')).toBeTruthy()

  expect(isValidPhoneString('+1234567890')).toBeTruthy()
  expect(isValidPhoneString('123-456-7890')).toBeTruthy()
  expect(isValidPhoneString('(123) 456-7890')).toBeTruthy()
  expect(isValidPhoneString('123.456.7890')).toBeTruthy()
  expect(isValidPhoneString('1234567890')).toBeTruthy()
  expect(isValidPhoneString('+1 123-456-7890')).toBeTruthy()

  expect(isValidPhoneString('123-456-7890')).toBeTruthy()
  expect(isValidPhoneString('(123) 456-7890')).toBeTruthy()
  expect(isValidPhoneString('123 456 7890')).toBeTruthy()
  expect(isValidPhoneString('123.456.7890')).toBeTruthy()
  expect(isValidPhoneString('+91 (123) 456-7890')).toBeTruthy()

  expect(isValidPhoneString('18005551234')).toBeTruthy()
  expect(isValidPhoneString('1 800 555 1234')).toBeTruthy()
  expect(isValidPhoneString('+1 800 555-1234')).toBeTruthy()
  expect(isValidPhoneString('+86 800 555 1234')).toBeTruthy()
  expect(isValidPhoneString('1-800-555-1234')).toBeTruthy()
  expect(isValidPhoneString('1 (800) 555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800)555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800) 555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800)5551234')).toBeTruthy()
  expect(isValidPhoneString('800-555-1234')).toBeTruthy()
  expect(isValidPhoneString('800.555.1234')).toBeTruthy()

  expect(isValidPhoneString('1-718-444-1122')).toBeTruthy()
  expect(isValidPhoneString('718-444-1122')).toBeTruthy()
  expect(isValidPhoneString('(718)-444-1122')).toBeTruthy()
  expect(isValidPhoneString('17184441122')).toBeTruthy()
  expect(isValidPhoneString('7184441122')).toBeTruthy()
  expect(isValidPhoneString('718.444.1122')).toBeTruthy()
  expect(isValidPhoneString('1718.444.1122')).toBeTruthy()
  expect(isValidPhoneString('1-123-456-7890')).toBeTruthy()
  expect(isValidPhoneString('1 123-456-7890')).toBeTruthy()
  expect(isValidPhoneString('1 (123) 456-7890')).toBeTruthy()
  expect(isValidPhoneString('1 123 456 7890')).toBeTruthy()
  expect(isValidPhoneString('1.123.456.7890')).toBeTruthy()
  expect(isValidPhoneString('+91 (123) 456-7890')).toBeTruthy()
  expect(isValidPhoneString('18005551234')).toBeTruthy()
  expect(isValidPhoneString('1 800 555 1234')).toBeTruthy()
  expect(isValidPhoneString('+1 800 555-1234')).toBeTruthy()
  expect(isValidPhoneString('+86 800 555 1234')).toBeTruthy()
  expect(isValidPhoneString('1-800-555-1234')).toBeTruthy()
  expect(isValidPhoneString('1 (800) 555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800)555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800) 555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800)5551234')).toBeTruthy()
  expect(isValidPhoneString('800-555-1234')).toBeTruthy()
  expect(isValidPhoneString('800.555.1234')).toBeTruthy()
  expect(isValidPhoneString('18001234567')).toBeTruthy()
  expect(isValidPhoneString('1 800 123 4567')).toBeTruthy()
  expect(isValidPhoneString('1-800-123-4567')).toBeTruthy()
  expect(isValidPhoneString('+18001234567')).toBeTruthy()
  expect(isValidPhoneString('+1 800 123 4567')).toBeTruthy()
  expect(isValidPhoneString('+1 (800) 123 4567')).toBeTruthy()
  expect(isValidPhoneString('1(800)1234567')).toBeTruthy()
  expect(isValidPhoneString('+1800 1234567')).toBeTruthy()
  expect(isValidPhoneString('1.8001234567')).toBeTruthy()
  expect(isValidPhoneString('1.800.123.4567')).toBeTruthy()
  expect(isValidPhoneString('+1 (800) 123-4567')).toBeTruthy()
  expect(isValidPhoneString('18001234567')).toBeTruthy()
  expect(isValidPhoneString('1 800 123 4567')).toBeTruthy()
  expect(isValidPhoneString('+1 800 123-4567')).toBeTruthy()
  expect(isValidPhoneString('+86 800 123 4567')).toBeTruthy()
  expect(isValidPhoneString('1-800-123-4567')).toBeTruthy()
  expect(isValidPhoneString('1 (800) 123-4567')).toBeTruthy()
  expect(isValidPhoneString('(800)123-4567')).toBeTruthy()
  expect(isValidPhoneString('(800) 123-4567')).toBeTruthy()
  expect(isValidPhoneString('(800)1234567')).toBeTruthy()
  expect(isValidPhoneString('800-123-4567')).toBeTruthy()
  expect(isValidPhoneString('800.123.4567')).toBeTruthy()
  expect(isValidPhoneString('1231231231')).toBeTruthy()
  expect(isValidPhoneString('123-1231231')).toBeTruthy()
  expect(isValidPhoneString('123123-1231')).toBeTruthy()
  expect(isValidPhoneString('123-123 1231')).toBeTruthy()
  expect(isValidPhoneString('123 123-1231')).toBeTruthy()
  expect(isValidPhoneString('123-123-1231')).toBeTruthy()
  expect(isValidPhoneString('(123)123-1231')).toBeTruthy()
  expect(isValidPhoneString('(123)123 1231')).toBeTruthy()
  expect(isValidPhoneString('(123) 123-1231')).toBeTruthy()
  expect(isValidPhoneString('(123) 123 1231')).toBeTruthy()
  expect(isValidPhoneString('+99 1234567890')).toBeTruthy()
  expect(isValidPhoneString('+991234567890')).toBeTruthy()
  expect(isValidPhoneString('(555) 444-6789')).toBeTruthy()
  expect(isValidPhoneString('555-444-6789')).toBeTruthy()
  expect(isValidPhoneString('555.444.6789')).toBeTruthy()
  expect(isValidPhoneString('555 444 6789')).toBeTruthy()
  expect(isValidPhoneString('18005551234')).toBeTruthy()
  expect(isValidPhoneString('1 800 555 1234')).toBeTruthy()
  expect(isValidPhoneString('+1 800 555-1234')).toBeTruthy()
  expect(isValidPhoneString('+86 800 555 1234')).toBeTruthy()
  expect(isValidPhoneString('1-800-555-1234')).toBeTruthy()
  expect(isValidPhoneString('1.800.555.1234')).toBeTruthy()
  expect(isValidPhoneString('+1.800.555.1234')).toBeTruthy()
  expect(isValidPhoneString('1 (800) 555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800)555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800) 555-1234')).toBeTruthy()
  expect(isValidPhoneString('(800)5551234')).toBeTruthy()
  expect(isValidPhoneString('800-555-1234')).toBeTruthy()
  expect(isValidPhoneString('800.555.1234')).toBeTruthy()
  expect(isValidPhoneString('(003) 555-1212')).toBeTruthy()
  expect(isValidPhoneString('(103) 555-1212')).toBeTruthy()
  expect(isValidPhoneString('(911) 555-1212')).toBeTruthy()
  expect(isValidPhoneString('18005551234')).toBeTruthy()
  expect(isValidPhoneString('1 800 555 1234')).toBeTruthy()
  expect(isValidPhoneString('+86 800-555-1234')).toBeTruthy()
  expect(isValidPhoneString('1 (800) 555-1234')).toBeTruthy()

  // * Try to evaluate values that are invalid phones

  expect(isValidPhoneString('         ')).toBeFalsy()
  expect(isValidPhoneString('ABC DEF')).toBeFalsy()
  expect(isValidPhoneString('lorem ipsum')).toBeFalsy()

  expect(isValidPhoneString('52+9990001100')).toBeFalsy()
  expect(isValidPhoneString('(52)+(999)0001100')).toBeFalsy()
  expect(isValidPhoneString('+ 52+999 000 11 00')).toBeFalsy()
  expect(isValidPhoneString('+ 52.999.000.11.00+')).toBeFalsy()

  expect(isValidPhoneString('(529990001100')).toBeFalsy()
  expect(isValidPhoneString('((52))9990001100')).toBeFalsy()
  expect(isValidPhoneString('((52))9990001100')).toBeFalsy()
  expect(isValidPhoneString('52 999..0001100')).toBeFalsy()

  expect(isValidPhoneString('(((((())))))))')).toBeFalsy()
  expect(isValidPhoneString('()()()()()()')).toBeFalsy()
  expect(isValidPhoneString('(((((())))))')).toBeFalsy()

  expect(isValidPhoneString('  01  ')).toBeFalsy()
  expect(isValidPhoneString('++++++++++++++')).toBeFalsy()
  expect(isValidPhoneString('-----------')).toBeFalsy()
  expect(isValidPhoneString('.............')).toBeFalsy()
  expect(isValidPhoneString('+0.-+0.-')).toBeFalsy()
  expect(isValidPhoneString('0.0.0.0.0.0.0')).toBeFalsy()

  expect(isValidPhoneString('+917 (123) 456-7890')).toBeFalsy()

  expect(isValidPhoneString('1+8005551234')).toBeFalsy()
  expect(isValidPhoneString('1 800) 555 1234')).toBeFalsy()
  expect(isValidPhoneString('+1 800) 555-1234')).toBeFalsy()
  expect(isValidPhoneString('+(86 800 555 1234')).toBeFalsy()
  expect(isValidPhoneString(' 1-800-555-1234')).toBeFalsy()
  expect(isValidPhoneString('1 (800) 555-1234 ')).toBeFalsy()
  expect(isValidPhoneString('1--800--123--4567')).toBeFalsy()
  expect(isValidPhoneString('800.555..1234')).toBeFalsy()
  expect(isValidPhoneString('800 555  1234')).toBeFalsy()

  expect(isValidPhoneString('8 0   0  4  4  4  5   55 5')).toBeFalsy()
  expect(isValidPhoneString('8:0:0:5:5:5:1:2:3:4')).toBeFalsy()
  expect(isValidPhoneString('8 0 0 5 5 5 1 2 3 4')).toBeFalsy()
  expect(isValidPhoneString('8-0-0-5-5-5-1-2-3-4')).toBeFalsy()


})

test('it should test the itHasNestedBrackets method', async () => {

  // * Try to evaluate strings that have nested brackets

  expect(itHasNestedBrackets('{{}}', '{', '}')).toBeTruthy()
  expect(itHasNestedBrackets('this text has { some { nested } curly braces}', '{', '}')).toBeTruthy()
  expect(itHasNestedBrackets('{00{YY}00}', '{', '}')).toBeTruthy()
  expect(itHasNestedBrackets('{{{YY}}}', '{', '}')).toBeTruthy()
  expect(itHasNestedBrackets('TEST{NUMBER}-{-{DIFERENT{00{X}00}TEXT}-}', '{', '}')).toBeTruthy()


  // * Try to evaluate strings that have not nested brackets

  expect(itHasNestedBrackets('[00{YY}00]', '{', '}')).toBeFalsy()
  expect(itHasNestedBrackets('{}', '{', '}')).toBeFalsy()
  expect(itHasNestedBrackets('{}{}', '{', '}')).toBeFalsy()
  expect(itHasNestedBrackets('CASE-{DD}/{MM}/{YY}-{0}', '{', '}')).toBeFalsy()
  expect(itHasNestedBrackets('LOREM-IPSUM-{}{}{}{}{}{}{}{}{}{}', '{', '}')).toBeFalsy()
  expect(itHasNestedBrackets('#-{DD}{MM}{YYYY}-{000000}', '{', '}')).toBeFalsy()
  expect(itHasNestedBrackets('NO CURLY BRACES', '{', '}')).toBeFalsy()


})

test('it should test the itHasBalancedBrackets method', async () => {

  // * Try to evaluate if some strings have balanaced brackets

  expect(itHasBalancedBrackets('TESTING', '{', '}')).toBeTruthy()
  expect(itHasBalancedBrackets('{}', '{', '}')).toBeTruthy()
  expect(itHasBalancedBrackets('{{}}', '{', '}')).toBeTruthy()
  expect(itHasBalancedBrackets('{}{}{{}{}{}}', '{', '}')).toBeTruthy()
  expect(itHasBalancedBrackets('{{{}}}{}', '{', '}')).toBeTruthy()
  expect(itHasBalancedBrackets('{{{}}}{}{}{}{}', '{', '}')).toBeTruthy()
  expect(itHasBalancedBrackets('{{{}}}{}{}{{}}{}', '{', '}')).toBeTruthy()
  expect(itHasBalancedBrackets('TEXT{TESTING{{EXAMPLE}}}{654}{AAA}{{999}//}---{}', '{', '}')).toBeTruthy()

  // * Try to evaluate if some strings have not balanaced brackets

  expect(itHasBalancedBrackets('{', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('}', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('{}}', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('{{{{', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('{{{}}', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('}}{}{}', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('TEXT{{{}}', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('TEXT{TESTING{{EXAMPLE}}}{654}{AAA}{{999}//---{}', '{', '}')).toBeFalsy()
  expect(itHasBalancedBrackets('{}{{}{{{}{}}{{}{}{}{{}{', '{', '}')).toBeFalsy()


})

test('it should test the containsTwoConsecutiveCharacters method', async () => {

  // * Try to evaluate strings that have two consecutive characters of the given character

  expect(containsTwoConsecutiveCharacters('..', '.')).toEqual(true)
  expect(containsTwoConsecutiveCharacters('  ', ' ')).toEqual(true)
  expect(containsTwoConsecutiveCharacters('lorem  ipsum', ' ')).toEqual(true)
  expect(containsTwoConsecutiveCharacters('lorem//ipsum', '/')).toEqual(true)
  expect(containsTwoConsecutiveCharacters('ttyybbccffhhggttyyddsseerrttdd', 'h')).toEqual(true)
  expect(containsTwoConsecutiveCharacters('........', '.')).toEqual(true)


  // * Try to evaluate strings that have not two consecutive characters of the given character

  expect(containsTwoConsecutiveCharacters('', '.')).toEqual(false)
  expect(containsTwoConsecutiveCharacters('lorem ipsum', ' ')).toEqual(false)
  expect(containsTwoConsecutiveCharacters('......', '_')).toEqual(false)
  expect(containsTwoConsecutiveCharacters('45824682215', '8')).toEqual(false)
  expect(containsTwoConsecutiveCharacters('lorem//ipsum', 'm')).toEqual(false)


  // * Try to pass a string instead of a character

  try {
     containsTwoConsecutiveCharacters('', '.')
  } catch (error: any) {
     expect(error.message).toEqual('The given characters is not a single character.')
  }

})

test('it should test the truncateString method', async () => {

  // * Try to trunctate some strings
  expect(truncateString('', 10)).toEqual('')
  expect(truncateString('Lorem ipsum dolor sit', 0)).toEqual('')
  expect(truncateString('Lorem ipsum dolor sit', -1)).toEqual('')
  expect(truncateString('Lorem ipsum dolor sit', 1)).toEqual('L')
  expect(truncateString('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, totam!', 10)).toEqual('Lorem ipsu')
  expect(truncateString('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, totam!', 10.25)).toEqual('Lorem ipsu')

})

test('it should test the fillZerosOnTheLeft method', async () => {

  // * Try to fillwith zeroes some numbers

  expect(fillZerosOnTheLeft(-10, 10)).toEqual('-0000000010')
  expect(fillZerosOnTheLeft(1234567890, 8)).toEqual('1234567890')
  expect(fillZerosOnTheLeft(0, 0)).toEqual('0')
  expect(fillZerosOnTheLeft(0, 1)).toEqual('0')
  expect(fillZerosOnTheLeft(0, 2)).toEqual('00')
  expect(fillZerosOnTheLeft(9, 2)).toEqual('09')
  expect(fillZerosOnTheLeft(9, 3)).toEqual('009')
  expect(fillZerosOnTheLeft(9, -3)).toEqual('009')
  expect(fillZerosOnTheLeft(9.2564, 10)).toEqual('00009.2564')
  expect(fillZerosOnTheLeft(9.2564, 10.54)).toEqual('00009.2564')

})

test('it should test the countCharacter method', async () => {

  // * Try to count existing characters in some strings

  expect(countCharacter('mmmmmmmmmm', 'm')).toEqual(10)
  expect(countCharacter('.._._.......  _..____.___.  -._._..__.-.-..-.', '.')).toEqual(23)
  expect(countCharacter('KDUAOQUENDJUAKSANDSABHDCJNSA', 'A')).toEqual(5)
  expect(countCharacter('KDUAOQUENDJUAKSANDSABHDCJNSA', 'a')).toEqual(0)
  expect(countCharacter('              ', 'a')).toEqual(0)
  expect(countCharacter('', 'a')).toEqual(0)
  expect(countCharacter('the char . appears in this tring only once', '.')).toEqual(1)
  expect(countCharacter('count the at in this @ string because appears @ sometimes @', '@')).toEqual(3)
  expect(countCharacter('..{}{{{![[]***///++--*/*/***&·"·$%!"]}}}.·$%&("!·%/··"=·)$)"·"()$·")")!)=·)$·"=!)!"', '!')).toEqual(6)


  try {
     countCharacter('mmmmmmmmmm', 'mm')
  } catch (error: any) {
     expect(error.message).toEqual('The given characters is not a single character.')
  }

})

test('it should test the generateRandomString method', async () => {

  // * Try to generate some random strings
  expect(generateRandomString(20).length).toEqual(20)

})

test('it should test the cleanSpacesInString method', async () => {

  // * Try to generate some random strings
  expect(cleanSpacesInString('            ')).toEqual('')

  expect(cleanSpacesInString('   .    ')).toEqual('.')
  expect(cleanSpacesInString('   .    .  ')).toEqual('. .')
  expect(cleanSpacesInString('   this is     my new string   with    some   spaces  ')).toEqual('this is my new string with some spaces')
  expect(cleanSpacesInString('   this is     my new string   with    some   spaces & special characters like    $     %    !    "    4   9  9   6    5 ')).toEqual('this is my new string with some spaces & special characters like $ % ! " 4 9 9 6 5')

})

test('it should test the isValidEmailAddress method', async () => {

  // * Valid email addresses

  expect(isValidEmailAddress('')).toBeTruthy()

  expect(isValidEmailAddress('ie@my.co')).toBeTruthy()

  expect(isValidEmailAddress('simple@example.com')).toBeTruthy()
  expect(isValidEmailAddress('very.common@example.com')).toBeTruthy()
  expect(isValidEmailAddress('FirstName.LastName@EasierReading.org')).toBeTruthy()
  expect(isValidEmailAddress('long.email-address-with-hyphens@and.subdomains.example.com')).toBeTruthy()
  expect(isValidEmailAddress('example@s.example')).toBeTruthy()
  expect(isValidEmailAddress('xx@example.com')).toBeTruthy()

  expect(isValidEmailAddress('user@example.com')).toBeTruthy()
  expect(isValidEmailAddress('user123@email.co.uk')).toBeTruthy()
  expect(isValidEmailAddress('john.doe@company.org')).toBeTruthy()
  expect(isValidEmailAddress('user_name1234@email-provider.net')).toBeTruthy()
  expect(isValidEmailAddress('info@sub.domain.com')).toBeTruthy()
  expect(isValidEmailAddress('name@my-email-provider.xyz')).toBeTruthy()
  expect(isValidEmailAddress('john.doe@email.travel')).toBeTruthy()
  expect(isValidEmailAddress(`user@invalid-tld.777`)).toBeTruthy()


  // * Invalid email addresses
  expect(isValidEmailAddress('m@t.c')).toBeFalsy()
  expect(isValidEmailAddress('m@t.com')).toBeFalsy()
  expect(isValidEmailAddress('m@te.com')).toBeFalsy()
  expect(isValidEmailAddress('x@example.com')).toBeFalsy()
  expect(isValidEmailAddress('example@gmail.com.')).toBeFalsy()
  expect(isValidEmailAddress('example@.gmail.com')).toBeFalsy()
  expect(isValidEmailAddress('example@gmail_.com')).toBeFalsy()
  expect(isValidEmailAddress('example@_gmail.com')).toBeFalsy()

  expect(isValidEmailAddress('my+email@testing.com.')).toBeFalsy()
  expect(isValidEmailAddress('my$email@testing.com.')).toBeFalsy()
  expect(isValidEmailAddress('my-email@test..ing.com.')).toBeFalsy()

  expect(isValidEmailAddress('my_email@testing.com.')).toBeFalsy()
  expect(isValidEmailAddress('m@2@t.com')).toBeFalsy()
  expect(isValidEmailAddress('m@@t.com')).toBeFalsy()
  expect(isValidEmailAddress('mt.com')).toBeFalsy()
  expect(isValidEmailAddress('user.name+tag+sorting@example.com')).toBeFalsy()
  expect(isValidEmailAddress(`abc.example.com`)).toBeFalsy() // (no @ character)
  expect(isValidEmailAddress(`a@b@c@example.com`)).toBeFalsy() //  (only one @ is allowed outside quotation marks)
  expect(isValidEmailAddress(`a"b(c)d,e:f;g<h>i[j\k]l@example.com`)).toBeFalsy() //  (none of the special characters in this local-part are allowed outside quotation marks)
  expect(isValidEmailAddress(`just"not"right@example.com`)).toBeFalsy() //  (quoted strings must be dot separated or be the only element making up the local-part)
  expect(isValidEmailAddress(`this is"not\allowed@example.com`)).toBeFalsy() //  (spaces, quotes, and backslashes may only exist when within quoted strings and preceded by a backslash)
  expect(isValidEmailAddress(`this\ still\"not\\allowed@example.com`)).toBeFalsy() //  (even if escaped (preceded by a backslash), spaces, quotes, and backslashes must still be contained by quotes)
  expect(isValidEmailAddress(`1234567890123456789012345678901234567890123456789012345678901234+x@example.com`)).toBeFalsy() //  (local-part is longer than 64 characters)
  expect(isValidEmailAddress(`i.like.underscores@but_they_are_not_allowed_in_this_part`)).toBeFalsy() // 
  expect(isValidEmailAddress(`abc.@example.com`)).toBeFalsy()
  expect(isValidEmailAddress(`.abc@example.com`)).toBeFalsy()
  expect(isValidEmailAddress(`ab..c@example.com`)).toBeFalsy()

  expect(isValidEmailAddress(`abc-@example.com`)).toBeFalsy()
  expect(isValidEmailAddress(`-abc@example.com`)).toBeFalsy()

  expect(isValidEmailAddress(`abc_@example.com`)).toBeFalsy()
  expect(isValidEmailAddress(`_abc@example.com`)).toBeFalsy()

  expect(isValidEmailAddress(`my_email_is_so_long_that_could_break_the_spaec_and_time_but_the_defined_internet_rules_to_be_a_correct_short_and_elegible_email_address_that_can_be_used_without_any_problem@some_long_lost_and_remote_server_in_the_world_under_a_restricted_area_in_the_arizona_desert.com`)).toBeFalsy()


  expect(isValidEmailAddress(`wλ_ϝʍᴉƨϝԍq_ԍwɑᴉɼ@ƨowԍƨԍʁʌԍʁ.cow`)).toBeFalsy()
  expect(isValidEmailAddress(`🇲🇾_🇹🇼🇮🇸🇹🇪🇩_🇪🇲🇦🇮🇱@🇸🇴🇲🇪🇸🇪🇷🇻🇪🇷.🇨🇴🇲`)).toBeFalsy()
  expect(isValidEmailAddress(`ⓂⓎ_ⓉⓌⒾⓈⓉⒺⒹ_ⒺⓂⒶⒾⓁ@ⓈⓄⓂⒺⓈⒺⓇⓋⒺⓇ.ⒸⓄⓂ`)).toBeFalsy()
  expect(isValidEmailAddress(`𐒄𐒍_ᎿᏊᎥᎴᎿ𐒢Ꮷ_𐒢𐒄λᎥᏓ@Ꮄ𐒀𐒄𐒢Ꮄ𐒢ⲄᏉ𐒢Ⲅ.𐒨𐒀𐒄`)).toBeFalsy()

  expect(isValidEmailAddress('user123@[192.168.1.1]')).toBeFalsy()
  expect(isValidEmailAddress('_______@domain.com')).toBeFalsy()

  expect(isValidEmailAddress(`user#domain.com`)).toBeFalsy()
  expect(isValidEmailAddress(`user#domain.con`)).toBeFalsy()
  expect(isValidEmailAddress(`user&name@email-provider.net`)).toBeFalsy()
  expect(isValidEmailAddress(`spaced user@domain.info`)).toBeFalsy()
  expect(isValidEmailAddress(`double..dots@email.org`)).toBeFalsy()
  expect(isValidEmailAddress(`@.com`)).toBeFalsy()
  expect(isValidEmailAddress(`user@domain with space.com`)).toBeFalsy()
  expect(isValidEmailAddress(`user@domain..com`)).toBeFalsy()


})



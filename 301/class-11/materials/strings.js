/******************************************************
 * STRING METHODS PRACTICE FILE
 * ----------------------------------------------------
 * Topic: Working with strings in JavaScript
 *
 * A STRING = a piece of text like:
 * "hello", "My name is Jason", "JavaScript"
 *
 * Strings are like a row of characters (letters).
 ******************************************************/

/* ----------------------------------------------------
1. includes()
-------------------------------------------------------
WHAT IT DOES:
Checks if one string contains another string inside it.

JARGON:
- "substring" = a smaller piece of a string

REAL MEANING:
"Does this text contain this other text?"
----------------------------------------------------- */

let str1 = "My instructors shred";

console.log(str1.includes("uct")); 
// true → because "instructors" contains "uct"

console.log(str1.includes("hello")); 
// false → not found

// WHY THIS IS USEFUL:
// You can check if a word exists in a message, search bar, etc.



/* ----------------------------------------------------
2. substring(start, end)
-------------------------------------------------------
WHAT IT DOES:
Cuts out part of a string from start index to end index.

IMPORTANT RULE:
The "end" index is NOT included.

JARGON:
- "index" = the position of a character in a string
  (starts counting from 0)
----------------------------------------------------- */

let str2 = "My instructors shred";

console.log(str2.substring(0, 2));
// "My" → characters at index 0 and 1

console.log(str2.substring(3, 14));
// "instructors"

/*
WHY THIS IS USEFUL:
You can extract parts of text like:
- usernames
- codes
- first names
*/



/* ----------------------------------------------------
3. charAt(index)
-------------------------------------------------------
WHAT IT DOES:
Returns the character at a specific position.

JARGON:
- "character" = a single letter, number, or symbol
----------------------------------------------------- */

let str3 = "My instructors shred";

console.log(str3.charAt(0));
// "M"

console.log(str3.charAt(3));
// "i"

/*
WHY THIS IS USEFUL:
You can look at letters one by one in a word.
*/



/* ----------------------------------------------------
4. charCodeAt(index)
-------------------------------------------------------
WHAT IT DOES:
Returns a number that represents a character.

JARGON:
- ASCII code = a number that computers use to represent letters

Example:
'A' = 65
'B' = 66
'M' = 77
----------------------------------------------------- */

let str4 = "My instructors shred";

console.log(str4.charCodeAt(0));
// 77 → ASCII code for "M"

console.log("A".charCodeAt(0));
// 65

/*
WHY THIS IS USEFUL:
Computers store letters as numbers behind the scenes.
This helps with sorting, encryption, and encoding text.
*/



/* ----------------------------------------------------
5. String.fromCharCode(number)
-------------------------------------------------------
WHAT IT DOES:
Turns a number (ASCII code) back into a letter.

JARGON:
- decoding = turning numbers back into text
----------------------------------------------------- */

console.log(String.fromCharCode(77));
// "M"

console.log(String.fromCharCode(65));
// "A"

/*
WHY THIS IS USEFUL:
It is the reverse of charCodeAt.
You can build text from numbers.
*/



/* ----------------------------------------------------
PRACTICE SECTION (STUDENTS)
----------------------------------------------------- */

let message = "JavaScript is awesome";

// 1. Check if "Script" exists in the string
console.log(message.includes("Script"));

// 2. Get the word "Java"
console.log(message.substring(0, 4));

// 3. Get the first letter
console.log(message.charAt(0));

// 4. Get ASCII code of first letter
console.log(message.charCodeAt(0));

// 5. Convert ASCII 74 into a letter
console.log(String.fromCharCode(74));



/* ----------------------------------------------------
KEY TAKEAWAY
-------------------------------------------------------
- includes() → checks if text exists
- substring() → cuts part of text
- charAt() → gets one character
- charCodeAt() → turns letter into number
- fromCharCode() → turns number into letter
----------------------------------------------------- */
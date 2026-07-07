/**********************************************************************
 * Regular Expressions (Regex) Demo
 * Code 301 - Class 13
 *
 * Think of Regex like a search tool with superpowers.
 *
 * Instead of searching for one exact word, Regex lets you search
 * for PATTERNS.
 *
 * Real-world uses:
 * ✔ Check if an email looks valid
 * ✔ Make sure a password follows rules
 * ✔ Find phone numbers
 * ✔ Replace words
 * ✔ Search large amounts of text
 *********************************************************************/


//----------------------------------------------------------
// Our sample string for today's examples
//----------------------------------------------------------

let str = "The rain in Spain falls mainly in the plain";

console.log(str);

console.log("--------------------------------------");
console.log("Example 1 - Looking for one letter");
console.log("--------------------------------------");

/*
Regex always goes between two forward slashes.

    /T/

This asks:

"Can you find the letter T?"
*/

let regex = /T/;

console.log(regex.test(str));
// true



console.log("--------------------------------------");
console.log("Example 2 - Ignore Uppercase vs Lowercase");
console.log("--------------------------------------");

/*
Normally Regex is case-sensitive.

This means:

T ≠ t

The "i" flag means:

Ignore uppercase and lowercase differences.
*/

regex = /t/i;

console.log(regex.test(str));
// true



console.log("--------------------------------------");
console.log("Example 3 - Global Search");
console.log("--------------------------------------");

/*
The "g" flag means:

Find ALL matches instead of stopping after the first one.
*/

regex = /in/g;

console.log(str.match(regex));

/*
Output:

['in','in','in','in','in']

Notice match() returns an array of every match.
*/



console.log("--------------------------------------");
console.log("Example 4 - Character Ranges");
console.log("--------------------------------------");

/*
Square brackets [] mean:

"Look for any character inside these brackets."

Examples:

[A-Z]   capital letters
[a-z]   lowercase letters
[0-9]   numbers
*/

console.log(str.match(/[A-Z]/g));
// ['T','S']

console.log(str.match(/[a-z]/g));
// every lowercase letter

console.log("abc123".match(/[0-9]/g));
// ['1','2','3']



console.log("--------------------------------------");
console.log("Example 5 - Groups");
console.log("--------------------------------------");

/*
Parentheses () group things together.

Here we search for:

"ain"

inside words.
*/

console.log(str.match(/(ain)/g));

/*
Output:

['ain','ain','ain','ain']
*/



console.log("--------------------------------------");
console.log("Example 6 - Word Boundaries");
console.log("--------------------------------------");

/*
\b means:

Beginning or end of a word.

This Regex looks for words ending in "in".
*/

regex = /([A-Za-z]in)\b/g;

console.log(str.match(regex));

/*
Output:

[
 'ain',
 'ain',
 'ain',
 'ain'
]

Notice:

"Spain" gives "ain"

because the letters before "in"
match our pattern.
*/



console.log("--------------------------------------");
console.log("Example 7 - Finding the First Letter of Every Word");
console.log("--------------------------------------");

/*
Helpful shortcuts

\\w  = any letter or number

\\b  = beginning/end of a word

Together:

\\b\\w

means

"The first letter of every word"
*/

regex = /\b(\w)/g;

console.log(str.match(regex));

/*
Output:

[
'T','r','i','S','f',
'm','i','t','p'
]
*/



console.log("--------------------------------------");
console.log("Example 8 - Replacing Text");
console.log("--------------------------------------");

/*
replace() swaps one thing for another.

Here we replace the first letter
of every word with a dash.
*/

regex = /\b(\w)/g;

console.log(str.replace(regex, "-"));



console.log("--------------------------------------");
console.log("Example 9 - Replace Using a Function");
console.log("--------------------------------------");

/*
Instead of replacing everything
with the SAME value...

We can use a function.

The function runs once
for every match.

Parameters:

matchedThing
The text Regex found.

x
The captured group.

idx
Where the match begins inside the string.
*/

let camelCase = str
  .replace(regex, (matchedThing, x, idx) => {

    // Keep the first letter lowercase.
    // Capitalize every other first letter.

    return idx === 0
      ? matchedThing.toLowerCase()
      : matchedThing.toUpperCase();

  })

  // Remove spaces and punctuation.
  .replace(/\W/g, "");

console.log(camelCase);

/*
Output:

theRainInSpainFallsMainlyInThePlain

This is called camelCase.
*/



console.log("--------------------------------------");
console.log("Example 10 - Email Validation");
console.log("--------------------------------------");

/*
Regex is commonly used to check
whether user input follows a pattern.

This is NOT a perfect email validator,
but it demonstrates the idea.

Pattern:

something
@
something
.
com OR net OR org
*/

let email = "john@here.com";

let validator = /(.*?)@(.*?)\.(com|net|org)/g;

console.log(validator.test(email));
// true

console.log(email.match(validator));



console.log("--------------------------------------");
console.log("Example 11 - Putting It All Together");
console.log("--------------------------------------");

/*
This Regex looks complicated.

Don't memorize it!

Just understand that Regex
can combine many smaller rules.
*/

regex = /s.?([A-Za-z]in)\s+/g;

console.log(str.match(regex));

/*
Breakdown:

s

Find the letter s

.

Any single character

?

The previous character is optional

([A-Za-z]in)

Any letter followed by "in"

\s+

One or more spaces

Regex allows us to build
very powerful searches by
combining small pieces.
*/



console.log("--------------------------------------");
console.log("Common Regex Symbols");
console.log("--------------------------------------");

/*

/abc/      Find "abc"

g          Global (find all matches)

i          Ignore uppercase/lowercase

[]         Character range

()         Group

\\w         Letter or number

\\W         NOT a letter or number

\\s         Whitespace

\\b         Word boundary

^          Beginning of string

$          End of string

.          Any single character

*          Repeat zero or more times

+          Repeat one or more times

?          Optional

*/



console.log("--------------------------------------");
console.log("Remember");
console.log("--------------------------------------");

/*

You are NOT expected to memorize Regex.

Professional developers regularly use:

https://regex101.com

It explains what each part of your Regex does
and lets you test your patterns.

The important idea today is:

Regex is simply a way to search
for PATTERNS instead of exact text.

*/
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}

function palindromeSimple(str) {
    let reversed = str
        .split('')
        .reverse()
        .join('');
    return str === reversed;
}

function palindromeSimplest(str) {
    if (str.slice(-1) !== str.charAt(0)) {
        return false;
    } else {
        let result = '';
        for (let i = str.length - 1; i >= 0; i--) {
            result += str.charAt(i);
        }
        return result === str;
    }
}

module.exports = palindrome;

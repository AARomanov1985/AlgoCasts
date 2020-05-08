// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }
    return result;
}

function reverseByUsingArray(str) {
    let arr = str.split('');
    arr.reverse();
    return arr.join('');
}

function reverseByUsingArrayShort(str) {
    return str.split('').reverse().join('');
}

function reverseByUsingForEach(str) {
    let reversed = "";
    for (let c of str) {
        reversed += c;
    }
    return reversed;
}

function reverseByUsingReduce(str) {
    return str.split('').reduce((char, rev) => char + rev, '');
}

module.exports = reverse;

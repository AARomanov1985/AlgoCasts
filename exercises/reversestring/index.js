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

function reverseByUsingArrayShort(str) {
    return str.split('').reverse().join('');
}

function reverseByUsingReduce(str) {
    return str.split('').reduce((a, b) => b + a, '');
}

module.exports = reverse;

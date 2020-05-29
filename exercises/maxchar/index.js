// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {};
    for (let char of str) {
        if (map[char]) {
            map[char]++;
        } else {
            map[char] = 1;
        }
    }

    let maxChar = '';
    let max = 0;
    for (let char in map) {
        if (map[char] > maxChar) {
            max = map[char];
            maxChar = char;
        }
    }
    return maxChar;
}

function maxCharWithMap(str) {
    let map = new Map();
    for (let c of str) {
        let value = map.get(c);
        if (map.get(c)) {
            value++;
            map.set(c, value);
        } else {
            map.set(c, 1);
        }
    }
    let maxValue = 0;
    let char;
    for (var [key, value] of map) {
        if (value > maxValue) {
            char = key;
            maxValue = value;
        }
    }
    return char;
}

module.exports = maxChar;

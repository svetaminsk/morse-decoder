const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for (let i = 0; i < expr.length; i += 2) {
        arr.push(`${expr[i]}${expr[i + 1]}`);
    }
    let encoded = '';
    for (let j = 0; j < arr.length; j += 5) {
        for (let i = j; i < j + 5; i++) {
            if (arr[i] == '10') {
                encoded += '.';
            } else if (arr[i] == '11') {
                encoded += '-';
            } else if (arr[i] == '**') {
                encoded += ',';
                encoded += 'space';
                i += 4;
            } else {
                encoded += ',';
            }
        } encoded += ',';
    }
    console.log(arr);
    console.log(encoded);
    let decoded = encoded.split(',');
    console.log(decoded);
    return decoded.map(item => item == 'space' ? ' ' : MORSE_TABLE[item] || '').join('');
}

module.exports = {
    decode
}
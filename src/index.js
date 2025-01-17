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
    let result = [];
    for (let i=0; i <= expr.length-1; i+=10) {
        result.push(expr.slice(i, i+10).replace(/11/g, '-').replace(/10/g, '.').replace(/0/g,''));
    }
    const word = result.map(item => {
    for (let prop in MORSE_TABLE) {
        if (item === "**********") {
            return " ";
        }
        if( item === prop) {
            return MORSE_TABLE[prop];
        }
    }
    })
    return word.join('');
}

module.exports = {
    decode
}
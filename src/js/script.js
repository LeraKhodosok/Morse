const text = document.querySelector('.vvod');
const morse = document.querySelector('.morse');
const russian = document.querySelector('.russian');
const translator = document.querySelector('.trans');

let alphabet = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    "/": " ",
    "-.-.--": "!",
    ".-.-.-": ".",
    "--..--": ","
};

let alphabet2 = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...7",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    " ": "/",
    "!": "-.-.--",
    ".": ".-.-.-",
    ",": "--..--"
};

let messageConverter = [];
const mes = ' ';

russian.addEventListener('click', () => {
    let vvod = text.value;
    vvod.split("   ").map(function (word) {
        word.split(" ").map(function (letter) {
            messageConverter.push(alphabet[letter]);
        });
        messageConverter.push(" ");
    })

    translator.value = messageConverter.join("");
    console.log(messageConverter.join("")); //это для себя проверяла
})

morse.addEventListener('click', () => {
    let vvod = text.value;
    for (var key in alphabet2) { 
        if (vvod == key) {
            console.log(alphabet2[key]); //это для себя проверяла
            translator.value = alphabet2[key];
        }
    }
})


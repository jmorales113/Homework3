
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomCharacter() {

const characters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    return characters[Math.floor(Math.random() * characters.length)];

}


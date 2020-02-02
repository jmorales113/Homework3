var passWordCharacters = "!#$%&()*+,-./:;<=>?@[]\^_`{|}~0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lengthName = document.getElementById("lengthName")
var sliderLength = document.getElementById("sliderLength")
function generatePassword() {
    var password = "";
    var passwordLength = 128;
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor((Math.random()*passWordCharacters.length)+0);
        password+= passWordCharacters.charAt(randomNumber);
        console.log(randomNumber)
    }
 
    document.getElementById("text-box").innerHTML = password
}
sliderLength.onclick = function(){
    lengthName.innerHTML = "Length:" + sliderLength.value
    generatePassword()

}


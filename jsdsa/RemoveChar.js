let number = "111"
let digit = "3"


var removeDigit = function(number, digit) {
    const result = number.replace(digit,"")
    console.log(result)
};

removeDigit(number,digit)

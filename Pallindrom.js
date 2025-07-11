const checkPalindrome = (str) => {
    const reversed = str.split("").reverse().join("");
    return reversed === str;
}

console.log(checkPalindrome("prajyot"))
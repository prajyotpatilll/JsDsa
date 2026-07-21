// string is anagram or not
// silent == listen

const Anagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return console.log("Not Anagram");
    }
    let counter = {}
    for (let letter of str1) {
        console.log(letter)
        counter[letter]
        counter[letter] = (counter[letter] || 0) + 1;
        console.log(counter)
    }

    for (let items of str2) {
        if (!counter[items]) {
            return console.log("Not Anagram");
        }
        counter[items] -= 1;

    }
    return console.log("Anagram string");
}

Anagram("silent", "listen")

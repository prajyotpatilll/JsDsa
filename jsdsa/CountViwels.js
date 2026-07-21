// count vowels in the string

const CountVowels = (str) =>{
    let count = 0;
    for(let item of str){
        if(item === "a" || item === "e" || item === "i" || item === "o" || item === "u" ){
            count++;
        }
    }
    console.log(count)
}

CountVowels("aeiou");
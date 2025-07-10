const SwapCase = (str) =>{
    let result = ""
    for(let i=0; i<str.length;i++){
        let ch = str[i]
        let code = ch.charCodeAt(0)
        console.log(code)
        if(code>=65 && code<=90){
            result+=String.fromCharCode(code+32)
        }
        else if(code>=97 && code<=122){
            result += String.fromCharCode(code-32)
        }
        else{
            result+=ch
        }
    }
return result
}

console.log(SwapCase("Hello World"));
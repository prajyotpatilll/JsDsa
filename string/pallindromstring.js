let str = "javascript"
let str2 = ""
for(let i = str.length -1; i >= 0; i--){
    str2 = str2 + str[i]
}

console.log(str2)

if(str === str2){
    console.log(str, ": string is pallindrome")
}else{
    console.log(str,": string is not pallindrome")
}

let str3 = str.split("").reverse().join("")

str3 === str?console.log("true"):console.log("false")   
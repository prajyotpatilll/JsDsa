let x = "ababa"

let y = x.split("").reverse().join("");

if(x==y){
    console.log("Pallindrom")
}
else{
    console.log("Not Pallindrom")
}
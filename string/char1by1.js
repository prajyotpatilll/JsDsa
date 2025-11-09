let str = "hello"

for(let i=0;i<=str.length-1;i++){
    console.log(str[i])
}


for(let i of str){
    console.log(i)
}

for(let i in str){
    console.log(str[i],":",i)
}
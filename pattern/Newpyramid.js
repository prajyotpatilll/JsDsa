let a = 5;

for(let i=1;i<=a;i++){
    let str = "";
    for(let j=1;j<=a-i;j++){
        str += " ";
    }   
    for(let k=1;k<=i*2-1;k++){
        str += "*";
    }
    console.log(str);
}
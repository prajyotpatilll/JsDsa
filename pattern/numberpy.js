let n =5;
for(let i=1; i<=n;i++){
    let str ="";
    for(let j=i; j<=n-1;j++){
        str += " ";
    }
    for(let k=1;k<=i;k++){
        str += k;
    }

    for(let l=i-1;l>=1;l--){
        str += l;
    }
    console.log(str);
}
let num =3;
for(let i=1;i<=num;i++){
    let line = "";
    for(let j = 1; j <= num-i;j++){
        line = line + " "
    }

    for(let k = 1; k <= 2*i-1;k++){
        line = line + "*" 
    }

    console.log(line)
}
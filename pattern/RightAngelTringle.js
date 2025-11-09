let n = 5;

for (let i = 1; i <= n; i++) {
    let line = "";
    for(let k = 1;k <= n-i;k++){
        line = line + " "
    }
    for (let j = 1; j <= i; j++) {
        line +=  "*";
    }
    console.log(line);
}

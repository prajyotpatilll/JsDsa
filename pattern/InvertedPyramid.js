let n = 5
for (let i = n; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }
    for (let k = 1; k <= i; k++) {
        line += "* ";
    }
    console.log(line);
}



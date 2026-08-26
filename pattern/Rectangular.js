let rows = 5;
let cols = 8;

for (let i = 0; i < rows; i++) {
    let row = "";

    for (let j = 0; j < cols; j++) {
        if (i === 0 || i === rows - 1 || j === 0 || j === cols - 1) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}
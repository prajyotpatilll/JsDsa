let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const transpose = (matrix) => {

    //this called when row * colum is same
    if (matrix.length === matrix[0].length) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix[0].length; j++) {
                [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
            }
        }
        console.log("this called")
        return matrix
    }
    //this called when row * col not same
    else {
        const m = matrix.length;         // rows
        const n = matrix[0].length;     // cols
        const result = Array.from({ length: n }, () => Array(m));

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                result[j][i] = matrix[i][j];
            }
        }

        return result;
    }

};

console.log(transpose(arr));

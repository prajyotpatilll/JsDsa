let matrix = [[1,2,3],[4,5,6],[7,8,9]]

const RotateImage = (matrix) => {
    let MatrixLength = matrix.length;

    // transpose
    for (let i = 0; i < MatrixLength; i++) {
        console.log("i =", i);
        for (let j = i + 1; j < MatrixLength; j++) {
            console.log("  j =", j);
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // reverse each row
    for (let i = 0; i < MatrixLength; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

console.log(RotateImage(matrix))

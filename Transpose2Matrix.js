let arr = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  
  let m = arr.length;
  let n = arr[0].length;
  
  let transposed = Array.from({ length: n }, () => Array(m).fill(0));
  
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          transposed[j][i] = arr[i][j];
      }
  }
  
  console.log(transposed);
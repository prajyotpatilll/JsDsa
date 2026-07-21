// incrasing order natural number
const recursionNto0 = (num) => {
      //base case
      if(num === 1){
        return console.log(num)
      }

      //self work
      console.log(num)

      //recoersive work
      recursionNto0(num-1)
}

recursionNto0(5)
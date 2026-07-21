const RecursionNum = (num) => {

    //base case
    if(num === 0){
        return console.log(num)
    }

    //recorsive work 
    RecursionNum(num-1)

    //self work 
    console.log(num)
}

RecursionNum(5)
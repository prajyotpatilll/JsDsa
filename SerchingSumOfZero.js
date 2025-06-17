// serching sum of two numbers is zero first pair

let arr = [3,4,5,6,7,1,0,-1,-2,-4,-3]

let arrSorted = arr.sort((a,b,)=> a-b)

for(let num of arrSorted){
    for(let i=1; i< arrSorted.length; i++ ){
        if(num + arrSorted[i] === 0){
            return console.log(num, arrSorted[i])
        }
        
    }
}
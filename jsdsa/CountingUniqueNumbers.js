//Count Unique Numbers 

function countuniq(arr){
    if(arr.length>0){
        let i=0;
        for(let j=1;j<arr.length;j++){
            if(arr[i]!==arr[j]){
                i++;
                arr[i]=arr[j]
            }
        }
        return console.log(i+1);
    }else{
        throw new Error("Array Is Empty")
    }
}

let arr = [1, 1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, 9]

countuniq(arr);


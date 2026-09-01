let arr = [1,2,3,4,5];

const printarray = (arr,index) =>{
    if(index === arr.length){
        return;
    }

    console.log(arr[index]);
    printarray(arr,index+1);
}        

printarray(arr,0);
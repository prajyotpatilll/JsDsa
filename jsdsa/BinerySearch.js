let arr = [1,2,3,4,5,6,7,5,6,7,8]
const binerySearch = (arr,start,end,target) => {
    if(start > end){
        return false
    }

    let mid = Math.floor(start + (end - start) / 2)
    console.log("mid:",mid)

    if(arr[mid] === target){
        return true
    }else if(target < arr[mid]){
        return binerySearch(arr,start,mid-1,target)
    }else{
        return binerySearch(arr,mid+1,end,target)
    }
}


console.log(binerySearch(arr,0,arr.length,4))
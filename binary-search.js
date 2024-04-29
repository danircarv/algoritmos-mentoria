function binarySearch(arr,l,r,x) {
    let mid = l + Math.floor((r-l)/2);

    if(r>=l){
        if (arr[mid] === x) {
            return `O Elemento ${x} está no índice ${mid}`
        }

        if (arr[mid] < x) {
            return binarySearch(arr, mid + 1, r, x)
        }

        if (arr[mid] > x) {
            return binarySearch(arr, l, mid - 1, x)
        }
    }

    return `O Elemento não está no array`
}

let arr = [0,1,2,3,4,5,9,12,45,123]

console.log(binarySearch(arr,0,arr.length-1,12))
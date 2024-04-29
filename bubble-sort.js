let arr = [11,23,45,1,3,4,56]
let swapped
for(let i = 0; i < arr.length-1; i++){
   swapped = false
   for(let j = 0; j < arr.length - i -1; j++){
       if(arr[j] > arr[j+1]){
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
          swapped = true
       }
   }

   if(!swapped){
      break
   }
}
console.log(arr);
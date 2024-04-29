function linearSearch(arr,x){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === x){
            return "Elemento está no array"
        }
    }

    return "Elemento não está no array"
}

let valores = []
for (let index = 0; index < 100000; index++) {
    valores.push(index)

}

console.log(linearSearch(valores, 100001))
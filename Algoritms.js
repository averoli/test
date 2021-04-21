const arr = [5, 3, 6, 11, 56, 36, 8, 9]

function linearSearch (arr, item){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === item){
            return i;
        }
    }
    return null
}

console.log(linearSearch(arr, 56))
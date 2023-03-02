function min(arr){
    let min = arr[0][1];
    for (let i = 1; i < arr.length; i++){
        if (arr[i][1] < min){
            min = arr[i][1];
        }
    }
    return min;
}
console.log(min([['Nick', 8], ['Bob', 10], ['Kim', 6]]));
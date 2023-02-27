// function noBoringZero(n){
//   while (n % 10 === 0 && n !== 0){
//     n = n / 10;
//   }
//   return n;
// }
// console.log(noBoringZero(95000));

function noBoringZero(n){
    let str = n + '';
    let strFinal = '';
    let i = str.length - 1;
    while (str[i] === '0'){
        i--;
    }
    for (let j = 0; j < i; j++){
        strFinal = strFinal - str[j];
    }
    return +strFinal;
}
console.log(noBoringZero(95000));

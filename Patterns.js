// function pattern(n, m){
//   let str = '';
//   for (let i = 0; i <= m; i++){
//     for (let j = 0; j < n; j++){
//       str+= '*';
//     }
//     str = (i === m) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(10, 4));

// function pattern(n, m){
//   let str = ('*'.repeat(n) + '\n').repeat(m - 1);
// //   str = str + '*'.repeat(n);
//   return str;
// }
// console.log(pattern(10, 4));

// function pattern(n){
//   let str = '';
//   for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//       str+= '*';
//     }
//     str = (i === n) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(5));

// function pattern(n){
//   let str = '';
//   for (let i = 1; i <= n; i++){
//     str= str + '*'.repeat(i);
//     str = (i === n) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(5));

// function pattern(n){
//   let str = ('*'.repeat(n) + '\n').repeat(m - 1);
// //   str = str + '*'.repeat(n);
//   return str;
// }
// console.log(pattern(5));

// function pattern(n){
//   let str = '';
//   for (let i = 1; i <= n; i++){
//     for (let j = i; j <= n; j++){
//       str+= '*';
//     }
//     str = (i === n) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(5));

// function pattern(n){
//   let str = '';
//   for (let i = n; i >= 1; i--){
//     for (let j = 1; j <= i; j++){
//       str+= '*';
//     }
//     str = (i === 1) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(5));


// function pattern(n){
//   let str = '';
//   for (let i = n; i >= 1; i--){
//       str+= '*'.repeat(i);
//     str = (i === 1) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(5));

//Triangle

// function pattern(n){
//   let str = '';
//   for (let i = 1; i <= n; i+=2){
//       str += '_'.repeat((n - i)/2) + '*'.repeat(i) + '_'.repeat((n - i)/2);
//     str = (i === n) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(7));
//
//     *
//    ***
//   *****
//  *******
//
//
//

// function pattern(n){
//   let str = '';
//   for (let i = 1; i <= n; i+=2){
//       str += ' '.repeat((n - i)/2) + '*'.repeat(i) + ' '.repeat((n - i)/2);
//     str = (i === n) ? str: str + '\n';
//   }
//   return str;
// }
// console.log(pattern(7));

// function pattern(n){
//     let str = '';
//     for (let i = 1; i <= n; i+= 2){
//         let space = '';
//         let stars = '';
//         for (let j = 1; j <= (n - i)/2; j++){
//             space = space + '_';
//         }
//         for (let j = 1; j <= i; j++){
//             stars = stars + '*';
//         }
//         str = str + space + stars + space;
//         str = (i === n) ? str : str + '\n';
//     }
//     return str;
// }
// console.log(pattern(7));

// #
// _#
// __#
// ___#
// ____#

// function pattern(n){
//   let str = '';
//   for (let i = 0; i < n; i++){
//     str = str + '_'.repeat(i) + '#';
//     str = (i === n - 1) ? str : str + '\n';
//   }
//   return str;
// }

// 1111
// 2222
// 3333
// 4444
// 5555
// function pattern(n, m){
//   let str = '';
//   for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= m; j++){
//       str = str + i;
//     }
//     str = (i === n) ? str : str + '\n';
//   }
//   return str;
// }
// console.log(pattern(4, 5));

// function pattern(n, m){
//   let str = '';
//   for (let i = 1; i <= m; i++){
//     str = str + `${i}`.repeat(n);
//     str = (i === m) ? str : str + '\n';
//   }
//  // str = str + `${m}`.repeat(n);

//   return str;
// }
// console.log(pattern(4, 5));

// "1
// 23
// 456
// 78910
// 1112131415
// function pattern(n){
//   let str = '';
//   let char = 1;
//   for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//       if (j < i) str = str + char + ' ';
//       else str = str + char;
//       char++;
//     }
//     str = (i === n) ? str : str + '\n';
//   }
//   return str;
// }
// console.log(pattern(10));

//"1 1
//1 2 2 1
//1 2 3 3 2 1
//1 2 3 4 4 3 2 1
//1 2 3 4 5 5 4 3 2 1
//1 2 3 4 5 6 6 5 4 3 2 1"
// function stairs(n){
//   let str = '';
//   for (let i = 1; i <= n; i++){
//     for (let j = 1; j <= i; j++){
//       str = str + j + ' ';
//     }
//     for (let j = i; j >= 1; j--){
//       str = (j !== 1) ? str + j + ' ': str + j;
//     }
//     str = (i !== n) ? str + '\n' : str;
//   }
//   return str;
// }
// console.log(stairs(7));

// function stairs(n){
//   let str = '';
//   let c;
//   for (let i = 1; i<= n; i++){
//     str = str + ' '.repeat(((n * 2) - (i * 2)) * 2);
//     for (let j = 1; j <= i; j++){
//     if (j >= 10) c = j - 10;
//       else c = j;
//       str = str + c + ' ';
//     }
//     for (let j = i; j >= 1; j--){
//       if (j >= 10) c = j - 10;
//       else c = j;
//       str = (j !== 1) ? str + c + ' ' : str + c;
//     }
//     str = (i !== n) ? str + '\n' : str
//   }
//   return str;
// }
// console.log(stairs(7));

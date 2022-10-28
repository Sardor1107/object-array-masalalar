// // N32 2ta sonni yig'indisi chiqaruvchi funksiya;
// const add = function (a, b) {
//     return a + b;
// }
// let c = add (49,6);
// console.log(c);


// // N33 butun sonni tub yoki tub emasligini chiqaruvchi funksiya;
// let son = +prompt("sonni kiriting");
// function func(son) {
//     let result = 0
//     for (let i = 1; i <= son; i++) {
//         if(son % i == 0) {
//             result = result + 1
//         }
//     }
//     if (result == 2) {
//         console.log("tub son");
//     }
//     else {
//         console.log("tub son emas");
//     }
// }
// func(son);

// // N41;
// let a = [12,9,0.6,101];
// let b = 3;
// let arr = []
// function func (a, b) {
//     for (let i = 0; i < a.length; i++){
//       a[i] = a[i] + b  
//       arr.push(a[i])
//     }
//     console.log(arr);
// }
// func (a,b);


// // N43;
// let a = [12, 3, 4, 6]
// let b = 0;
// function mean (a) {
//     for (let i = 0; i < a.length; i++) {
//         b = b + a[i];
//     }
//     console.log(b/a.length);
// }
// mean (a);


// // //N45;
// let a = "Sardor"
// let b = '';
// function func(a) {
//     for(i = a.length-1; i >= 0; i--) {
//      b = b + a[i];    
//     }
//     console.log(b);       
// }
// func (a)


// // N 131
// const obj = {
//     login: "vsfbsd",
//     pass: "16sef5454545"
// }
// if (obj.login.length >= 3 && obj.pass.length >= 8) {
//     console.log("Siz muvaffaqqiyatli ro'yhatdan o'tdingiz");
//     console.log(obj);
// }
// else if (obj.login.length >= 3 && obj.pass.length < 8) {
//     console.log("Parol kamida 8 belgidan iborat bo'lishi kerak");
// }
// else if (obj.login.length < 3 && obj.pass.length >= 8) {
//     console.log("Login kamida 3 belgidan iborat bo'lishi kerak");
// }
// else {
//     console.log("Parol kamida 8 belgidan iborat bo'lishi kerak.");
//     console.log("Login kamida 3 belgidan iborat bo'lishi kerak");
// }

// // N144
// let a = [0, -12, -11, 7];
// let b = []
// for(i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//         let son1 = a[i]*(-1);
//         b.push(son1);
//     }
//     else {
//         let son2 = a[i]
//         b.push(son2)
//     }
// }
// console.log(b);













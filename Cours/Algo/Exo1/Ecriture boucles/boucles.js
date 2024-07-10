// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
// let a = 0;

// for (let i = 0; i < 10; i++) {
//     if (a % 3 == 0) {
//         console.log(a + 100);
//     } else {
//         console.log(a);
//     };
//     a++;
// }

// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
let a = 0;

for (let i = 0; i < 10; i++) {
    if (a % 3 == 1) {
        console.log(a + 100);
    } else if (a % 3 == 2) {
        console.log(a + 200);
    } else {
        console.log(a);
    };
    a++;
}
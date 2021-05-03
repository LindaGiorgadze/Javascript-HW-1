// Task 1

// let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length < 5) {
//         continue
//     }
//     // console.log (arr[i])
// }

// Task 2

// let arr = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];

// for (let n = 0; n < arr.length; n++) {
//     let numbers = arr[n];
//     if (numbers >0) {
//         console.log(numbers)
//     }
// }

// Task 3

// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

// for (let i = 0; i < arr.length; i++) {
//     let innerMassive = arr[i];
//     for ( let n = 0; n < innerMassive.length; n++) {
//         let positive = innerMassive[n];
//         if (positive > 0) {
//             console.log(positive)
//         }
//     }
// }

// Task 4

// let max = 0;

// function getMax(massive) {
//     for ( let x = 0; x < massive.length; x++) {
//         let numbers = massive[x];
//         if (numbers > max) {
//             max = numbers;
//         }
//     }
//     return(max)
// }

// console.log(getMax([1, 15, 6, 30]))

// Task 5

let key1 = 'firstname';
let key2 = 'lastname';

let user = {
        firstname: 'giorgi',
        lastname: 'saakadze',
        age: 32,
        isLoggedIn: true
    }

function printName(object) {
    if(object['isLoggedIn'] == true) {
        return(object[key1]+' '+object[key2])
    }else{
        return(object['isLoggedIn'])  
    }
}

console.log(printName(user))
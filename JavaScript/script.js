// Fundamentals of JavaScript
// arrays and objects
// functions return
// async js coding




// foreach, map, filter, find, indexOf


// var arr = [1, 2, 3, 4];

// arr.forEach(function(val) {
//     console.log(val + " hello");
// })

// var newarr = arr.map(function(val) {
//     return val * 3;
// })
// console.log(newarr);

// var ans = arr.filter(function(val) {
//     if(val >= 2) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(ans);

// var answer = arr.find(function(val) {
//     if(val === 2) return val;
// })
// console.log(answer);

// arr.indexOf(12)   // returns -1 if element doesnt exist and returns index if it exists
// arr.indexOf(2)  // 1


// objects - key:value pairs


// var ob = {
//     name: "Ram"
// }
// to print any value - ob.name or ob['name']

// var obj = {
//     name: "Shreyians",
//     age: 12
// }
// can change any value using obj.age = 25 to not want any value to change use this: Object.freeze(obj);


// Async js - code


// async function abcd() {
//     var blob = await fetch(`https://randomuser.me/api`);
//     var ans = blob.json();

//     console.log(ans.results[0].name);
// }
// abcd();
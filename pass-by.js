// primitive types are passed by value

let num1 = 5;
let num2 = 15;

function multiply(a, b) {
    a = 35;
    const result = a * b;
    return result;
}
console.log(num1)
const output = multiply(num1, num2);
console.log(output);

// object and are passed by refrance
let student1 = {name: 'jalil', partner: 'barsha'}
let student2 = {name: 'raj', partner: 'porimoni'}
console.log(student1)
function makeMovie(couple1,couple2) {
    couple1.name = 'ananta';
    couple2.name = 'khall'
}
console.log(student1, student2)
makeMovie(student1, student2)
console.log(student1,student2)

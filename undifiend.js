/* 8 ways to get undifiend
1. variables that is not initialized will give undifiend
2. function with no return give undifiend
3. parameter not pass will return undifiend
4. if return has noting on the right side will return undifiend
5. property that doesnt exist will give undifiend
6. accesing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly undifiend

important! kuno kicu nai set korte caile null set korbo





*/
let first;
console.log(first);

//
function plus(a, b) {
    const total = a + b;
}

const result = plus();
console.log(result)

//
function third (a, b, c, d) {
    const sum = a + b + c + d;
   console.log(a,b,c,d)
}
third(25, 54);

//

function noNegetive(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}

const total = noNegetive(2, -5)
console.log(total)

//
const fifth = { id: 25, name: 'miraz' }
console.log(fifth.age, fifth.name);

//
const sixth = [4, 45, 78, 45, 7, 525, 55,]
// do not use this one insted of splice
// delete sixth[1]
console.log(sixth[1], sixth[5], sixth[65])

// 
const eight = undefined;

const ninght = null;

const data = { results: [], update: null };

console.log(typeof undefined)
console.log(typeof null)

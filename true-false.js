/* truthy:
1. true
2. any number (+ve, -ve)will be truthy other than 0
3. any string is truthy except empty string
4. '0', 'false'
5. empty object
6. empty array


falsy:
1. false
2. 0
3.'' empty string 
4. undifiend
5. null 

*/

// single ! hocce falsy check korar jonno
// double !! hocce truthy check korar jonno

let x =[];
console.log(x)

if (x) {
    console.log('value of x is truthy');

} else {
    console.log('value of x is falsy');
}

// optional
// check falsey

const y = null;
if (!y) {
    console.log('it is falsy')
}

// check truthy

const z = '56';
if (!!z) {
    console.log('value is truthy')
}
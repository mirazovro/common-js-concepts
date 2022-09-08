print10();
print5();
for (let i = 0; i < 5; i++){
    console.log(i)
}
console.log('outside print', i)

function print5() {
    console.log('print the', 5)
}

var print10 = function() {
    console.log('inside the print10',10)
}

// let use for block scope
// var make global scope and inturruped for long code
function sum(a, b, c) {
    console.log(arguments[4])
    const args = [...arguments]
    console.log(args)
    const result = a + b + c;
    return result;
}

const total = sum(25, 35, 48, 58, 58, 55)
console.log(total);
function calculator(a, b){
    let add = a + b
    let subtract = a - b
    let divide = a/b
    let multiply = a*b
    return ("Add: " + add) + (" Subtract: " + subtract) + (" Divide: " + divide) + (" Multiply: " + multiply)
}

console.log(calculator(2, 5))
module.exports = calculator
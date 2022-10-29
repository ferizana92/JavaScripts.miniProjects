function subNumber(num1, num2) {
    const result = num1 + num2
    alert("result:" + result)
    return result
}
const sumResult = subNumber(2, 66)
alert("sumResult:" + sumResult)
// =================

const number1 = prompt("please enter your number1!");
const number2 = prompt("please enter your number2!");
function showPower(num1, num2) {
    return num1 * num2
}
const powerResult = showPower(number1, number2)
alert("powerResult:" + powerResult)
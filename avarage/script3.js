const userThirdNumber = Number(prompt("please enter third number!"));
const userFirstNumber = Number(prompt("please enter first number!"));
const userSecondNumber = Number(prompt("please enter second number!"));

const Avarage = (userFirstNumber + userSecondNumber + userThirdNumber) / 3

alert(Avarage)
//==========avarage with function============
function avarageCalculator(num1, num2, num3) {
    const sum = num1 + num2 + num3
    const avg = sum / 3
    alert("Avarage is: " + avg)

}
avarageCalculator(5, 10, 15)
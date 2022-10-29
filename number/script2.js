const userNumber = prompt("please enter your number!");
alert(userNumber)
if (userNumber % 2 === 0) {

    alert("Your number is even.")

} else {

    alert("Your number is odd.")
}
// =========function for being even or odd===========//
function isOddorEven(number) {
    if (number % 2 === 0) {

        alert("Your number is even.")

    } else {

        alert("Your number is odd.")
    }
}
isOddorEven(119)
isOddorEven(118)
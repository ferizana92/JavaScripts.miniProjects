for (var i = 0; i < 5; i++) {
    console.log(i, "yes")
}
// =========
const username = "ferizana92"
for (var i = 0; i < username.length; i++) {
    console.log(username[i])
}
// =========price of product==========//
var allPrices = 0
for (var i = 0; i < 5; i++) {
    allPrices = allPrices + Number(prompt("Enter the product price,please!"))
}
console.log(allPrices)
alert("All price of your basket is:" + allPrices)
// ============even number==============//

for (var i = 0; i < 100; i += 2) {
    console.log(i)
}
// ============odd number==============//

for (var i = 1; i < 100; i += 2) {
    console.log(i)
}
// ===================
var userNumber = Number(prompt('enter the number.'))
var sum = 0

for (var i = 0; userNumber / 10; i++) {
    sum = sum + (userNumber % 10)
    userNumber = Math.floor(userNumber / 10)

}
console.log("sum of digits :", sum)
// =======================

var userNumber = Number(prompt('enter the number.'));
var counter = 0;
if (userNumber == 0) {
    counter = 1;
} else {
    for (var i = 0; userNumber != 10; i++) {
        counter++;
        userNumber = Math.floor(userNumber / 10);
    }
}
alert("sum of digits :" + counter);
// ============
var userFirstNumber = Number(prompt('enter the first number.', 1))
var userSecondNumber = Number(prompt('enter the second number.', 1))

var power = 1
for (i = 0; i < userSecondNumber; i++) {
    power = power + userFirstNumber
}
alert("power:" + power)
// ============
var userFirstNumber = Number(prompt('enter the first number.', 1))
var userSecondNumber = Number(prompt('enter the second number.', 1))

var power = 1
var i = 1
do {
}
while (i < userSecondNumber)
alert("power:" + power)
// ============
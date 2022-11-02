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
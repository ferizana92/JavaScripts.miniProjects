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
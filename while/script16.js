// var y = 0
// while ( i <100) {
//     console.log(y)
//     i++;
// }
// // ============
// var userNumber=null
// var i=0
// var sum=0
// while(i<3){
//     userNumber=Number(prompt("yes"))
//     sum+= userNumber
//     i++
// }
// alert("average:"+sum/3)
// ==========
var userNumber = Number(prompt('enter the number.'));
var sum = 0
var counter = 0

while (userNumber / 10 != 0) {
    sum = sum + (userNumber % 10)
    counter++
    userNumber = Math.floor(userNumber / 10);
}

alert("sum of digits :" + sum + "\n\n" + "sum of digits :" + counter);
// =============
var userFirstNumber = Number(prompt('enter the number.'));
var userFirstNumber = Number(prompt('enter the number2.'));
if (userFirstNumber % 2 === 0) {
    while (userFirstNumber < userFirstNumber) {
        console.log(userFirstNumber)
        userFirstNumber += 2
    }

} else {
    userFirstNumber++
    while (userFirstNumber < userFirstNumber) {
        console.log(userFirstNumber)
        userFirstNumber += 2
    }
}
alert("sum of digits :" + sum + "\n\n" + "sum of digits :" + counter);
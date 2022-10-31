const username = prompt("please enter your name!");
const password = prompt("please enter your password!");

if (username.length < 3 || password.length < 3) {
    alert("username & password should have at least 3 character!")
} else {
    alert("successful registration!")
}
// =============
if (username.toLowerCase() == "ali") {
    alert("correct!")
} else {
    alert("wrong name!")
}
const userAge = prompt("please enter your age!", 0);

if (userAge < 18) {
    alert("you can not enter the site!")
} else {
    alert("please register!")
}
// ==========

const userBirthday = prompt("please enter your birthday!", 0);
const realAge = 1401 - userBirthday
if (isNaN(realAge)) {
    alert("birthday is not valid!")

} else {

    alert("your age is:" + realAge)
}

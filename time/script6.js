const minutes = prompt("Please enter the time in minutes:")
const minute2hour = minutes / 60

if (isNaN(minute2hour)) {
    alert("This number is not valid!")
} else {
    alert(minute2hour + "hours")
}
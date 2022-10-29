const num1 = 3
const num2 = 4

const num3 = num1 * num2
switch (num3) {
    case 10:
        alert("a!");
        break;
    case 11:
        alert("b!");
        break;
    case 12:
        alert("c!");
        break;
    case 13:
        alert("d!");
        break;
    default:
        // (else)
        alert("non of them!");

}
// =========================Practice with switch/Case
const userScore = prompt("please enter your score!");
switch (userScore) {
    case "18":
    case "19":
    case "20":
        alert("A!");
        break;
    case "16":
    case "17":
        alert("B!");
        break;
    case "14":
    case "15":
        alert("C!");
        break;
    case "12":
    case "13":
        alert("D!");
        break;
    default:
        alert("You are failed!");
}
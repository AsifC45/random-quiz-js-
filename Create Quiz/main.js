// Quiz
let sq1 = "Asif";
let sq12 = "asif";
let sq2 = "12";
let sq3 = "green";
let sq32 = "Green";
let sq4 = "canada";
let sq42 = "Canada";
let yourmark = "0";

// Add Event listener
document.getElementById("mark").addEventListener("click", quiz)

// Event Function
function quiz() {

    let ans1 = document.getElementById("ans1").value;
    if (sq1 == ans1 || ans1 == sq12) {
        document.getElementById("color1").className = "correct";
        document.getElementById("yesno1").innerHTML = " Correct";
        var a = 1;
    } else {
        document.getElementById("color1").className = "wrong";
        document.getElementById("yesno1").innerHTML = " Incorrect";
        document.getElementById("instead1").innerHTML = " The correct answer is: <strong> Asif </strong>";
        var a = 0;
    }

    let ans2 = document.getElementById("ans2").value;
    if (sq2 == ans2) {
        document.getElementById("color2").className = "correct";
        document.getElementById("yesno2").innerHTML = " Correct";
        var b = 1;
    } else {
        document.getElementById("color2").className = "wrong";
        document.getElementById("yesno2").innerHTML = " Incorrect";
        document.getElementById("instead2").innerHTML = " The correct answer is:<strong> 12 </strong>";
        var b = 0;
    }

    let ans3 = document.getElementById("ans3").value;
    if (sq3 == ans3 || ans3 == sq32) {
        document.getElementById("color3").className = "correct";
        document.getElementById("yesno3").innerHTML = " Correct";
        var c = 1;
    } else {
        document.getElementById("color3").className = "wrong";
        document.getElementById("yesno3").innerHTML = " Incorrect";
        document.getElementById("instead3").innerHTML = " The correct answer is: <strong> green </strong>";
        var c = 0;
    }

    let ans4 = document.getElementById("ans4").value;
    if (sq4 == ans4 || ans4 == sq42) {
        document.getElementById("color4").className = "correct";
        document.getElementById("yesno4").innerHTML = " Correct";
        var d = 1;
    } else {
        document.getElementById("color4").className = "wrong";
        document.getElementById("yesno4").innerHTML = " Incorrect";
        document.getElementById("instead4").innerHTML = " The correct answer is:<strong> canada </strong>";
        var d = 0;
    }

    document.getElementById("asif").innerHTML;
    document.getElementById("green").innerHTML;
    document.getElementById("42").innerHTML;
    document.getElementById("canada").innerHTML;

    let rt = Number(a + b + c + d);
    let vt = Number((rt / 4) * 100)
    document.getElementById("yourmark").innerHTML = "Your final score is " + rt + " / 4 (" + vt + "%).";

    if (vt == 0) {
        document.getElementById("msg").innerHTML = "Good try! Better luck next time!";
    } else if (vt == 25) {
        document.getElementById("msg").innerHTML = "Not bad!";
    } else if (vt == 50) {
        document.getElementById("msg").innerHTML = "Well done!";
    } else if (vt == 75) {
        document.getElementById("msg").innerHTML = "Good Job!";
    } else {
        document.getElementById("msg").innerHTML = "Excellent!";
    }
}
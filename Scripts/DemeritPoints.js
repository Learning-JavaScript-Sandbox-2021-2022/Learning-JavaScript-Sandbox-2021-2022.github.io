document.getElementById("inputButton").addEventListener("click", speedFunction)

function speedFunction() {

let answerInuput = document.getElementById("speed").value;

if (answerInuput >= 130){
  document.getElementById("answer").innerHTML = "Your Lisence is Suspended";
} else if (answerInuput >= 125){
  document.getElementById("answer").innerHTML = "11 Demerit Points";
} else if (answerInuput >= 120){
  document.getElementById("answer").innerHTML = "10 Demerit Points"
} else if (answerInuput >= 115){
  document.getElementById("answer").innerHTML = "9 Demerit Points"
} else if (answerInuput >= 110){
  document.getElementById("answer").innerHTML = "8 Demerit Points"
} else if (answerInuput >= 105){
  document.getElementById("answer").innerHTML = "7 Demerit Points"
} else if (answerInuput >= 100){
  document.getElementById("answer").innerHTML = "6 Demerit Points"
} else if (answerInuput >= 95){
  document.getElementById("answer").innerHTML = "5 Demerit Points"
} else if (answerInuput >= 90){
  document.getElementById("answer").innerHTML = "4 Demerit Points"
} else if (answerInuput >= 85){
  document.getElementById("answer").innerHTML = "3 Demerit Points"
} else if (answerInuput >= 80){
  document.getElementById("answer").innerHTML = "2 Demerit Points"
} else if (answerInuput >= 75){
  document.getElementById("answer").innerHTML = "1 Demerit Point"
} else if (answerInuput >= 71){
  document.getElementById("answer").innerHTML = "No Demerit Points yet"
} else if (answerInuput == 70){
  document.getElementById("answer").innerHTML = "Your going the speed limit!"
} else {
  document.getElementById("answer").innerHTML = "Following the law!"
}

}

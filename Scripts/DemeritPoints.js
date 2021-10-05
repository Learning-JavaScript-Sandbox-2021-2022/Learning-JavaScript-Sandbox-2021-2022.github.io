document.getElementById("inputButton").addEventListener("click", speedFunction)

function speedFunction() {

if (speed >= 130){
  document.getElementById("answer").innerHTML = "Your Lisence is Suspended";
} else if (speed >= 125){
  document.getElementById("answer").innerHTML = "11 Demerit Points";
} else if (speed >= 120){
  document.getElementById("answer").innerHTML = "10 Demerit Points"
} else if (speed >= 115){
  document.getElementById("answer").innerHTML = "9 Demerit Points"
} else if (speed >= 110){
  document.getElementById("answer").innerHTML = "8 Demerit Points"
} else if (speed >= 105){
  document.getElementById("answer").innerHTML = "7 Demerit Points"
} else if (speed >= 100){
  document.getElementById("answer").innerHTML = "6 Demerit Points"
} else if (speed >= 95){
  document.getElementById("answer").innerHTML = "5 Demerit Points"
} else if (speed >= 90){
  document.getElementById("answer").innerHTML = "4 Demerit Points"
} else if (speed >= 85){
  document.getElementById("answer").innerHTML = "3 Demerit Points"
} else if (speed >= 80){
  document.getElementById("answer").innerHTML = "2 Demerit Points"
} else if (speed >= 75){
  document.getElementById("answer").innerHTML = "1 Demerit Point"
} else if (speed <= 74){
  document.getElementById("answer").innerHTML = "No Demerit Points"
} else {
  console.log("Drive Safe!");
}





}

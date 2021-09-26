let stop = false; //Boolean for testNaN() validation function, see end of file

function javascript () { //Where colsole.log tested file goes
  console.log("You made it to the Max_ofTwoNumbers.js!");
}
//
function solution (number1, number2) {
  if ( number1 == number2 ) return "equal";
  console.log("Did it run");
  //return ( number1 > number2 ) ? "Number 2 is larger" : "Number 1 is larger"; //ternary operator example
  if (number1 > number2) {
    return "Number 1 is larger";
  } else {
    return "Number 2 is larger";
  }
  //Two ways of writing IF with return
}// End solution
//
//Main Function, necessary lines of code
function main() {
  let firstNumber, secondNumber; //Variables particular to JavsScript Assignment
  //Get the value of the Heighth Input Field, id="testfield1", assign it to a variable
  firstNumber = document.getElementById("textField1").value;
  secondNumber = document.getElementById("textField2").value;
  //Validate by alert or HTML Text in p-tag
  document.getElementById("validityTest1").innerHTML = alert (testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);
  document.getElementById("validityTest2").innerHTML = alert (testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);
  if (stop == true) {
      document.getElementById("answer").innerHTML = "Restart because I said so."; //Change to more appropriate message
    } else {
      //Difference between calling functions with arguements and sending to parameter's, local variables
      console.log("What did you say?", solution (firstNumber, secondNumber)); // Change to more appropriate message
      document.getElementById("answer").innerHTML = "What did you say? " + solution (firstNumber, secondNumber);
    }
} //End main()
//
function testNaN (number) {
  if ( isNaN (number) ) { //NaN are not values o REAL Number System

    stop = true;
    return "Type a Real Number";
  } else {
    return "Input Validated";
  }
//

}//End testNaN()

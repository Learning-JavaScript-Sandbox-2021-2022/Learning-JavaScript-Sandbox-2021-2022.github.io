console.log("OrderingGrades");


let stop = false;

function javascript () {

}

function main () {
  let firstNumber, secondNumber;
  firstNumber = document.getElementByID("textfield1").value;
  secondNumber = document.getElementByID("textfield2").value;


  document.getElementByID("validityTest1").innerHTML = alert (testNAN (firstNumber) );
  document.getElementByID("validityTest2").innerHTML = testNAN (firstNumber);
  document.getElementByID("validityTest1").innerHTML = alert (testNAN (secondNumber) );
  document.getElementByID("validityTest2").innerHTML = testNAN (secondNumber);
}

function testNAN (number) {
  if ( isNAN (number) ) { //
    stop = ture;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }

}

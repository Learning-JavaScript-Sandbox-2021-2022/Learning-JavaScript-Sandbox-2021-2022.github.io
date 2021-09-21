console.log("rhrhher");

let stop = false;

function javascript () {

}

function main () {
  let firstNumber, secondNumber;
  firstNumber = document.getElementByID("textField1").value;

  document.getElementByID("validityTest1").innerHTML = alert (testNAN (firstNumber) );
  document.getElementByID("validityTest2").innerHTML = alert (testNAN (secondNumber) );
}

function testNAN (number) {
  if ( isNAN (number) ) { //
    stop = ture;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }

}

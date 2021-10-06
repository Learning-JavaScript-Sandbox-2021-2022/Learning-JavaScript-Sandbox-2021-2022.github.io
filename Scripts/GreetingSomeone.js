document.getElementById("inputButton").addEventListener("click", timeFunction)

function timeFunction () {

  var d = new Date();
  var time = d.getHours();

  if (time < 12) {
    document.write("<b>Good morning!</b>");
  }
  if (time > 12) {
    document.write("<b>Good afternoon!</b>");
  }
  if (time == 12) {
    document.write("<b>Go eat lunch!</b>");
  }




}

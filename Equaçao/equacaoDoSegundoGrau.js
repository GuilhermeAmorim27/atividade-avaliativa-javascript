
function raiz() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var c = parseFloat(document.getElementById("num3").value);
  document.getElementById('resposta')

  var delta = (b * b) - 4 * a * c;

  if (delta > 0) {
    raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    document.getElementById('resposta').innerHTML = " Delta: " + delta + "<br/>" + "Raiz 1: " + raiz1 + "<br/>" + "Raiz 2: " + raiz2;
  } else if (delta == 0) {
    raiz0 = (-b + Math.sqrt(delta)) / (2 * a);
    document.getElementById('resposta').innerHTML = "Delta: " + delta + "<br/>" + "Raiz dupla: " + raiz0;
  } else {
    document.getElementById('resposta').innerHTML = "Delta: " + delta + "</br>" + "Nao há raizes reais."
  }
}


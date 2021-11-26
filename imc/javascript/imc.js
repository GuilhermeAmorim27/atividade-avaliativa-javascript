function calcularImc() {

    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    var imc = peso / (altura * altura);
     resposta = "IMC: " + (imc).toFixed(2) + "<br>";

    if (imc < 17) {
        resposta += "Muito abaixo do peso"
    } else if (imc < 18) {
        resposta += "Abaixo do peso"
    } else if (imc < 25) {
        resposta += "Peso normal"
    } else if (imc < 30) {
        resposta += "Acima do peso"
    } else if (imc < 35) {
        resposta += "Obesidade I"
    } else if (imc < 40) {
        resposta += "Obesidade II (severa)"
    } else {
        resposta += "Obesidade III (morbida)"
    }

    document.getElementById("resultado").innerHTML = resposta;


}
function calculatorIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value.replace(",", ".");
    var name = document.getElementById('name').value;

    var valor = weight / (height * height);
    if (valor < 5) {
        valor *= 10000;
    }

    if (valor < 18.49) {
        var res = "Abaixo do peso ";
    } else if (valor > 18.50 && valor < 25.55) {
        var res = "Peso ideal";
    } else if (valor > 25.55) {
        var res = "Acima do peso "
    } else {
        document.getElementById('result').innerHTML = "Valor invalido!";
        return

    }

    document.getElementById('result').innerHTML = `Oi ${name}, seu IMC ${valor} <br> ${res}`;


}
function somar() {
    var num1 = Number(document.getElementById("minimo").value);
    var num2 = Number(document.getElementById("maximo").value);
    var contador = 1;
    var acumulador = 0;

    while (num1 <= num2) {
        acumulador=acumulador+num1;
        num1++
    }
alert(acumulador)

}

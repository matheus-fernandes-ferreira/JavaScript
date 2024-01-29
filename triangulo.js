function testarTriangulo() {
    var lado1 = Number(document.getElementById("lado1").value);
    var lado2 = Number(document.getElementById("lado2").value);
    var lado3 = Number(document.getElementById("lado3").value);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {

        if (lado1 == lado2 && lado1 == lado3) {
            alert("Triangulo equilátero " + lado1 + lado2 + lado3);
        }
        else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            alert("Triangulo isóceles " + lado1 + lado2 + lado3);
        }
        else {
            alert("Triangulo escaleno " + lado1 + lado2 + lado3);
        }
    }
    else {
        alert("Não é um triângulo");
    }
}

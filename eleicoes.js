function avaliar() {
    var totalEleitores = Number(document.getElementById("totalEleitores").value);
    var totalBrancos = Number(document.getElementById("VotosBrancos").value);
    var totalNulos = Number(document.getElementById("votosNulos").value);
    var totalValidos = Number(document.getElementById("votosValidos").value);

    if (totalEleitores == (totalBrancos + totalNulos + totalValidos)) {
        var porcBrancos = (totalBrancos / totalEleitores) * 100;
        var porcNulos = (totalNulos / totalEleitores) * 100;
        var porcValidos = (totalValidos / totalEleitores) * 100;

        alert(" % Votos Brancos " + porcBrancos + "% Votos nulos " + porcNulos + "% Votos validos " + porcValidos)
    }
    else {
    alert("Fraude")

    }
}
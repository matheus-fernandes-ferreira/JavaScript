//60162787006
function validarCPF() {
    var cpf = document.getElementById("CPF").value;
    var cpfNumerico = [];
    var tamanho = 9;

    for (let i = 0; i < tamanho; i++) {
        cpfNumerico[i] = Number(cpf[i]);
    }
    cpfNumerico.push(calculoDigitoVerificador(cpfNumerico, 10))
    cpfNumerico.push(calculoDigitoVerificador(cpfNumerico, 11))

    document.getElementById("resultado").innerHTML = cpfNumerico.join('');
}

function calculoDigitoVerificador(cpfNumerico, posicao) {
    let contador = 0;
    var acumuldaor = 0;
    let digitoVerificador = 0;
    var posicao;

    while (contador < cpfNumerico.length) {
        acumuldaor = acumuldaor + (cpfNumerico[contador] * posicao);
        contador += 1;
        posicao -= 1;
    }
    var resto = acumuldaor % 11;
    return resto < 2 ? 0 : 11 - resto;

}
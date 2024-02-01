function asteriscos(tamanho, repeticao) {
    var tamanho = 5;
    var numero = 10;
    for (var repeticao = 1; repeticao <= numero; repeticao++) {
        for (var index = 1; index <= tamanho; index++) {
            var linha = "";
            for (var jj = 1; jj <= index; jj++) {
                linha += '*';
            }
            console.log(linha)
        }
    }
}

asteriscos(5, 10)
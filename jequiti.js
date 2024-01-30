function jequiti(params) {
    var vetorPalavra = ['a', 'm', 'o', 'e', 'b', 'a'];
    var tamanhoPalavra = vetorPalavra.length;
    var letras = [];

    for (i = 0; i < tamanhoPalavra; i += 1) {
        letras[i] = "_";
    }
    alert(letras)

    var entrada = [];
    while (letras != vetorPalavra) {
        for (index = 0; index < tamanhoPalavra; index++) {
            entrada = prompt('digite uma letra')
            if (entrada == vetorPalavra(index)) {
                letras(index) = entrada;
                alert(letras)
            }else{
                alert(letras)
            }
        }
    }
}


console.log(letras);

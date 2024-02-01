var notas = [
    [['Alan'], [8], [5.5], [3.2], [3.5]],
    [['Alex'], [7], [6.5], [10], [0]],
    [['Alisson'], [2], [1.5], [8], [0]],
    [['David'], [5], [7], [8], [9]],
    [['Daniel'], [10], [10], [0], [5]]
];

//pegue o numero de notas 1
//calcular a soma das notas 2
//calcule a média 3 = 2/1

function numeroNotas(notas) {
    var numNotas = 0;
    for (var ii = 1; ii < notas.length; ii++) {
        numNotas += 1
    }
    return numNotas;
}
numeroNotas(notas)

//var media = 0;
for (var linhas = 0.; linhas < notas.length; linhas++) {
    soma=0;
    for (var index = 1; index < notas[linhas][1].length; index++) {
        soma = soma + notas[linhas][index];
    }
   // console.log('numero de ntoas' + index)
  //media[linhas]=Math.floor(soma/numeroNotas(notas));
  console.log(soma);
}


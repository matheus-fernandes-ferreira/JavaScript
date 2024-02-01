var notas = [
    [['Aluno1'], [7, 8, 10]],
    [['Aluno2'], [4, 6, 7]],
    [['Aluno3'], [8, 0, 4]]
]

var soma = 0;
var quantidadeNotas = notas[0][1].length;
var media=[];

for (var ii = 0; ii < notas.length; ii++) {
    soma=0;
    for (var index = 0; index < notas[ii][1].length; index++) {
        soma = soma + notas[ii][1][index];
    }
  media[ii]=Math.floor(soma/notas[0][1].length);
  console.log(media);
}

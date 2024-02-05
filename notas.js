var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]

];

function quantidadeNotas(matriz){
    return matriz[0].length -1;
}

var numeroNotas = quantidadeNotas(notas)
console.log("São " + numeroNotas + " notas")

function quantidadeAlunos(matriz, listarNomes){
    //Função para retornar a quantidade de alunos.
    //Opcionalmente, é possível retornar a lista com os nomes dos alunos usando como entrada a mtriz e o valor1 no segundo argumento. Se o segundo argumento não for informado, a função retornará apenas o número de alunos.
    numeroAlunos = matriz.length;
    console.log("São " + numeroAlunos + " alunos")

    if (listarNomes == 1){
        var nomes = [];
        for (var ii = 0; ii < matriz.length; ii+=1){
            nomes = matriz[ii][0][0];
        }
        console.log(nomes)

    }
}

quantidadeAlunos(notas, 1)

//console.log("São " + quantidadeAlunos(notas,1) + " alunos")
/*
function somarNotas(matriz){
    for (index = 0; index < quantidadeAlunos(notas); index+=1){
        var soma =0;
        for (kk = 1; kk < quantidadeNotas(matriz); kk+=1){
            soma = soma + Number(matriz[index][kk]);
        }
       var totalSoma = soma[index];
    }
    return totalSoma;
}
console.log(somarNotas(notas))*/
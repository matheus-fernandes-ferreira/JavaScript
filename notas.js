var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]
];

/* ====================================*/

function quantidadeNotas(matriz){
    return matriz[0].length -1;
}

var numeroNotas = quantidadeNotas(notas)
//console.log("São " + numeroNotas + " notas")

/* ====================================*/

function quantidadeAlunos(matriz, listarNomes){
    //Função para retornar a quantidade de alunos.
    //Opcionalmente, é possível retornar a lista com os nomes dos alunos usando como entrada a mtriz e o valor1 no segundo argumento. Se o segundo argumento não for informado, a função retornará apenas o número de alunos.

   // console.log("São " + numeroAlunos + "alunos")
    if (listarNomes == 1){
        var nomes = [];
        for (let ii = 0; ii < matriz.length; ii+=1){
           nomes[ii] = matriz[ii][0][0];
        }
        /*A função produz dois resultados
        O primeiro é o numero de alunos
        o segundo é os nomes dos alunos
        Os dois podem ser recuperados para usar posteriormente se necessário atravez do vetor resultado  */
    var resultado = [numeroAlunos, nomes];
    return resultado
   console.log(nomes)
    }else{
            var numeroAlunos = matriz.length;
            return numeroAlunos;
    }
}
//console.log(quantidadeAlunos(notas, 1)[1])   //o '[1' refere-se ao indice 1 do vetor resultado que afunção retorna

/* ====================================*/

//Função para retornar o vetor com a soma de todas as notas de cada aluno
function somarNotas(matriz){
    var totalSoma=[];
    for (let index = 0; index < quantidadeAlunos(matriz); index+=1){ //percorre o numero de alunos
        var soma =0;
        for (let kk = 1; kk <= quantidadeNotas(matriz); kk+=1){  //percore o numero de notas
            soma = soma + matriz[index][kk][0];
        }
       // console.log(soma)
        totalSoma[index] = soma;
    }
   //console.log(totalSoma)
    return totalSoma;
}
//console.log(somarNotas(notas))

/* ====================================*/

//Função para retornar o vator com as médias de cada aluno

function media(matriz){
    var media = [];
    for (let ii = 0; ii < quantidadeAlunos(matriz); ii+=1){
    media[ii] = (somarNotas(notas)[ii])/quantidadeNotas(notas);
    //console.log(media)
    }
    return media;
}
//console.log(media(notas))

/* ====================================*/

//RELATÓRIO

for (let ii = 0; ii < quantidadeAlunos(notas); ii+=1){
    console.log((quantidadeAlunos(notas,1)[1])[ii] + " --> Soma das notas = " + (somarNotas(notas)[ii]) + " Média = " + (media(notas))[ii])
}

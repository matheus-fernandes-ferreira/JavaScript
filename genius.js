var sequencia = [];
var jogadorSequencia = [];
var pontuacao = 0;
var nivel = 0;
var velocidade = 1000; //milisegundos
/*
while (true){
    for(var i = 0; i < 10; i++){
        console.log(i)
        if (i ==4){
                return false
        }
    }
}
*/

//Main
iniciarJogo()
while (true){
    rodada()
    if (resultado = false){
        finDeJogo()
    }else{
        pontuacao+=1;
        nivel+=1;
    }
}

function rodada(){
    sequencia = gerarSequencia(nivel);
    exibirSequencia(sequencia)
    jogadorSequencia = jogada()
    resultado = verificarJogada(jogadorSequencia, sequencia)
}
  var numeroCor;
function gerarSequencia(nivel) {
  const sequencia = [];
  for (let i = 0; i < nivel; i+=1) {
    numeroCor = gerarNumeroCorAleatorio();
    sequencia.push(numeroCor);
  }
  return sequencia;
}

function lerJogada(){
    var jogadorSequencia = [];
}


function iniciarJogo(){
    pontuacao = 0;
    nivel = 1;
    valocidade = 1000; //ms
}

function gerarNumeroCorAleatorio(){
    let min = 1, max = 4;
    var sNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("o numero da rodada" + sNumero)
    return sNumero;
}

function exibirSequencia(sequencia){
    for (let i =0; i < sequencia; i+=1){
        console.log(numeroCor )
    }
}

function jogada(){
    jogadorSequencia = [1,2]
}
function verificarJogada(){
    if (jogadorSequencia.length != sequencia.length){
        return false
    }
    for (let i = 0; i < sequencia.length; i+=1){
        if (jogadorSequencia[i] != sequencia[i])
        return false
    }
    return true
}



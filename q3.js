function converterParaFahrenheit(){
    //recebe valores do input do html
    var temperaturaCelsius = Number(document.getElementById("temperaturaCelsius").value);

    //conversão
    var temperaturaFahrenheit = (temperaturaCelsius * 1.8 + 32);
   alert(temperaturaFahrenheit)
}

function converterParaCelsius(){
    //recebe valores do input do html
    var Fahrenheit = Number(document.getElementById("temperaturaFahrenheit").value);

    //conversão
    var Celsius = (Fahrenheit -32)/1.8;
    alert(Celsius)
}
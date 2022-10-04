const formulario = document.querySelector("#formulario");
const resultado = document.querySelector(".result");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");

    peso = Number(peso.value);
    altura = Number(altura.value);

    let imc = peso / (altura * altura);
    let resultImc;

    if (imc <= 18.5) {
        resultImc = "Abaixo do peso";

    } else if (imc > 18.5 && imc <= 24.9 ) {
        resultImc = "Peso normal";

    } else if (imc >= 25 && imc <= 29.9) {
        resultImc = "Sobrepeso";
        
    } else if (imc >= 30 && imc <= 34.9) {
        resultImc = "Obesidade grau 1";
         
    } else if (imc >= 35 && imc <= 39.9) {
        resultImc = "Obesidade grau 2";
         
    } else if (imc > 40) {
        resultImc = "Obesidade grau 3";
         
    }

    resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} e você está ${resultImc}`;
    
});
// // as funcitions padrões tem um parâmentro padrão, chamado arguments, que pode receber n parametros

// function funcao() {
//     let total =0;
//     for(let argument of arguments ) {
//         total += argument;
//     }
//     console.log(total);
// }

// funcao(15, 5, 65);

const conta = (operador, acumulador, ...numeros) => {
    // console.log(arguments);
    console.log(operador, acumulador, numeros)

    for (const numero of numeros) {
        if (operador === "+") acumulador += numero;
        if (operador === "-") acumulador -= numero;
        if (operador === "/") acumulador /= numero;
        if (operador === "*") acumulador *= numero;

        console.log(acumulador);
 
    }

}

conta("*", 0, 50, 60, 30, 80, 90);
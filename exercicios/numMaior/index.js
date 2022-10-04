function maiorNumero (num1 = 0, num2 = 0) {
    return num1 > num2 ? `O número ${num1} é maior` : `O núemro ${num2} é maior`;

}

const maiorNumero2 = (num1, num2) => num1 > num2 ? `O número ${num1} é maior` : `O núemro ${num2} é maior`;


console.log(maiorNumero(1, 5));
console.log(maiorNumero2(7, 3));


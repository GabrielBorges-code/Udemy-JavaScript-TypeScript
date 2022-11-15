// filter e map -> retorna a quantidade de elementos ou menos.
// filter, map, reduce -> são as funções mais importantes de array

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const novoNumero = [];



const novoNumeroFilter = numeros.filter(value => value > 10)

// console.log(novoNumeroFilter)

numeros.forEach(numero => {
    if(numero > 10) novoNumero.push(numero);
})

// console.log(novoNumero)

const pessoas = [
    { nome: 'Luiz', idade: 62},
    { nome: 'Maria', idade: 23},
    { nome: 'Eduardo', idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47}
]
// Retorne as pessoas que tem o nome com 5 letra ou mais

const pessoas5Letras = pessoas.filter(value => {
    return value.nome.length > 5;
});

// console.log("pessoas com mais de 5 letras ", pessoas5Letras)

// Retorne as pessoas com mais de 50 anos
const pessoasMais50 = pessoas.filter(value => {
    return value.idade > 50;
});

// console.log("pessoas com mais de 50 anos ", pessoasMais50)

// Retorne as pessoas nome termina com a
const pessoasTerminaA = pessoas.filter(value => {
    return value.nome.toLocaleLowerCase().endsWith('a')
})

console.log(pessoasTerminaA)
// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro de valores (map)

// Reduce reduz um array a um único elemento

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valorAtual, indice, array) => {
  // console.log(acumulador, valorAtual, indice);
  // acumulador += valorAtual;
  if (valorAtual % 2 === 0) acumulador.push(valorAtual);
  // acumulador.push(valorAtual * 2);

  return acumulador;
}, []); // valor inicial do acumulador. Opcional.

// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Luiz", idade: 61 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valorAtual) => {
    if(acumulador.idade > valorAtual.idade) return acumulador;

    return valorAtual;

});

console.log(maisVelha);
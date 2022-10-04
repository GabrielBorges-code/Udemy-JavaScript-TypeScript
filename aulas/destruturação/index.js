// ... operador resto ou espalhamento
// const numeros = ["O", "Brasil", "é", "um", "país", "tropical", "14", 10, 9];

// const [primeiro, segundo, , , quinto, ...resto] = numeros;

// console.log(primeiro, segundo, quinto);
// console.log(...resto);

// const numeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const [, [, , seis]] = numeros;

// console.log(seis)

const pessoas = {
  nome: "Gabriel",
  sobrenome: "Borges",
  idade: 24,
  endereco: {
    rua: "Av Brasil",
    numero: 3,
  },
};

const { nome, sobrenome: sob, endereco: { rua }, endereco: endCompleto, ...resto } = pessoas;

console.log(nome, sob, endCompleto, rua);

console.log(resto);

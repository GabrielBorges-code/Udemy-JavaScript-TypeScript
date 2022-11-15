// filter e map -> retorna a quantidade de elementos ou menos.
// filter, map, reduce -> são as funções mais importantes de array

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const novoNumero = [];

const numerosEmDobro = numeros.map((num) => num * 2);

console.log(numerosEmDobro);

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

// Atividade 2
const apenasNome = pessoas.map((pessoa) => {
  return pessoa.nome;
});

console.log(apenasNome);

// Atividade 2
const idade = pessoas.map((pessoa) => {  
    return { idade: pessoa.idade } 
});

console.log(idade);

// Atividade 3 
//map está alterando direntamente o array original
const idObjeto = pessoas.map((pessoa, id) => {
  pessoa.id = id;
  return pessoa;
});

console.log(idObjeto);

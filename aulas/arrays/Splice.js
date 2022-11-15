//                -5      -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];

console.log("Array ", nomes);

//remove os itens e retornar um array, já que pode excluir mais de um valor
// const removidos = nomes.splice(3, 2)

// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// console.log("Removidos ", removidos);

// push
nomes.splice(nomes.length, 0, "Teste", "Otavio", "Miranda");

// unshift
nomes.splice(0, 0, "Pneu", "Queimado", "Jota");


console.log("Array modificado ", nomes);

// console.log(Number.MAX_VALUE)
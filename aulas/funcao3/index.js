function soma(a, b) {
    return a + b // com retorno
}

let s1 = soma(5, 5);

function soma2(a, b) {
    console.log(a+b) // sem retorno
}

soma2(15, 5);

console.log(s1)

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criaPessoa("Luiz", "Otávio");
const p2 = {
    nome: "Gabriel",
    sobrenome: "Borges"
};

console.log(p1, typeof p1);
console.log(p2, typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase("Olá");

console.log(olaMundo("mundo"));



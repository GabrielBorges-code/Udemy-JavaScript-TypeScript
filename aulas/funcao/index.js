falaOi();

//Function Hoisting, ela eleva a função para cima do escopo
function falaOi() {
    console.log("Oi");
}

// funções são objetos de primeira classe, posso tratar a função como dado
const nome = function () {
    console.log("Gabriel");
}

// console.log(nome)

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(nome);

// Arrow Function

const arrow = () => {
    console.log("Sou uma função arrow");
}

arrow();

// Passando function dentro do objeto
const obj = {
    falar: function() {
        console.log("Estou falando...");
    }
}

obj.falar();
 
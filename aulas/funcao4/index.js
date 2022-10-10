function retornaFuncao(name) {
    // const name = "Gabriel";
    return function() {
        return name;
    }
}

const funcao = retornaFuncao("fasdfasdf");

console.dir(funcao);
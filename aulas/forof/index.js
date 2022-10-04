const nome = ["Gabriel", "B", "Moura"];

console.log("\n### For normal ###\n");
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

console.log("\n### For in ###\n");
for(let i in nome){
    console.log(nome[i])
}

console.log("\n### For of ###\n");
for(let valor of nome){
    console.log(valor)
}

console.log("\n### For each ###\n");
nome.forEach((element, indice) => {
    console.log(indice, element)
});

const pessoas = {
    nome: "Luiz",
    sobrenome: "Sousa"
}


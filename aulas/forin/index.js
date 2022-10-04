const pessoas = {
    nome: "Gabriel",
    sobrenome: "Otávio",
    idade: 35
}

console.log(pessoas["sobrenome"])

for (let i in pessoas) {
    console.log(i, pessoas[i])
}
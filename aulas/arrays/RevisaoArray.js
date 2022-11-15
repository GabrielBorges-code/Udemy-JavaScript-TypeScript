const nomes1 = ["Gabriel", "Maria", "Bruna"];

// console.log(nomes1);

// remove o ittem do array, sem modificar o tamanho do array
delete nomes1[1];

// console.log(nomes1);

//Criando array com contrutor, tem a mesmmas propriedades do convencional
const nomes2 = new Array("Eduardo", "Monica", "Jose");

// console.log(nomes2);

const novo = nomes2;

//Essa ação faz com que os valores sejam removidos em ambos arrays, pois apontam pro mesmo local na memoria
novo.pop();

// console.log(nomes2)

// console.log(novo)

const nomes3 = new Array("Jose", "Eduardo", "Monica");

const novo3 = [...nomes3];

//Usando o spread, é feito uma copia do array para o 'novo'.
novo3.pop();

// console.log(nomes3);

// console.log(novo3);

const outro = ["Joana", "Pedro", "Abgail"];

// remove o último item do array e retornar o valor dele
const removido = outro.pop();

// console.log(outro);

// console.log(removido);

const outro2 = ["Joana", "Pedro", "Abgail"];

// Remove o primeiro item do array
const removido2 = outro2.shift();

// console.log(outro2);

// console.log(removido2);

//Adiciona ao final do array
outro2.push("Wallace", "JOão")

//Adiciona ao começo do array
outro2.unshift("Beatriz", "Mariana");

// console.log(outro2)

const outroArray = outro2.slice(0, 3);

// console.log(outroArray)

const nomeC = "Luiz Otavio Miranda";

// separa a string em um array por um caracter, no caso um espaço
const nomesC = nomeC.split(" ");

console.log(nomesC);

//Junta os items do array e transforma em uma string. O Inverso do split.
const nomeJ = nomesC.join(" ");

console.log(nomeJ);


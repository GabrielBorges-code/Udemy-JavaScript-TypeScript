// Retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// atividade 1
const numerosPares = numeros.filter((valor) => {
  return valor % 2 === 0;
});

// console.log(numerosPares);

// atividade 2
const dobraValores = numeros.map((valor) => {
  return valor * 2;
});

// console.log(dobraValores);

// atividade 3
const reduzirSomar = numeros.reduce((acumulador, valorAtual) => {
  acumulador += valorAtual;
  return acumulador;
});

// console.log(reduzirSomar)

const umUnicoArray = numerosPares
  .filter((value) => {
    return value % 2 === 0;
  })
  .map((value) => {
    return value * 2;
  })
  .reduce((acumulador, valorAtual) => {
    acumulador += valorAtual;
    return acumulador;
  }
);

console.log(umUnicoArray);

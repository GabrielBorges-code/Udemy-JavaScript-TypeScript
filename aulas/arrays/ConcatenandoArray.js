const num1 = [1, 2, 3];

const num2 = [4, 5, 6];

const num3 = num1.concat(num2, [0, 1, 3], "Gabriel");

// console.log(num3)

// ... : rest | ... spread
// também add junta os arras como concat
const num4 = [...num1, "Gabriel", ...num2, ...[7, ,8, 9]];

console.log(num4);
// o que se aplica a array, se aplica a objetos
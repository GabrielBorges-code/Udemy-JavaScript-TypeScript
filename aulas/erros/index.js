const soma = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('a e b precisam ser números');
    }

    return a + b;
}

let res = soma(15, 5);
let res2 = soma('10', 5);


try {
    console.log(res)
    console.log(res2)

} catch(err) {
    // console.error(err)
    console.error("Algo mais amigável")
}
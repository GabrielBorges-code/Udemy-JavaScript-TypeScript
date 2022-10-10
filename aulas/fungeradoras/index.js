// lase evaluetion
// função geradora

function* geradora1() {
    yield "Valor 1";
    yield "Valor 2";
    yield "Valor 3";
}

function* geradora2() {
    let i = 0;
    while(true) {
        i++;
        yield i;
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4() {
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
    yield 7;
}

function* geradora5() {
    yield function() {
        console.log("vim do y1");
    };

    // ...

    yield function() {
        console.log("Vim do y2");
    };
}

const g1 = geradora1();

console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1)

// const g2 = geradora2();

// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// ......

const g4 = geradora4();

for (const ger of g4) {
    console.log(ger);
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
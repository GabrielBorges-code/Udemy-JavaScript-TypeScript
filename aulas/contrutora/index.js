// função contrutora -> objetos
// função fábrica -> objetos
// contrutora -> começa com letra maíusola
// as duas são moldes para contruir objetos
// em construtores o this também serve como private ou public

function Pessoa(nome, sobrenome) {

    // Privados
    const ID = 123456;

    const metodoInerno = function() {
        
    };

    // Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`Me chamo ${this.nome} ${this.sobrenome}`)
    }
}

const p1 = new Pessoa("Gabriel", "Borges");

console.log(p1);
p1.metodo();

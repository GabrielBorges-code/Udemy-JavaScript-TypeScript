// Factory function (função fábrica)
// Contructor function (função construtora)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(value) {
            this.sobrenome = value;
        },
        fala(assunto) {
            return `${this.nome} está falando ${assunto}.`;
        },
        peso: peso,
        altura: altura,
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(1 );
        }
    }
}

const p1 = criaPessoa("Gabriel", "Borges");

console.log(p1.fala("Futebol"));

p1.nomeCompleto = "Borges de Moura";

console.log(p1.nomeCompleto);

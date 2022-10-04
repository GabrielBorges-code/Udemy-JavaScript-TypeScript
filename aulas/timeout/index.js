function mostrarHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {
        hour12: true
    });
}

const timer = setInterval(function() {
    console.log(mostrarHora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log("Saindo galera");
}, 4000);
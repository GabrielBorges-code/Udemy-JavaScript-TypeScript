const inputTarefa = document.querySelector(".input-nova-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const ulTarefas = document.querySelector(".ul-tarefas");

function criaLI() {
    const li = document.createElement("li");
    return li;
}

function criaTarefa(textoInput) {
    const li = criaLI();
    li.innerText = textoInput;
    ulTarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

function limpaInput() {
    inputTarefa.value = "";
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += " "
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "Apagar Tarefa";
    botaoApagar.setAttribute("class", "apagar");
    botaoApagar.setAttribute("title", "Apagar tarefa");
    li.appendChild(botaoApagar);
}

function salvarTarefas() {
    const liTarefas = ulTarefas.querySelectorAll("li");
    const arrayDeTarefas = [];

    for(let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar Tarefa", "").trim();
        arrayDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(arrayDeTarefas);

    localStorage.setItem("tarefas", tarefasJSON);

}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);
    // console.log(listaDeTarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
try {
    adicionaTarefasSalvas();
} catch (error) {
    console.log(error)
}

inputTarefa.addEventListener("keypress", (e) => {
    if(e.keyCode === 13) {
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnAddTarefa.addEventListener("click", (e) => {
    // e.preventDefault();
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);

})

document.addEventListener("click", (e) => {
    const el = e.target;
    if(el.classList.contains("apagar")) {
        el.parentElement.remove();
        salvarTarefas();
    }
})
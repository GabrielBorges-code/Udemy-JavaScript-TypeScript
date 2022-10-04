const divParagrafos = document.querySelector(".paragrafos");
const paragrafos = document.querySelectorAll("p"); //NodeList

const estilosBody = getComputedStyle(document.body);
const backgroundBody = estilosBody.backgroundColor;

console.log(backgroundBody);

// divParagrafos.style.backgroundColor = backgroundBody;

for(let p of paragrafos){
    p.style.color = "white";
    p.style.backgroundColor = backgroundBody;
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver
// a lógica para resolver o problema.

// LISTA DE PARTICIPANTES

// Função para sortear um nome
let names = [];

function adicionarAmigo() {
    const nameInput = document.getElementById("amigo");
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        updateNameList();
        nameInput.value = "";
    }
}

function updateNameList() {
    const nameList = document.getElementById("listaAmigos");
    nameList.innerHTML = "";
    names.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function sortearAmigo() {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        document.getElementById("resultado").textContent = `Nome sorteado: ${names[randomIndex]}`;
    } else {
        document.getElementById("resultado").textContent = "Adicione nomes antes de sortear.";
    }
}
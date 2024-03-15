// Elementos
const gameBanner = document.querySelector("#photo");
const gameTitle = document.querySelector(".game-title");
const yearLaunch = document.querySelector("#ano");
const gameDesc = document.querySelector(".game-desc");
const inputField = document.querySelector("#input");
// Pegando informações do JSON
fetch('../data.json').then((response) => {
    response.json().then((games) => {
            console.log(games);
        });
    });
// Funções
function mostrarInfo() {
    fetch('../data.json').then(response => response.json()).then(data => {
        let inputId = inputField.value;
        let objeto = inputId;
        if (data.includes(objeto)) {
            gameBanner.innerHTML = `<img id = "photo" src="${objeto.capa}" alt="template">`
            gameTitle.textContent = objeto.nome;
            yearLaunch.textContent = objeto.ano;
            gameDesc.textContent = objeto.sobre;
        } else {
            gameTitle.textContent = "Informação não encontrada"
        }
    });
    console.log("Função chamada")
}

/*function printInfo(x) {
    if (x === num) {
        gameTitle.textContent = nome;
        gameBanner.textContent = capa;
        yearLaunch.textContent = ano;
        gameDesc.textContent = sobre;
    }
}

function captureUserInput() {
    let userInput = inputBtn.value;
    return userInput;
}*/
 

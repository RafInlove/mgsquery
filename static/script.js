// Elementos
const gameBanner = document.querySelector(".photo");
const gameTitle = document.querySelector(".game-title");
const yearLaunch = document.querySelector("#ano");
const gameDesc = document.querySelector(".game-desc");
const inputBtn = document.querySelector("#input");
// Pegando informações do JSON
fetch('../data.json').then((response) => {
    response.json().then((games) => {
            console.log(games);
        });
    });
// Funções
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
// Eventos
inputBtn.addEventListener("submit", (e) => {
    e.preventDefault();


    
});

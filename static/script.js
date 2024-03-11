// Elementos
const gameBanner = document.querySelector(".photo");
const gameTitle = document.querySelector(".game-title");
const yearLaunch = document.querySelector(".year-launch");
const gameDesc = document.querySelector(".game-desc");
const inputBtn = document.querySelector("#input");
// Pegando informações do JSON
fetch('../data.json').then((response) => {
    response.json().then((data) => {
        const dados = data;
        dados.games.map((game) => {
            const num = game.id
            const nome = game.nome
            const ano = game.ano
            const sobre = game.sobre
            const capa = game.capa
        });
    });
});
// Funções

// Eventos
inputBtn.addEventListener("submit", (e) => {
    e.preventDefault;

    
});

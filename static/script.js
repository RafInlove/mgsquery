// Elementos
const gameBanner = document.querySelector(".photo");
const gameTitle = document.querySelector(".game-title");
const yearLaunch = document.querySelector(".year-launch");
const gameDesc = document.querySelector(".game-desc");
const input = document.querySelector("#input");
// Funções
/*function photoChanger(input) {
    if (input === )
}*/

fetch("../data.json")
.then((response) => {
    response.json()
    .then((data) => {
        data.games.map((game) => {
            let idd = game.id;
            let titulo = game.nome;
            let capa = game.capa;


            console.log(idd, titulo, capa)
        });
    });
});

function photoChanger(id) {
    if (input.value === idd) {
        gameTitle.innerHTML = titulo;
        gameBanner.innerHTML =`<img src = ${capa}></img>`
    }
}
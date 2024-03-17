// Elementos
const gameBanner = document.querySelector("#photo");
const gameTitle = document.querySelector(".game-title");
const yearLaunch = document.querySelector("#ano");
const gameDesc = document.querySelector(".game-desc");
const inputField = document.querySelector("#input");
const searchBtn = document.querySelector("#search");
// Funções
function mostrarInfo() {
    if (!inputField.value) {
        return;
    } else {
        fetch('data.json').then((response) => {
            response.json().then((games) => {
                let objetoIndex = inputField.value;

                if (objetoIndex == 0 || 1 || 2 || 3 || 4) {
                    gameBanner.innerHTML = `<img id = "photo" src="${games[objetoIndex].capa}" alt="template"></img>`;
                    gameTitle.textContent = games[objetoIndex].nome;
                    yearLaunch.textContent = games[objetoIndex].ano;
                    gameDesc.textContent = games[objetoIndex].sobre;
                } else {
                    gameTitle.textContent = "Informação não encontrada";
                }
            });
        });
    }
}
// Eventos
searchBtn.addEventListener("click", () => {
    mostrarInfo();
});

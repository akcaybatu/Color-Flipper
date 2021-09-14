const body = document.querySelector('body');
const button = document.getElementById('btn');
const instantButton = document.getElementById('instant-color');
const favBtn = document.getElementById('fav-btn');
const favList = document.getElementById('fav-list');
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", changeBackground);
favBtn.addEventListener("click", () => {
    addToFavorite(instantButton.textContent)
});

function changeBackground(){
    let selectedId = "#";
    do {
        let randomColor = Math.floor(Math.random() * colors.length);
        selectedId += colors[randomColor];
        console.log(selectedId, randomColor); 
      }
      while (selectedId.length <= 6);  
      body.style.backgroundColor = selectedId;
      instantButton.style.backgroundColor = selectedId;
      instantButton.innerText = selectedId;
}

function addToFavorite(hexCode){
        let favItem = `
        <li>
        <span>Color Code: <span>${hexCode}</span></span>
        <span style='background-color:${hexCode}'></span>
        </li>
        `;
        favList.insertAdjacentHTML('beforeend', favItem);
}
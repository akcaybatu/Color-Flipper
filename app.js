const body = document.querySelector('body');
const button = document.getElementById('btn');
const instantColorButton = document.getElementById('instant-color');
const favBtn = document.getElementById('fav-btn');
const favList = document.getElementById('fav-list');
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let scrollHidden = 0;

button.addEventListener("click", changeBackground);

instantColorButton.addEventListener('click',copyText);

favBtn.addEventListener("click", () => {
    addToFavorite(instantColorButton.textContent)
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
      instantColorButton.style.backgroundColor = selectedId;
      instantColorButton.innerText = selectedId;
}

function addToFavorite(hexCode){    
    scrollHidden++;
    let favItem = `
    <li style='background-color:${hexCode}; padding: 10px; cursor: pointer'>
    <span>${hexCode}</span>
    <span style='background-color:${hexCode}'></span>
    </li>
    `;
    favList.insertAdjacentHTML('beforeend', favItem);
    console.log(scrollHidden);
    if (scrollHidden > 3) {
        favList.style.overflowY = 'visible'; 
    } else {
        return;
    }
}

function selectText() {
    var element = event.target;
    var range;
    if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

function copyText() {
    selectText();
    // alert('Color code ' + event.target.innerText + ' copied in clipboard')
    document.execCommand("copy");
}

$('#instant-color').click(function(){
    $('.alert').addClass("show");
    $('.alert').removeClass("hide");
    $('.alert').addClass("showAlert");
    setTimeout(function(){
      $('.alert').removeClass("show");
      $('.alert').addClass("hide");
    },5000);
  });
  $('.close-btn').click(function(){
    $('.alert').removeClass("show");
    $('.alert').addClass("hide");
});
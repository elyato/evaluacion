const openCLose = () => {
  const navbar = document.querySelector("nav");
  navbar.classList.toggle("open");
  const imgMenu = document.getElementById("img-menu");
  if (navbar.classList.contains("open")) {
    imgMenu.src = "images/icon-close-menu.svg";
  } else {
    imgMenu.src = "images/icon-hamburger.svg";
  }
};
function prendidoApagado(open) {
  const modal = document.getElementById("modal");
  modal.classList.toggle("encendido");
  if (open == true) {
    modal.classList.add("encendido");
  } else {
    modal.classList.remove("apagado");
  }
}

function addToFavorites() {
  const btnBookmark = document.getElementById("btn-bookmark");
  const textBookmark = document.getElementById("p-bookmark");
  //si tiene clase active quítesela
  // está preguntando si btn tiene la clase active
  if (btnBookmark.classList.contains("active")) {
    //si tiene la clase
    //cambiar el texto a booked
    btnBookmark.classList.remove("active");
    textBookmark.textContent = "Bookmark";
  } else {
    //no tiene la clase
    //cambia el texto a book
    textBookmark.textContent = "Bookmarked";
    btnBookmark.classList.add("active");
  }
}

function checked(idsArticle, idInput) {
  document.getElementById(idsArticle).addEventListener("click", () => {
    document.getElementById(idInput).checked = true;
  });
}
const sponsor = checked("articleReward", "subtitle-reward");
const bamboo = checked("articleBamboo", "BambooStand");
const black = checked("articleBlack", "black-edition");

function addCardClickListener(card, contentAmount) {
  card.addEventListener("click", () => {
    contentAmountCard1.style.display = "none";
    contentAmountCard2.style.display = "none";
    contentAmountCard3.style.display = "none";
    contentAmount.style.display = "flex";
  });
}

const card1 = document.getElementById("articleReward");
const contentAmountCard1 = document.getElementById("content-prices");

const card2 = document.getElementById("articleBamboo");
const contentAmountCard2 = document.getElementById("content-prices-bamboo");

const card3 = document.getElementById("articleBlack");
const contentAmountCard3 = document.getElementById("content-amount-black");

addCardClickListener(card1, contentAmountCard1);
addCardClickListener(card2, contentAmountCard2);
addCardClickListener(card3, contentAmountCard3);

const inputSponsor = document.getElementById("input-sponsor");
const buttonSponsor = document.getElementById("btn-sponsor");
const containerSales = document.getElementById("modal");
const cardAlert = document.getElementById("card-alert");

buttonSponsor.addEventListener("click", () => {
  if (inputSponsor.value <= 0) {
    alert("tiene que ingresar un valor mayor a 0");
  } else {
    containerSales.classList.remove("encendido");
    cardAlert.classList.add("encendido");
  }
});

const btnGotIt = document.getElementById("btn-got-it");
btnGotIt.addEventListener("click", () => {
  cardAlert.classList.remove("encendido");
});
const btnBamboo = document.getElementById("button-bamboo");
const inputBamboo = document.getElementById("inputBamboo");
btnBamboo.addEventListener("click", () => {
  if (inputBamboo.value < 25) {
    alert("ingrese un valor mayor a 24");
  } else {
    cardAlert.classList.add("encendido");
    containerSales.classList.add("apagado");
  }
});

const buttonBlack = document.getElementById("buttonBlack");
const blackEdition = document.getElementById("black-edition");
buttonBlack.addEventListener("click", () => {
  if (blackEdition.value < 75) {
    alert("ingrese un valor mayor a 74")
  } else {
    cardAlert.classList.add("encendido");
    containerSales.classList.add("apagado");
  }
});

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
function toggleCard(open) {
  const modal = document.getElementById("card-alert");
  modal.classList.add("modal");
  if (open == true) {
    cardAlert.style.display = "flex";
  } else {
    cardAlert.style.display = "none";
  }
}

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

// const input = document.getElementById("input-sponsor");
// const button = document.getElementById("btn-sponsor");
// const cardAlert = document.getElementById("card-alert");

// function validateInput() {
//   let inputValue = input.value;

//   if ((button = inputValue)) {
//     button.disabled = false;
//   } else {
//     button.disabled = true;
//     cardAlert.style.display = "flex";
//   }
// }
// validateInput()
// function sponsorAmout(open) {
//   buttonSponsor.disabled = true;

//   if (open == true) {
//     if (inputSponsor.value <= 0) {
//       buttonSponsor;
//     } else {
//       buttonSponsor;
//     }
//   }
// }

// sponsorAmout();

const inputSponsor = document.getElementById("input-sponsor");
const buttonSponsor = document.getElementById("btn-sponsor");
const containerSales = document.getElementById("modal");
const cardAlert = document.getElementById("card-alert");
buttonSponsor.addEventListener("click", () => {
  if (inputSponsor.value <= 0) {
    inputSponsor.style.border = "solid red 1px";
  } else {
    cardAlert.classList.add("encendido");
    containerSales.classList.add("apagado");
  }
});

// const btnBamboo = document.getElementById("button-bamboo");
// const inputBamboo = document.getElementById("inputBamboo");
// btnBamboo.addEventListener("click", () => {
//   if (inputBamboo.value <= 25) {
//     inputBamboo.style.border = "solid red 1px";
//   } else {
//     cardAlert.classList.add("encendido");
//     containerSales.classList.add("apagado");
//   }
// });

// const buttonBlack = document.getElementById("buttonBlack");
// const blackEdition = document.getElementById("black-edition");
// buttonBlack.addEventListener("click", () => {
//   if (blackEdition.value <= 75) {
//     blackEdition.style.border = "solid red 1px";
//   } else {
//     cardAlert.classList.add("encendido");
//     containerSales.classList.add("apagado");
//   }
// });
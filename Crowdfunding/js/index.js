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
  openCloseCard();
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

function openCloseCard(contentAmount) {
  const arayCard = [
    "content-prices",
    "content-prices-bamboo",
    "content-amount-black",
  ];
  arayCard.forEach((element) => {
    const el = document.getElementById(element);
    el.classList.add("hd");
    if (element === contentAmount) {
      el.classList.add("fl");
      el.classList.remove("hd");
    }
    if (element != contentAmount) {
      el.classList.remove("fl");
      el.classList.add("hd");
    }
  });
}
///boton.disbaled=false;
//buttonSponsor.classl

function addCardClickListener(card, contentAmount) {
  card.addEventListener("click", () => {
    openCloseCard(contentAmount);
  });
}

const card1 = document.getElementById("articleReward");
const contentAmountCard1 = document.getElementById("content-prices");

const card2 = document.getElementById("articleBamboo");
const contentAmountCard2 = document.getElementById("content-prices-bamboo");

const card3 = document.getElementById("articleBlack");
const contentAmountCard3 = document.getElementById("content-amount-black");

addCardClickListener(card1, "content-prices");
addCardClickListener(card2, "content-prices-bamboo");
addCardClickListener(card3, "content-amount-black");

const inputSponsor = document.getElementById("input-sponsor");

const buttonSponsor = document.getElementById("btn-sponsor");
const containerSales = document.getElementById("modal");
const cardAlert = document.getElementById("card-alert");
const warning = document.getElementById("warning");

buttonSponsor.addEventListener("click", () => {
  if (inputSponsor.value <= 0) {
    warning.classList.add("encendido");
  } else {
    containerSales.classList.remove("encendido");
    cardAlert.classList.add("encendido");
  }
});
inputSponsor.addEventListener("keyup", () => {
  if (event.keyCode == 13) {
    if (inputSponsor.value <= 0) {
      warning.classList.add("encendido");
    } else {
      buttonSponsor.removeAttribute("disabled");
      containerSales.classList.remove("encendido");
      // cardAlert.classList.add("encendido");
      // buttonSponsor.setAttribute("disabled");
    }
  }
});

const btnWarning = document.getElementById("btn-warning");
btnWarning.addEventListener("click", () => {
  warning.classList.remove("encendido");
});

const btnGotIt = document.getElementById("btn-got-it");
btnGotIt.addEventListener("click", () => {
  cardAlert.classList.remove("encendido");
});

const btnBamboo = document.getElementById("button-bamboo");
const inputBamboo = document.getElementById("inputBamboo");

btnBamboo.addEventListener("click", () => {
  if (inputBamboo.value <= 25) {
    warning.classList.add("encendido");
  } else {
    containerSales.classList.remove("encendido");
    cardAlert.classList.add("encendido");
  }
});

inputBamboo.addEventListener("keyup", () => {
  if (event.keyCode == 13) {
    if (inputBamboo.value >= 25) {
      btnBamboo.removeAttribute("disabled");
      containerSales.classList.remove("encendido");
      cardAlert.classList.add("encendido");
    } else {
      warning.classList.add("encendido");
      // buttonSponsor.setAttribute("disabled");
    }
  }
});

const buttonBlack = document.getElementById("buttonBlack");
const inputBlack = document.getElementById("input-black");

inputBlack.addEventListener("keyup", () => {
  if (event.keyCode == 13) {
    if (inputBlack.value >= 75) {
      buttonBlack.removeAttribute("disabled");
      containerSales.classList.remove("encendido");
      cardAlert.classList.add("encendido");
    } else {
      warning.classList.add("encendido");
    }
  }
});
buttonBlack.addEventListener("click", () => {
  if (inputBlack.value >= 75) {
    containerSales.classList.remove("encendido");
    cardAlert.classList.add("encendido");
    
  } else {
    warning.classList.add("encendido");
  }
});
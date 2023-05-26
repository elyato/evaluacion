

const card = document.createElement("div");
card.classList.add("card-alert");

const contenido = document.createElement("p");
contenido.textContent = "Lo siento, tienes que escribir una tarea";
contenido.classList.add("card-content");

const btnAlert = document.createElement("button");

card.append(contenido, btnAlert);

const contenedor = document.getElementById("contenedor");
contenedor.appendChild(card);

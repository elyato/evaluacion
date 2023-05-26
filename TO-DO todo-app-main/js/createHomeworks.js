import { stick } from "./selection.js";
export function crearTarea() {
  const article = document.createElement("article");
  article.classList.add("homeworks");
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.classList.add("circular-checkbox");
  const text = document.createElement("span");
  const close = document.createElement("img");
  close.src = "images/icon-cross.svg";
  article.append(div, close);
  div.append(input, text);
  return article;
}

export function crearArticles(stickResolve) {
  const article = document.createElement("article");
  const labelTodo = document.createElement("p");
  labelTodo.textContent = stickResolve.text;

  article.append(labelTodo);
  for (let i = 0; i < stickResolve.buttons.length; i++) {
    const button = document.createElement("button");
    button.textContent = stickResolve.buttons[i];
    
    button.id = "button-" + i;
    article.append(button);
  }
  stick.append(article);
}

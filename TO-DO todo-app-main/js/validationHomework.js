import { stick } from "./selection.js";
import { crearTarea } from "./createHomeworks.js";

export const main = document.querySelector("main");
const content = document.createElement("section");
content.setAttribute("id","content")
content.classList.add("content");
export const insertarTarea = (tarea) => {
  const { texto, finalizado } = tarea;
  const htmlTarea = crearTarea();
  htmlTarea.querySelector("span").textContent = texto;
  htmlTarea.querySelector("input").checked = finalizado;
  main.append(content);
  content.append(htmlTarea, stick);
};


content.a
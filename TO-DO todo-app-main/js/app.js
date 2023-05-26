
import { insertarTarea } from "./validationHomework.js";
export const tareas = [
  { texto: "ir al banco", finalizado: false },
  { texto: "limpiar zapatos", finalizado: false },
  { texto: "barrer la calle", finalizado: true },
];

tareas.forEach(insertarTarea);
const input = document.getElementById("text");
input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    const txtNuevaTarea = e.target.value;

    if (txtNuevaTarea.trim() !== "") {

      insertarTarea({
        texto: txtNuevaTarea,
        finalizado: false,
      });

      document.getElementById("text").value = "";
    } else {
      alert("Por favor, ingrese una tarea válida.");
    }
  }
});

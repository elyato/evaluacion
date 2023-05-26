import { crearArticles } from "./createHomeworks.js";
export const stick = document.createElement("section");
stick.classList.add("content-stick");

export const stickResolve = [
  {
      text: "item left",
    buttons: ["All", "Active", "Complete", "Clear Complete"],
  },
];

stickResolve.forEach(crearArticles);

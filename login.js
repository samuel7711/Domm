import { crearparrafo } from "./js";
import { crearbotono } from "./js";
import { image } from "./js";
import { entrada } from "./js";

const titulo = document.createElement("div");
titulo.appendChild(crearparrafo("INICIAR SESIÓN"));
document.body.appendChild(titulo);

const foto = document.getElementById("image");
foto.style.borderRadius("20px");
titulo.appendChild(foto);

const parra1 = document.createElement("div")
parra1.appendChild(crearparrafo("USUARIO"));
titulo.appendChild(parra1);
const ent1 = document.getElementById("put");
parra1.appendChild(ent1);

const parra2 = document.createElement(div)
parra2.appendChild(crearparrafo("CONSTRASEÑA"));
titulo.appendChild(parra2);
const ent2 = document.getElementById("put");
parra2.appendChild(ent2);


const bot = document.createElement("button");
bot.appendChild(crearbotono("LOGIN"));
titulo.appendChild(bot);



import { crearparrafo } from "./js";
import { crearbotono } from "./js";
import { image } from "./js";
import { entrada } from "./js";

const titulo = document.createElement("div");
titulo.appendChild(crearparrafo("REGISTRARSE"));
document.body.appendChild(titulo);


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

const parra3 = document.createElement("div")
parra3.appendChild(crearparrafo("CORREO ELECTRONICO"));
titulo.appendChild(parra3);
const ent3 = document.getElementById("put");
parra3.appendChild(ent3);


const parra4 = document.createElement("div")
parra4.appendChild(crearparrafo("NOMBRE"));
titulo.appendChild(parra4);
const ent4 = document.getElementById("put");
parra4.appendChild(ent4);


const parra5 = document.createElement("div")
parra5.appendChild(crearparrafo("APELLIDO"));
titulo.appendChild(parra5);
const ent5 = document.getElementById("put");
parra5.appendChild(ent5);


const bot2 = document.createElement("button");
bot2.appendChild(crearbotono("REGISTRARSE"));
document.body.appendChild(bot2);



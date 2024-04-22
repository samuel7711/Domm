import { crearparrafo } from "./js";
import { crearbotono } from "./js";
import { image } from "./js";
import { entrada } from "./js";

const titulo = document.createElement("div");
titulo.appendChild(crearparrafo("REGISTRARSE"));
document.body.appendChild(titulo);


const parra1 = document.createElement("div")
parra1.appendChild(crearparrafo("USUARIO"));
document.body.appendChild(parra1);
const ent1 = document.getElementById("put");

const parra2 = document.createElement(div)
parra2.appendChild(crearparrafo("CONSTRASEÑA"));
document.body.appendChild(parra2);
const ent2 = document.getElementById("put");

const parra3 = document.createElement("div")
parra3.appendChild(crearparrafo("CORREO ELECTRONICO"));
document.body.appendChild(parra3);
const ent3 = document.getElementById("put");

const parra4 = document.createElement("div")
parra4.appendChild(crearparrafo("NOMBRE"));
document.body.appendChild(parra4);
const ent4 = document.getElementById("put");

const parra5 = document.createElement("div")
parra5.appendChild(crearparrafo("APELLIDO"));
document.body.appendChild(parra5);
const ent5 = document.getElementById("put");

const bot2 = document.createElement("button");
bot2.appendChild(crearbotono("REGISTRARSE"));
document.body.appendChild(bot2);



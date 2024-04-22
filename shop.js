import { crearbotono } from "./js";
import { image } from "./js";


const divbotones= document.createElement("div");
document.body.appendChild(divbotones);

const boton1 = document.getElementById("boton");
boton1.textContent="LOGIN";
boton1.style.backgroundColor="blue";
divbotones.appendChild(boton1);

const boton2 = document.getElementById("boton");
boton2.textContent="REGISTER";
boton2.style.backgroundColor="blue";

divbotones.appendChild(boton2);

const main = document.createElement("div");
main.id="tienda";
document.body.appendChild(main);

const titu = document.createElement("header");
titu.textContent="PRODUCTOS";
titu.style.backgroundColor="purple"
titu.style.color="white";
main.appendChild(titu);


const producto = document.createElement("div");
producto.classList.add("producto");
main.appendChild(producto);

const nombrePro = document.createElement("h3");
nombrePro.textContent = producto.nombre;
producto.appendChild(nombrePro);

const imagenPro = document.createElement("img");
imagenPro.src = producto.imagen;
producto.appendChild(imagenPro);
    
const precioPro = document.createElement("p");
precioPro.textContent = `Precio: $${producto.precio}`;
producto.appendChild(precioPro);

const compra= document.getElementById("boton");
compra.textContent="comprar";
producto.appendChild(compra);


const producto2 = document.createElement("div");
producto2.classList.add("producto");
main.appendChild(producto2);

const nombrePro2 = document.createElement("h3");
nombrePro2.textContent = producto2.nombre;
producto2.appendChild(nombrePro2);

const foto = document.getElementById("image");
producto2.appendChild(foto);
    
const precioPro2 = document.createElement("p");
precioPro2.textContent = `Precio: $${producto2.precio}`;
producto2.appendChild(precioPro2);

const compra2= document.getElementById("boton");
compra2.textContent="comprar";
producto.appendChild(compra2);


const producto3 = document.createElement("div");
producto3.classList.add("producto");
main.appendChild(producto3);

const nombrePro3 = document.createElement("h3");
nombrePro3.textContent = producto3.nombre;
producto3.appendChild(nombrePro3);

const foto2 = document.getElementById("image");
producto3.appendChild(foto2);
    
const precioPro3 = document.createElement("p");
precioPro3.textContent = `Precio: $${producto3.precio}`;
producto3.appendChild(precioPro3);

const compra3= document.getElementById("boton");
compra3.textContent="comprar";
producto.appendChild(compra3);


main.innerHTML= ir();
main.innerHTML= ir2();
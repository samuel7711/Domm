export const crearbotono =(texto)=>{
    const boton = document.createElement("button");
    boton.type="button";
    boton.id="boton";
    boton.textContent=texto;
    return boton;
}

export const entrada =()=>{
    const input = document.createElement("input");
    input.id="put";
    input.style.width("30px");
    return input;
}

export const crearparrafo =()=>{
    const parrafo = document.createElement("P");
    parrafo.textContent=texto;
    return parrrafo;

}

export const image =()=>{
    const img = document.createElement("img");
    img.id("image");
    return img;
}
 
export const ir =()=>{
    return '<a src="login.html"><button>LOGIN</button></a>';
};

export const ir2 =()=>{
    return '<a src="register.html"><button>REGISTER</button></a>';
};
let botoColor = document.getElementById("color");
let colorClick = document.getElementsByClassName("colores");
let cambioColor = document.getElementsByClassName("cambiobackground");
let cambioColorFuente = document.getElementsByClassName("cambioColorFuente")
let cambioBorder = document.getElementsByClassName("cambioBorder")



const abrirMenu = () => {
    menuColores.classList.remove("cerrarMenu")
    menuColores.classList.add("mostrar")
    botoColor.classList.add("ocultarbotton");
};

const cerrarMenu = () => {
    menuColores.classList.remove("mostrar")
    menuColores.classList.add("cerrarMenu")
    botoColor.classList.remove("ocultarbotton");

}

for (let i = 0; i < colorClick.length; i++) {
    let element = colorClick[i];
    element.addEventListener("click", function() {
        BuscarColor(element.attributes)

    });
}

const BuscarColor = (BuscarColor) => {
    for (let i = 0; i < BuscarColor.length; i++) {
        const element = BuscarColor[i];

        if (element.value === "blue") {
            return asignaColor("blue")
        } else if (element.value === "blueviolet") {
            return asignaColor("blueviolet")
        } else if (element.value === "goldenrod") {
            return asignaColor("goldenrod")
        } else if (element.value === "green") {
            return asignaColor("green")
        } else if (element.value === "magenta") {
            return asignaColor("magenta")
        } else if (element.value === "orange") {
            return asignaColor("orange")
        } else if (element.value === "purple") {
            return asignaColor("purple")
        } else if (element.value === "red") {
            return asignaColor("red")
        } else if (element.value === "yellow") {
            return asignaColor("yellow")
        } else if (element.value === "yellowgreen") {
            return asignaColor("yellowgreen")
        }
    }
}

const asignaColor = (COLOR) => {
    for (let i = 0; i < cambioColor.length; i++) {
        const element = cambioColor[i];
        element.style.backgroundColor = COLOR;

    }
    for (let z = 0; z < cambioColorFuente.length; z++) {
        const cambioFuente = cambioColorFuente[z];
        cambioFuente.style.color = COLOR;
    }
    for (let x = 0; x < cambioBorder.length; x++) {
        const cambiarBorder = cambioBorder[x];
        cambiarBorder.style.borderColor = COLOR;
    }
}

color.addEventListener("click", abrirMenu)
cerrar.addEventListener("click", cerrarMenu)
const setup = () => {
    document.getElementById("btnAppendP")
        .addEventListener("click", appendToDiv)
}

const appendToDiv = () => {
    let divje = document.querySelector("div");
    let pElement = document.createElement("p");
    pElement.textContent = "Bedankt, ik ben Jhonny, een nieuw geboren P element.";
    divje.appendChild(pElement);

}


window.addEventListener("load", setup);
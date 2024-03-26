const setup = () => {
    let pElement=document.getElementById("txtOutput");
    let btnWijzig=document.getElementById("btnWijzig");
        btnWijzig.addEventListener("click", function () {
            wijzigTekst(pElement);
        })
}

const wijzigTekst = (element) => {
    element.innerHTML="Welkom!";
}


window.addEventListener("load", setup);
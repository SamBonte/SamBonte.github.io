const setup = () => {
    let pBelangrijk = document.getElementsByClassName("belangrijk");
    for (let i = 0; i<pBelangrijk.length; i++) {
        pBelangrijk[i].className += " opvallend";
        //of paragraaf[i].classList.add("opvallend");
        console.log(pBelangrijk);

    }

}
window.addEventListener("load", setup);
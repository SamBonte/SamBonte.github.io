const setup = () => {
    //welk element, welke actie
    document.getElementById("imgPhoto").addEventListener("mouseover", changeInhoud);
}

const changeInhoud = () => {
    //welke properties wijzigen
    let imgPhoto = document.getElementById("imgPhoto");
    imgPhoto.src = "./image/dog-puppy-on-garden-royalty-free-image-1586966191.jpg";
    imgPhoto.alt = "dog";
    imgPhoto.className = "sizePhoto";

    document.getElementById("txtText").innerHTM = "School of Dogs";

}

window.addEventListener("load", setup);
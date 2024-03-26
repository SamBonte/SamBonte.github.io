const setup = () => {
    //li items juiste klasse geven
   let liNodelist = document.querySelectorAll("li");
    for (let i = 0; i < liNodelist.length; i++) {
        liNodelist[i].setAttribute("class", "listitem")
    }
    //img maken + toevoegen aan page
    let imageManneke = document.createElement("img");
    imageManneke.setAttribute("src", "images/cartoon_manneke.jpg");
    document.body.appendChild(imageManneke);
}
window.addEventListener("load", setup);
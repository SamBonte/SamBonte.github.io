const setup = () => {
   let pNodelist = document.querySelectorAll("p");
   console.log(pNodelist);
    for (let i = 0; i < pNodelist.length; i++) {
        pNodelist[i].textContent = "Good job";
    }
}
window.addEventListener("load", setup);
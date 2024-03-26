const setup = () => {
    //BETER dan innerHTML = belastend
    //OPL: at runtime el. creeren, aangemaakt maar nog niet toegevoegt aan HTML pg.
    let element= document.createElement("p"); //create ElementNode
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar");

    //geef van element de class
    console.log(element.getAttribute("class"));

    let textNode = document.createTextNode("Hello world!"); //create TextNode
    element.appendChild(textNode); //
    //voeg element toe aan HTML pagina, zoek naar id="myDiv" en hang daar element achter.
    document.querySelector("#myDIV").appendChild(element);



}
window.addEventListener("load", setup);
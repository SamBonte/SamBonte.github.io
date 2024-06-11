const setup = () => {
    //je kan van elke node vragen welke node ben je
    // 7 soorten
    // wat als element niet kan aanspreken ? Wel via: element.firstElementChild


    //selecting node
    let p = document.getElementById("para");
    // get node name and node type
    console.log(p.nodeName, p.nodeType); // P, 1

    //geef eerste child de node naam en het node type
    console.log(p.firstChild.nodeName, p.firstChild.nodeType); // #text 3
    //geef mij de volgende element node
    console.log(p.firstElementChild.nodeName, p.firstElementChild.nodeType); // SPAN 1
    //geef mij het volgende element die op hetzelde niveau staat
    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType); // P 1



}
window.addEventListener("load", setup);
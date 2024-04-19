/*Globale variabelen*/

let AANTAL_HORIZONTAAL=4;
let AANTAL_VERTICAAL=3;
let AANTAL_KAARTEN = 6;
const setup = () => {
    initieerspel();

}

const initieerspel = () => {
    let srcKaartAchterkant = "images/achterkant_kaart.jpg";
    let srcSpeelkaarten = "images/kaart";
    let suffixSrcSpeelkaarten = ".png";

    let kaarten = [];
    let naamKaarten = ["leeuw", "aap","schaap", "muis","kikker", "koe"];
    let speelveld = document.getElementById("speelveld");


    for (let i = 0; i< AANTAL_KAARTEN; i++){
        //creeren speelKaart
        let speelKaart = document.createElement("img");
        speelKaart.setAttribute("class", "kaart");
        speelKaart.setAttribute("id", (i+1).toString());
        speelKaart.setAttribute("src", srcSpeelkaarten + (i+1).toString() + suffixSrcSpeelkaarten);
        speelKaart.setAttribute("alt", "foto van een " + naamKaarten[i]);
        kaarten.push(speelKaart);
    }
    console.log(kaarten);

    //alle kaarten op speelveld krijgen
    for (let heigth = 0; heigth < AANTAL_VERTICAAL; heigth++) {
        let newLine = document.createElement("br");
        for (let width = 0; width < AANTAL_HORIZONTAAL; width++) {
            let defaultKaart = document.createElement("img");
            defaultKaart.setAttribute("class", "kaart");
            defaultKaart.setAttribute("src", (srcKaartAchterkant));
            defaultKaart.setAttribute("alt", "foto van da achterkant van een kaart");
            speelveld.appendChild(defaultKaart);
        }
        speelveld.appendChild(newLine);
    }

    toekennenKaarten(kaarten);
    document.addEventListener("click", draaiKaartOm)

}

const toekennenKaarten = (speelKaarten) => {
    //leeuw koe muis kikker
    //muis schaap leeuw aap
    //kikker koe aap schaap
    //schema nummers:
    //0 5 3 4
    //3 2 0 1
    //4 5 1 2

    //de kaarten toekennen
    let lijstVolgordeKaarten = [0,5,3,4,3,2,0,1,4,5,1,2];
    //id soort kaart toekennen aan echte kaarten
    let veldkaarten = document.getElementsByClassName("kaart");
    console.log("veldkaarten: ", veldkaarten, "speelkaarten: ", speelKaarten);
    for (let j = 0; j < veldkaarten.length; j++) {
        veldkaarten[j].id = speelKaarten[(lijstVolgordeKaarten[j])].id;
    }
    document.addEventListener("click", (event) => draaiKaartOm(event, speelKaarten));
}

const draaiKaartOm = (event, speelKaarten) => {
    let selectedKaart = event.target;
    let selectedKaartId = selectedKaart.id;
    for (let i = 0; i < speelKaarten; i++) {
        if ((selectedKaartId - 1) === i){
            selectedKaart.src = speelKaarten[i].src;
        }
    }
}
window.addEventListener("load", setup);
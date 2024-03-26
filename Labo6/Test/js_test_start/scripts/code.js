const setup = () => {
    //change event en input event
    document.getElementById("selectStaatVanKip")
        .addEventListener("click", veranderStaat);
    document.getElementById("selectStaatVanKip")
        .addEventListener("change", veranderStaat);
    document.getElementById("txtInputLetter")
        .addEventListener("input", telVoorkomen);

}

const veranderStaat = () => {
    let select = document.getElementById("selectStaatVanKip");
    let valueSelect = select.value;
    let divImage = document.getElementById("img");
    let tekstNote = document.getElementById("note");
    let tekstNoteDefault = "Hierboven een kip ";

    if (valueSelect === "metEi") {
        let srcMetEi = "images/with-egg.png";
        divImage.className = "";
        divImage.innerHTML = "<img src='" + srcMetEi + "' alt='foto van een kip'/>";
        tekstNote.textContent = tekstNoteDefault + "met ei.";

    } else if (valueSelect === "zonderEi") {
        let srcZonderEi = "images/without-egg.png";
        divImage.className = "";
        divImage.innerHTML = "<img src='" + srcZonderEi + "' alt='foto van een kip'/>";
        tekstNote.textContent = tekstNoteDefault + "zonder ei.";
    }
}

const telVoorkomen = () => {
    let letter = document.getElementById("txtInputLetter").value;
    let tekstNote = document.getElementById("note");
    let tekstContent = tekstNote.textContent;
    console.log(tekstNote.textContent, letter);

    if (tekstNote.value !== "" && letter !== ""){
        let voorkomenLetter = telAantal(tekstContent, letter.toString());
        tekstNote.innerHTML += "<br><span>De letter (" + letter + ") komt " + voorkomenLetter + " aantal keer voor </span>";
    }
}

const telAantal = (tekst, zoek) => {
    let result = 0;
    if (typeof tekst === 'string' && zoek !== undefined && zoek !== "") {
        console.log(tekst, zoek);
        let idx = tekst.indexOf(zoek);
        while (idx !== -1) {
            result++;
            idx = tekst.indexOf(zoek, idx + zoek.length);
        }
        return result;
    }

    return result;
}
    /*
    let divImageKip = document.getElementById("img");
    let tekstKip = document.getElementById("note");
    let gezochteLetter = document.getElementById("txtInputLetter";
    tekstKip.textContent = "Hierboven een kip";

    //kijken wat gekozen
    for (let i = 0; i<options.length; i++){
                if(options[i].value === "metEi"){
                    divImageKip.className = "";
                    divImageKip.innerHTML += "<img src='images/with-egg.png' />";
            tekstKip.textContent += " met een ei"


        } else if (options[i].value === "zonderEi"){
            divImageKip.className = "withEgg";
            divImageKip.innerHTML += "<img src='images/without-egg.png'/>";
            tekstKip.textContent += "zonder een ei";
        }
    }
    let aantalVoorkomen = "Letter";
    aantalVoorkomen += letterCount(tekstKip, gezochteLetter);

}

const letterCount = (tekst, zoek) => {
    let result = 0;
    let idx = tekst.indexOf(zoek);
    while (idx !== -1){
        result++;
        idx = tekst.indexOf(zoek, idx+zoek.length);
    }
    return result;*/


window.addEventListener("load", setup);
const setup = () => {
    document.getElementById("btnSubmit")
        .addEventListener("click", printOpConsole)
}

const printOpConsole = () => {
    let isroker = "is ";
    let moedertaal = "moedertaal is ";
    let buurland = "favoriet buurland is ";
    let bestelling = "bestelling bestaat uit ";

    let ckbRoker = document.getElementById("ckbRoker");
    let radiobuttons = document.getElementsByName("taal");
    let optieBuurland = document.getElementById("favorietBuurland").value;
    let selectFood = document.getElementById("selectFood").value;

    //kijk of ckb aangevinkt
    if (ckbRoker.checked){
        isroker += "een roker";
    } else {
        isroker += "geen roker";
    }
    console.log(isroker);

    //loopen over de array van aangevinkte talen
    //zet komma als het er meerdere zijn
    for (let i = 0; i<radiobuttons.length; i++){
        if (radiobuttons[i].checked){
            console.log(moedertaal + radiobuttons[i].value);
        }
    }

    //Buurland met switch functie
    switch (optieBuurland) {
        case "1":
            buurland += "Frankrijk";
            break;
        case "2":
            buurland += "Duitsland";
            break;
        case "3":
            buurland += "Nederland";
            break;
        default:
            buurland += "unknown";
    }
    console.log(buurland);

    //Bestelling met switch functie
    switch (selectFood) {
        case "1":
            bestelling += "aardappelen";
            break;
        case "2":
            bestelling += "brood";
            break;
        case "3":
            bestelling += "melk";
            break;
        case "4":
            bestelling += "biefstuk";
            break;
        case "5":
            bestelling += "chips";
            break;
        case "6":
            bestelling += "krant";
            break;
        default:
            bestelling += "unknown";
    }
    console.log(bestelling);
}

window.addEventListener("load", setup);
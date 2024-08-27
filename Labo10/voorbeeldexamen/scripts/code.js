let global = {
    spelers_namen: [],
    woorden: ['vives', 'tafel','hotel', 'olijf','stoel'],
    gokwoord: "",
    highscores: [],
    tijd: null,
    aantalKarakters: 5,
    maanden: ["Januarie","Februarie", "Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"]
};
let beurt = {
    naam: "",
    gokken: 0,
    date: null,
};
const setup = () => {
    //op examen handig te weten aha ben in die functie gekomen
    console.log("setup");
    //resotore():
    document.getElementById("nieuw").addEventListener("click", startGame);
    document.getElementById("clear").addEventListener("click", clear);

}

const clear = () => {
    console.log("clear");
    let highscores = document.getElementById("highscores").children;

    for (let i = 1; i < highscores.length; i++) {
        highscores[i].remove();
    }
}

const getName = () => {
    console.log("getName");
    //speler moet iets invullen !
    let newName = promptSpeler();
    let speler_naam = {
        name: newName,
    }
    global.spelers_namen.push(speler_naam);
}

const promptSpeler = () => {
    console.log("promptSpeler");
    let name = window.prompt("Naam speler: ");
    while (name === undefined || name === ""){
        name = window.prompt("Naam speler: ");
    }
    return name;
}

const startGame = () => {
    console.log("startGame");
    //verberg button
    document.getElementById("nieuw").setAttribute("class","hidden");
    getName();

    //woord is gekozen
    let gekozen_woord = kiesWoord();
    let txtBox = document.getElementById("gok");
    //gok is gedaan en gecheckt
    txtBox.focus();
    console.log(txtBox);
    document.getElementById("go").addEventListener("click", () => {
        validatePattern(gekozen_woord);
    });



}

const kiesWoord = () => {
    console.log("kiesWoord");
    let i = Math.floor(Math.random() * global.woorden.length - 1);
    return global.woorden[i];
}

const validatePattern = (woord) => {
    console.log("validatePattern");

    //controle iets ingevuld
    let gok = document.getElementById("gok").value;
    if (gok === ""){
        let message = "Error: Er werd geen woord ingevuld";
        console.log(message);
    }
    //controle #letters niet correct => er gebeurt niets
    if (gok.length <= 4 || gok.length > 5){
        let message = "Error: Het woord moet 5 karakters lang zijn";
        console.log(message);
    } else {
        //kijken welke letters overeenkomen
        evalueerGok(woord, gok);
    }
}

const evalueerGok = (woord, gok) => {
    console.log("evalueerGok")
    let div = document.createElement("div");
    let gokken = document.getElementById("gokken");
    let letterDiv;
    let aantalJuisteLetters = 0;

    //controleer of letter fout
    //controleer of letter voorkomt
    //controleer of letter op juiste plaats
    for (let i = 0; i < global.aantalKarakters; i++){
        let char = gok[i];
        let letter = woord[i];
        if (char === letter){
            letterDiv  = createLetter(char, "juist");
            aantalJuisteLetters++;
            if (woord.value === gok.value){
                gewonnen();
            }

        } else  if (woord.indexOf(char) !== -1){
            //het bestaat als verschillend van -1
            letterDiv = createLetter(char, "bevat");
        } else {
            letterDiv = createLetter(char,"fout");
        }
        div.appendChild(letterDiv);
    }
    gokken.appendChild(div);

}

const createLetter = (letter, status) => {
    console.log("createLetter");
    let div = document.createElement("div");
    div.classList.add(status);
    letter = letter.toUpperCase();
    let text = document.createTextNode(letter);
    div.appendChild(text);
    div.addEventListener("click",help);
    return div;
}


const help = (event) => {
    setTimeout(() => {doHelp(event)}, 2.5);

}

const doHelp = (event) => {
    let letter = event.target
    let help = document.getElementsByClassName("help");

    help[0].className = "help";
    letter.style.backgroundColor = "#0dcaf0";
    if (letter.className === "fout"){
        help[0].append(document.createTextNode("De letter " + letter + " komt niet voor."));
    } else if (letter.className === "bevat") {
        help[0].append(document.createTextNode("De letter" + letter + " komt voor, maar staat niet op de juiste plaats."));
    } else {
        help[0].append(document.createTextNode("De letter " + letter + " staat op de juiste plaats."));
    }
    help[0].append(text);
}
const gewonnen = () => {

    console.log("gewonnen");
    document.getElementById("btnGo").classList.add("hidden");
    document.getElementById("btnNieuw").classList.remove("hidden");
    beurt.dat = new Date();
    global.highscores.push(beurt);
    global.highscores.sort(compare);
    highscoreString = JSON.stringify(global.highscores);
    localStorage.setItem("highscores", highscoreString);
    maakScoreBord(global.highscores);

}

const compare = (a,b) => {
    return a.gokken - b.gokken;
}

const maakScoreBord = (highscoreList) => {
    let scorebord = document.getElementById("highscores");
    //maak pElement & textnode aan voor iedere highscore in highscoreList
    //sla h1 element over
    for (let i = 1; i < highscoreList.length; i++) {
        console.log(highscoreList[i]);
        /*let pElement = document.createElement("p");
    pElement.innerHTML = */
    }

}

window.addEventListener("load", setup);
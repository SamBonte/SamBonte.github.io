const setup = () => {
    document.getElementById("btnGo").addEventListener("click", validatePattern);
    loadLocalStorage();

};
/*Controleer of text voldoet aan pattern "\/[a-z]{1} [a-z]+"*/
const validatePattern = () => {
    let commandoInput = document.getElementById("txtCommando").value;
    //patroon
    let regex = commandoInput.match("\/[a-z]{1} [a-z]+");
    //controle iets ingevuld
    if (regex != null){
        //controle commando

            //controle geldige prefix google-yt-twitter-instagram
            if (commandoInput.slice(0,2) === "/g"){
                //open google search + maak card aan
                google(commandoInput.slice(3));
            } else if (regex[0].slice(0,2) === "/y"){
                //open yt search + maak card aan
                youtube(commandoInput.slice(3));
            } else if (regex[0].slice(0,2) === "/t"){
                //open twitter search + maak card aan
                twitter(commandoInput.slice(3));
            } else if(regex[0].slice(0,2) === "/i") {
                //open insta search + maak card aan
                instagram(commandoInput.slice(3));
            } else {
                window.alert("Unknown command prefix")
            }

            //textbox leeg maken
            commandoInput.value = "";

    } else {
        window.alert("Gelieve een geldig commando op te geven. Must contain: /x searchInput ");
    }
};

//telkens als er nieuw element bij moet komen
const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

//nieuw element bij moet komen + text
const createElementWithClassNameAndText = (element, className, text) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createLinkButton = (url) => {
    let goButton = document.createElement("a");
    goButton.setAttribute("href", url);
    goButton.setAttribute("target", "_blank");
    goButton.setAttribute("class", "btn btn-primary");
    goButton.appendChild(document.createTextNode("Go!"));

    return goButton;
};


// returns Array with cardElements
const createCardElementsAndAppend = (textH1, textP, url) => {
    //creates col & card
    let cardCol = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(textH1.toLowerCase()+"-card");
    //creates body + its content
    let cardBody = createElementWithClassName("div", "card-body");
    //content body
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", textH1);
    let cardText = createElementWithClassNameAndText("p", "card-text", textP);
    //knopje maken //voeg class toe aan button voor kleur
    let linkGo = createLinkButton(url);
    //voeg class toe aan button voor kleur
    linkGo.classList.add(textH1.toLowerCase()+"-button");

    let cardElements = [];
    cardElements.push(cardCol);
    cardElements.push(card);
    cardElements.push(cardBody);
    cardElements.push(cardTitle);
    cardElements.push(cardText);
    cardElements.push(linkGo);



    //voeg de card toe
    voegCardsToe(cardElements);
    //bewaar de obj in local storage


};

const voegCardsToe = (cardElements) => {
    //OPM zal de rij maar juist 3 elementen bevatten??



    //voeg aan body de content toe [title, text, linkGo]
    cardElements[2].appendChild(cardElements[3]);
    cardElements[2].appendChild(cardElements[4]);
    cardElements[2].appendChild(cardElements[5]);
    //voeg body toe aan de card
    cardElements[1].appendChild(cardElements[2]);
    //voeg card aan de col
    cardElements[0].appendChild(cardElements[1]);

    //wat doet dit ???
    let row = document.querySelector("#resultContainer > .row");
    row.appendChild(cardElements[0]);



};

const google = (searchInput) => {
    //url invullen en in new tab openen
    let url = "https://www.google.com/search?q="+searchInput;
    //wat doet '_balk' = om in new tab te openen
    window.open(url, '_blank');
    createCardElementsAndAppend("Google", searchInput, url);
    saveLocalStorge("Google", searchInput, url);
};

const youtube = (searchInput) => {
    //url invullen en in new tab openen
    let url = "https://www.youtube.com/results?search_query="+searchInput;
    //wat doet '_balk' = om in new tab te openen
    window.open(url, '_blank');
    createCardElementsAndAppend("Youtube", searchInput, url);
    saveLocalStorge("Youtube", searchInput, url);
};

const twitter = (searchInput) => {
    //url invullen en in new tab openen
    let url = "https://twitter.com/hashtag/"+searchInput;
    //wat doet '_balk' = om in new tab te openen
    window.open(url, '_blank');
    createCardElementsAndAppend("Twitter", searchInput, url);
    saveLocalStorge("Twitter", searchInput, url);
};

const instagram = (searchInput) => {
    //url invullen en in new tab openen
    let url = "https://www.instagram.com/explore/tags/"+searchInput+"/";
    //wat doet '_balk' = om in new tab te openen
    window.open(url, '_blank');
    createCardElementsAndAppend("Instagram", searchInput, url);
    createCardElementsAndAppend("Instagram", searchInput, url);
};

const saveLocalStorge = (title, commandoSuffix, url) => {
    let lsHistory;
    //maken obj aan
    let historyObject = {
        title: title,
        text: commandoSuffix,
        url: url
    };
    //string naar JSON obj
    lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if (!lsHistory){
        lsHistory = [];
    }
    //voeg obj toe aan de local history
    lsHistory.push(historyObject);
    //maak obj naar string
    localStorage.setItem("vives.be.history", JSON.stringify(lsHistory));
};

const loadLocalStorage = () => {


    let lsHistory = JSON.parse(localStorage.getItem("vives.be.history"));
    if (lsHistory){
        for (let i = 0; i<lsHistory.length; i++){

            createCardElementsAndAppend(lsHistory[i].title, lsHistory[i].text, lsHistory[i].url);
        }
    }
};

window.addEventListener("load", setup);
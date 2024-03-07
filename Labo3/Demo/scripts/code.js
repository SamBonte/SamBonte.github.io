const setup = () => {
    //Stap 1:  Eventhandlers schrijven
    //Zoek element met naam btnTry id => geen element in heel de pg. met = btnTry-id
    //getElementById = weet je zeker dat je maar 1 element terugkrijgt OPM: elemetnId nooit Array teruggeven
    let btnTry = document.getElementById("btnTry");

    //Event based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //
    document.getElementById("btnContent").addEventListener("click", changeContent);
}


// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
    console.log("function mouseHover succesfully executed ;)");
}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>"
}

// mouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

// change CSS
const withoutBullets = () => {
    console.log ("without");
    //listItems -> is een array ! Hier array met 3 <li>-elementen
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++){
        //1ste manier NT tenzij niet anders kan
        /*listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="cyan";*/
        //2de manier: geeft meneer voorkeur aan = proper, zelf nog class def. in css bestandje
        /*listItems[i].className = "listItemsStyleNone colorCyan"
        */
        //3de manier: de beste manier
        //vrgt aan eerste <li> geef je classes en zoek "xxx" en verwijder als gevonden, zoniet -> ga door met code
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorCyan");
        console.log("output " + listItems[i].className);

    }
}


const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++){
        //1ste manier NT tenzij niet anders kan
        /*listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";*/
        //2de manier: geeft meneer voorkeur aan = proper, zelf nog class def. in css bestandje
        /*listItems[i].className = "listItemsStyleDisc colorWhite"
        */
        //3de manier
        listItems[i].classList.remove("colorCyan");
        listItems[i].classList.remove("listItemsStyleNone");
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output " + listItems[i].className);
    }
}

// difference between textContent & innerHTML
const changeContent = () => {
    //textContent = voeg aan het element text toe
    // < converteert ie naar &lt;
    //element toevoegen niet als HTML mag worden
    document.getElementById("textContent").textContent = "<a href ='https://www.vives.be'>VIVES</a>";
    //innetHTML text ingeeft => zal browser inhoud interpreteren
    //aha = HTML linkje
    document.getElementById("innerHTML").innerHTML = "<a href ='https://www.vives.be'>VIVES</a>";
}

// window.addEventListener("load", setup); ALTIJD ONDERAAN !!!
window.addEventListener("load", setup);


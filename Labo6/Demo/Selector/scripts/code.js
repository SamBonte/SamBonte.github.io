const setup = () => {
    //let lstPar = document.getElementsByClassName("color");
    //query selectAll geeft alle elementen die aan ciriteria voldoen
    //krijgt collection terug
    //querySelector = eerste element die voldoet teruggeven
    let lstParDiv = document.querySelectorAll("#myDIV > .color");
    /*for (let i=0; i<lstPar.length; i++){
        lstPar[i].addEventListener("click", change);
    }*/

    for (let i=0; i<lstParDiv.length; i++){
        lstParDiv[i].addEventListener("click", changeDiv); //2 el gevonden
    }

}

const change = (e) => {
    e.target.className = "colorPar";
}

const changeDiv = (event) => {
    event.target.className = " colorPar";
}

window.addEventListener("load", setup);
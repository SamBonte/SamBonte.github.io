const setup = () => {
    let start = new Date(); //systeem datum = lokale machine
    console.log(start);
    //vandaag 19/04/2024 maak hier een datum-obj van
    //                          Y | M | D
    let datum = new Date(2024, 3, 19);
    console.log(datum);


    //dag van de week
    console.log((start.getDay()));

    //maand-jaar-dag | Maand 0-11 daarom +1 !!!
    console.log((start.getMonth()) + 1);

    console.log((start.getFullYear()));

    console.log((start.getDate()));

    //zelf formaat datum weergeven = gebruiksvriendelijker
    console.log(start.getDate() + "-"
                + (start.getMonth()+1) + "-"
                + start.getFullYear() + " " + start.getHours()
                + ":" + start.getMinutes() + ":" + start.getSeconds());

    let event = new Date();
    console.log("toString " + event.toString());

    /*ISO het is eerder een notatieconventie voor
    * het weergeven van tijdstippen*/
    console.log("toISOString " + event.toISOString());
    console.log("toDateString " + event.toDateString());
    console.log("toTimeString " + event.toTimeString());
    console.log("datumToISOString " + datum.toISOString());

    //hoeveel dagen ben je oud rond de 7000
    // "25/09/2005" 9-1 = 8, want januarie = 0.
    let geboorteDatum = new Date(2005, 8, 25);
    let systeemDatum = new Date();
    let birthDay = geboorteDatum.getDay();
    let dagen = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saterday"];
    let gevonden = false;
    for (let i = 0; i < dagen.length; i++ && !gevonden) {
        if (birthDay === i){
            birthDay = dagen[i];
            gevonden = true;
        }
    }
    //aantal milliseconden alive = ms
    let aantalMsAlive = systeemDatum - geboorteDatum;
    //milliseconden naar een dag = 1000 * 60 * 60 * 24
    let oneDay = 1000 * 60 * 60 * 24;
    let aantalDagenAlive = aantalMsAlive/(oneDay);
    console.log("aantal dagen bestaat: ", parseInt(aantalDagenAlive.toString()));
    //op welke dag geboren ?
    console.log("Day of birth: ",birthDay);




}
window.addEventListener("load", setup);
const setup = () => {
    //getallen in code steken NOOIT doen, beter in constanten

    let x,y;

    let symbol = "";
    let kerstbal = "o";

    const height = 6;
    let lijnkerstbal = 3;

    let plaatsKerstbalBreedte = [2,1,3,2,1,3,2];
    let z = 0;


    for (x=1; x <= height; x++){ //hoogte
        for (y=1; y <= x; y++){ //breedte

            /*if ((x === 3 && y === 2) ||
                (x === 4 && (y === 1)) ||
                (x === 4 && (y === 1 || y === 4)) ||
                (x === 5 && (y === 3)) ||
                ((y === 2 || x === y)  && x === 6)) {
                symbol += kerstbal;*/
            if(x >= 2 && y === plaatsKerstbalBreedte[z]){
                symbol += kerstbal;
                z++;
            } else if (x === height && y === height){
                symbol += kerstbal;
            } else {
                symbol += "*";
            }


        }


        console.log(symbol);
        symbol = "" // clear voor volgende loop in hoogte !!!
    }
}

window.addEventListener("load", setup);
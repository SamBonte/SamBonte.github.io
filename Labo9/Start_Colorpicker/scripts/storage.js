

const storeSliderValues = () => {
    //lees waarden sliders uit
    let redSlider = document.getElementById("sldRed");
    let greenSlider = document.getElementById("sldGreen");
    let blueSlider = document.getElementById("sldBlue");

    let settingsSlider = {};
    let settingsSliderJSON;

    //stop ze in het object settingsSlider
    settingsSlider.redSlider = parseInt(redSlider.value);
    settingsSlider.greenSlider = parseInt(greenSlider.value);
    settingsSlider.blueSliderr = parseInt(blueSlider.value);

    //maak het JSON object string
    settingsSliderJSON = JSON.stringify(settingsSlider);
    localStorage.setItem("VIVES.be.settingsSlider", settingsSliderJSON);

};

const restoreSliderValues = () => {
    //opvragen
    let settingsSlider;
    let settingsSliderJSON = localStorage.getItem("VIVES.be.settingsSlider");

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage

    //bestaat ?
    if (settingsSliderJSON === undefined) {
        settingsSlider = {
            redSlider: 0,
            greenSlider: 0,
            blueSlider: 0
        };
    } else {
        //parsen
        settingsSlider = JSON.parse(settingsSliderJSON);
    }

    // vul de invoervelden met de settings-waarden | ophalen
    document.getElementById("sldRed").value = settingsSlider.redSlider;
    document.getElementById("sldGreen").value = settingsSlider.greenSlider;
    document.getElementById("sldBlue").value = settingsSlider.blueSliderr;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatchComponents = document.getElementsByClassName("swatch");
    let kleurinfoSwatch = [];
    let settingsSwatchJSON;
    //rekent box in section colorpicker ook als swatch. OPL ? starten bij 1
    for (let i = 1; i < swatchComponents.length; i++) {
        let swatch = {};
        swatch.red = parseInt(swatchComponents[i].getAttribute("data-red")) ;
        swatch.green = parseInt(swatchComponents[i].getAttribute("data-green"));
        swatch.blue = parseInt(swatchComponents[i].getAttribute("data-blue"));

        kleurinfoSwatch.push(swatch);

    }

    settingsSwatchJSON = JSON.stringify(kleurinfoSwatch);
    localStorage.setItem("VIVES.be.settingsSwatch", settingsSwatchJSON);

};

const restoreSwatches = () => {
    //opvragen
    let kleurinfoSwatch;
    let settingsSwatchJSON = localStorage.getItem("VIVES.be.settingsSwatch");

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage

    //bestaat ?
    if (!settingsSwatchJSON !== undefined){
        kleurinfoSwatch = JSON.parse(settingsSwatchJSON);
        for (let i = 0; i < kleurinfoSwatch.length; i++) {
            addSwatchComponent(kleurinfoSwatch[i].red, kleurinfoSwatch[i].green, kleurinfoSwatch[i].blue);
        }
    }
};

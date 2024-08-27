

/*toon geselecteerde image groot*/
const showImage = () => {
    console.log("showImage");

    // PART 1: Toon selected img als mainPhoto

    let largeImagePrefix = "photos/"
    let largeImageSuffix = "%20large.jpg";


    /*groote foto site*/
    let mainPhoto = document.getElementById("mainPhoto");
    /*geklikt thumb element*/
    let selectedImg = event.target;
    let selectedImgNumber = (parseInt(selectedImg.id) + 1).toString();

    let largeImageNumber;
    /*verander de mainPhoto naar geselcteerde image*/
    // Kijken of we een 0 ervoor moeten plaatsen om aan bv. 01%20large.jpg te komen
    if (selectedImgNumber.length === 1){
        largeImageNumber = "0" + selectedImgNumber;
    } else {
        largeImageNumber = selectedImgNumber;
    }
    mainPhoto.src = largeImagePrefix + largeImageNumber + largeImageSuffix;
    changeToCorrectAlt(mainPhoto, (parseInt(selectedImg.id) + 1));

    console.log("part 1 succes");

    // PART 2: pas counter aan afhankelijk van het id van de geselecteerde image
    let counter = document.getElementById("counter");
    let numberOfThumb = (parseInt(selectedImg.id) + 1);

    counter.textContent = numberOfThumb.toString() + " of 11";

    console.log("part 2 succes");
    // PART 3: Toon oranje lijntje bij geklikte afbeelding
    let newActiveThumb = document.getElementById(selectedImg.id);
    let formerActiveThumb = document.getElementsByClassName("activeThumbnail");
    formerActiveThumb[0].className = "thumbnail";
    newActiveThumb.className += " activeThumbnail";

    console.log("part 3 succes");
    /* PART 4: Toon juiste copyright per afbeelding*/

    /*ipv a_Herexamen/CNN..... etc. thumbs/01 large.jpg*/
    /*ipv %20large.jpg <spatie>large.jpg om volledige overeenkomst met urlFull in gallerydata.js*/
    let largeImageSuffixAlt = " large.jpg";
    let fullUrlThumbSelectedImage = largeImagePrefix + largeImageNumber + largeImageSuffixAlt;
    showCorrectCopyRight(fullUrlThumbSelectedImage);

    /* PART 5: Toon juiste beschrijving per afbeelding*/
    showCorrectDescription(fullUrlThumbSelectedImage);

}


/*veranderen alt naar correct alt op basis van het id*/
const changeToCorrectAlt = (mainPhoto, thumbNumber) => {
    console.log("changeToCorrectAlt");

    let alt = " photo"
    switch (thumbNumber){
        case 1:
            alt = "first" + alt
            break;
        case 2:
            alt = "second" + alt
            break;
        case 3:
            alt = "third" + alt
            break;
        case 4:
            alt = "fourth" + alt
            break;
        case 5:
            alt = "fith" + alt
            break;
        case 6:
            alt = "sixth" + alt
            break;
        case 7:
            alt = "seventh" + alt
            break;
        case 8:
            alt = "eigth" + alt
            break;
        case 9:
            alt = "ninth" + alt
            break;
        case 10:
            alt = "tenth" + alt
            break;
        case 11:
            alt = "eleventh" + alt
            break;
        default:
            window.alert("Error there is no more than 11 images");
    }

    mainPhoto.alt = alt;
}

const showCorrectCopyRight = (fullUrlThumbSelectedImage) => {
    console.log("showCorrectCopyRight");
    let copyrightParagraph = document.getElementById("copyright");

    /*We zorgen dat de copyright ook aangepast wordt*/
    for (let i = 0; i < galleryData.length; i++) {

        if (fullUrlThumbSelectedImage === galleryData[i].urlFull){

            let strongEl = document.createElement("strong");
            let strongElTextNode = document.createTextNode("Photos: ");
            let paragraphTextNode = document.createTextNode(galleryData[i].copyright);
            strongEl.appendChild(strongElTextNode);


            /*verwijder strong element & textNode van copyrightParagraph*/
            copyrightParagraph.children[0].remove();
            copyrightParagraph.innerText = "";
            /*Voeg nieuwe element & textNode terug toe*/
            copyrightParagraph.appendChild(strongEl);
            copyrightParagraph.append(paragraphTextNode);
        }
    }
}

const showCorrectDescription = (fullUrlThumbSelectedImage) => {
    console.log("showCorrectDescription");

    let descriptionParagraph = document.getElementById("description");
    for (let i = 0; i < galleryData.length; i++) {

        if (fullUrlThumbSelectedImage === galleryData[i].urlFull) {
            descriptionParagraph.innerHTML = galleryData[i].description;
        }

    }
}


const setup = () => {
    console.log("setup");

    let thumbnails = document.getElementById("thumbnails");

    //voor elk img in thumbnails add event-listener
    let smallImages = thumbnails.children[1].children;
    for (let i = 0; i < smallImages.length; i++) {
        smallImages[i].addEventListener("click", (event) => {showImage();});
    }


    console.log(smallImages);
};

window.addEventListener("load", setup);
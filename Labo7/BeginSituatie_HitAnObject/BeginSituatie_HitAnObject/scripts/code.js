let global = {
    IMAGE_COUNT: 5, //aantal images
    IMAGE_SIZE: 48, //groote ieder image
    DEFAULT_LEFT: "0px", //default position left
    DEFAULT_TOP: "60px",
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000, //snelheid van het verplaatsen van de images
    RESTART_DELAY: 3000,

    HIGH_SCORE: 0, //hoogst score

    score: 0, //aantal hits
    timerId: 0,
};
const setup = () => {
    document.getElementById("highScoreTekst").style.display = "none";
    document.getElementById("btnStart")
        .addEventListener("click", removeStartButton);

};
//btnStart clicked = remove button en start game
const removeStartButton = () => {
    document.getElementById("highScoreTekst").style.display = "";
    let btnStart = document.getElementById("btnStart");
    btnStart.style.display = "none";
    startGame();
};
const startGame = () => {
    //verplaats image, en als er op geklikt wordt controleer of bom

    moveImage();
    document.getElementById("target")
        .addEventListener("click", controle);
};

const moveImage = () => {


    let nummer = Math.floor(Math.random() * global.IMAGE_COUNT);
    let target = document.getElementById("target");
    target.src = global.IMAGE_PATH_PREFIX + nummer.toString() + global.IMAGE_PATH_SUFFIX;


    //verplaats image
    let speelveld=document.getElementById("playField");

    let maxLeft = speelveld.clientWidth - global.IMAGE_SIZE;
    let maxHeight = speelveld.clientHeight - global.IMAGE_SIZE;
    //verplaatsen image
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    target.style.left = left+"px";
    target.style.top = top+"px";


    //bepalen image bom of niet ?
    if (nummer === 0){
        target.className = "bom";

    } else {
        //geen bom geen klasse toevoegen
        target.className = "";
    }
    clearTimeout(global.timerId);
    global.timerId = setTimeout(moveImage,global.MOVE_DELAY);
};

const controle = (event) => {
    //welke image heeft het veroorzaakt ?
    console.log(event);
    let aantalHits = document.getElementsByClassName("score")[0];
    let highScore = document.getElementById("highScore");
    if (event.target.className === "bom"){
        stop();
    } else{
        global.score++;
        if(global.score > global.HIGH_SCORE){
            global.HIGH_SCORE = global.score;
            highScore.textContent = global.HIGH_SCORE;

        }
        aantalHits.innerHTML = global.score;
        moveImage();
    }
};

//als image 0 geclickt
const stop = () => {
    //stop timer
    clearInterval(global.timerId);
    window.alert("Game over. BAM !!!");
    restart();




};

const restart = () => {
    //score = 0,button terug zichtbaar
    global.score = 0;
    //document.getElementById("highScoreTekst").style.display = "none";
    let aantalHits = document.getElementsByClassName("score")[0];
    aantalHits.textContent = global.score;
    document.getElementById("highScoreTekst").style.display = "none";
    document.getElementById("btnStart").style.display = "";
    document.getElementById("target").style.left = global.DEFAULT_LEFT;
    document.getElementById("target").style.top = global.DEFAULT_TOP;
};




window.addEventListener("load", setup);



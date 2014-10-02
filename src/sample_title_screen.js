/**
 * Created by Student on 9/24/2014.
 */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 750;
document.body.appendChild(canvas);


var canvas2 = document.createElement("canvas2");
var ctx2 = canvas.getContext("2d");
canvas2.width = 1000;
canvas2.height = 500;
document.body.appendChild(canvas2);

// menu background
var backReady = false;
var backImage = new Image();
backImage.onload = function () {
    backReady = true;
};

backImage.src = "Art_Assets/main_menu/bkg_start2.png";


//temp mouse calibration tool, DO NOT KEEP v !!!!!!!!!!!!!!!!!!!!!!!
var posReady = false;
var posImage = new Image();
posImage.onload = function () {
    posReady = true;
};
//posImage.src = "C:/Github/scootlife/Art_Assets/main_menu/position test.png";
//temp mouse calibration tool, DO NOT KEEP ^ !!!!!!!!!!!!!!!!!!!!!!!


//start button
var startReady = false;
var startImage = new Image();
startImage.onload = function () {
    startReady = true;
};

startImage.src = 'Art_Assets/main_menu/btn_play.png';


//start button hover
var startHReady = false;
var startHImage = new Image();
startHImage.onload = function () {
    startHReady = true;
};

startHImage.src = 'Art_Assets/main_menu/btn_playh.png';

// PUT IN A NEW FILE HERE ^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//credit button
var creditReady = false;
var creditImage = new Image();
creditImage.onload = function (){
    creditReady = true;
}

creditImage.src = 'Art_Assets/main_menu/btn_help.png';


//credit button hover
var creditHReady = false;
var creditHImage = new Image();
creditHImage.onload = function (){
    creditHReady = true;
}

creditHImage.src = 'Art_Assets/main_menu/btn_helph.png';

// PUT IN A NEW FILE HERE ^ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//credits
var creditsReady = false;
var creditsImage = new Image();
creditsImage.onload = function (){
    creditsReady = true;
}

creditsImage.src = 'Art_Assets/credits.png';
/*
//workstation: saw Image
var sawReady = false;
var sawImage = new Image();
sawImage.onload = function (){
    sawReady = true;
}*/

/*
sawImage.src = 'Art_Assets/game_screen/workstation.png';

//workstation: drill Image
var drillReady = false;
var drillImage = new Image();
drillImage.onload = function (){
    drillReady = true;
}

drillImage.src = 'Art_Assets/game_screen/workstation.png';
*/


//gameScreen Image
var gameScreenReady = false;
var gameScreenImage = new Image();
gameScreenImage.onload = function (){
    gameScreenReady = true;
}

gameScreenImage.src = 'Art_Assets/game_screen/Colabrative Layout copy.png';

/*
var sawStation =function(){
    x=100,
    y=100,
    h=64,
    w=128,
    hover=false
};*/




var clickable = function(x,y,h,w,src){
    this.x=x;
    this.y=y;
    this.h=h;
    this.w=w;
    this.hover=false;
    this.ready=false;
    this.image=new Image();
    this.image.onload= function(){
        this.ready=true;
    }
    this.image.src=src;
    //findSrc(tote,src);
};
var ready = function(object){
    object.ready=true;
}

/*
var findSrc =function(tote,src){
    tote.image.onload= function(){
        toat.ready=true;
    }
    tote.image.src=src;
}*/


var sawStation= new clickable(100,100,64,128,'Art_Assets/game_screen/workstation.png');
sawStation.image.onload=ready(sawStation);
//var drillStation =clickable(140,100,64,128);

/*var sawStation ={
    x:100,
    y:100,
    h:64,
    w:128,
    hover:false
};

var drillStation ={
    x:100,
    y:100,
    h:64,
    w:128,
    hover:false
};*/

var startBtn = {
    x:50,
    y:50,
    h:65,
    w:160,
    hover:false
};
var creditBtn={
    x:50,
    y:150,
    h:65,
    w:160,
    hover:false
};
var posx;
var posy;

var currentScreen= "mainMenu";

var viewCredits=false;
var playGame=false;
var startScreen=true;


var updateRate=0;
var update = function(modifier){
    if(updateRate==60)
        updateRate=0;
    ++updateRate;

    contact(startBtn);
    contact(creditBtn);
    contact(sawStation);


};




// checks if mouse is touching something
var contact = function(button){

    if(posx>=button.x&&
        posx<=button.w+button.x&&
        posy>=button.y&&
        posy<=button.h+button.y) {
        button.hover=true;
    }
    else
        button.hover=false;
}



var render = function(){

    if(currentScreen=="mainMenu") {
        if (backReady)
            ctx.drawImage(backImage, 0, 0, 750, 750);
        if (startBtn.hover == false)
            if (startReady)
                ctx.drawImage(startImage, startBtn.x, startBtn.y, startBtn.w, startBtn.h);
        if (startBtn.hover == true)
            if (startHReady)
                ctx.drawImage(startHImage, startBtn.x, startBtn.y, startBtn.w, startBtn.h);

        if (creditBtn.hover == false)
            if (creditReady)
                ctx.drawImage(creditImage, creditBtn.x, creditBtn.y, creditBtn.w, creditBtn.h);
        if (creditBtn.hover == true)
            if (creditHReady)
                ctx.drawImage(creditHImage, creditBtn.x, creditBtn.y, creditBtn.w, creditBtn.h);

        if (viewCredits == true)
            if (creditHReady)
                ctx.drawImage(creditsImage, 0, 0);
    }


    //factory background layer (Left window)
    if(playGame==true) {
        if (gameScreenReady)
            ctx2.drawImage(gameScreenImage,0,0,960,1080, 0, 0, 750, 750);

        if (sawStation.ready&&sawStation.hover)
            ctx2.drawImage(sawStation.image, sawStation.x,sawStation.y,sawStation.w,sawStation.h);

        if (sawStation.ready&&!sawStation.hover)
            ctx2.drawImage(sawStation.image, sawStation.x,sawStation.y+6,sawStation.w,sawStation.h);
    }

   // if(posReady)
    //    ctx.drawImage(posImage,431,72);

    ctx.fillText("x: "+posx,100,400);
    ctx.fillText("y: "+posy,100,415);

}

var tracker = function (e){
    var pos = getMousePos(canvas,e);
    posx = pos.x;
    posy = pos.y;
}

function getMousePos(canvas,evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

canvas.addEventListener('click', onClick, false);

function onClick(evt){
    if(viewCredits) {
        viewCredits = false;
        startScreen = true;
    }
    else if(creditBtn.hover&&startScreen) {
        viewCredits = true;
        startScreen = false;
    }
    else if(startBtn.hover&&startScreen) {
        playGame = true;
        startScreen = false;

    }

}




var main = function () {
    var now = Date.now();
    var delta = now - then;

    window.addEventListener('mousemove', tracker, false);

    update(delta / 1000);
    render();
    then = now;
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
main();
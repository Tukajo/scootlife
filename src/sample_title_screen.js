/**
 * Created by Student on 9/24/2014.
 */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 750;
canvas.height = 750;
document.body.appendChild(canvas);





var canvas2 = document.createElement("canvas2");
var ctx2 = canvas.getContext("2d");
canvas2.width = 750;
canvas2.height = 750;
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
var viewCredits=false;


var updateRate=0;
var update = function(modifier){
    if(updateRate==60)
        updateRate=0;
    ++updateRate;

    contact(startBtn);
    contact(creditBtn);




};

// checks if mouse is touching something
var contact = function(button){

    if(posx>=button.x&&
        posx<=button.w+button.x&&
        posy>=button.y&&
        posy<=button.h+button.y)
    {
        button.hover=true;
    }
    else
        button.hover=false;
}

var render = function(){

    if (backReady)
        ctx.drawImage(backImage,0,0,750,750);


    if(startBtn.hover==false)
        if(startReady)
            ctx.drawImage(startImage,startBtn.x,startBtn.y,startBtn.w,startBtn.h);
    if(startBtn.hover==true)
        if(startHReady)
            ctx.drawImage(startHImage,startBtn.x,startBtn.y,startBtn.w,startBtn.h);

    if(creditBtn.hover==false)
        if(creditReady)
            ctx.drawImage(creditImage,creditBtn.x,creditBtn.y,creditBtn.w,creditBtn.h);
    if(creditBtn.hover==true)
        if(creditHReady)
            ctx.drawImage(creditHImage,creditBtn.x,creditBtn.y,creditBtn.w,creditBtn.h);

    if(viewCredits==true)
        if(creditHReady)
            ctx.drawImage(creditImage,0,0);

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
    var rect = canvas.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    console.log('X:pos = ' + x + ' Y:pos = ' + y);

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
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



var gameObject = function(x,y,h,w,src,altSrc){
    this.x=x;
    this.y=y;
    this.h=h;
    this.w=w;
    this.hover=false;
    this.ready=false;
    this.readyAlt=false;
    this.image=new Image();

    this.image.src=src;
    if(altSrc==0)
        this.imageAlt=this.image;
    else{
        this.imageAlt= new Image();
        this.imageAlt.src=altSrc;


    }

};
var ready = function(object){
    object.ready=true;
}
var readyAlt = function(object){
    object.readyAlt=true;
}
var loadImg = function (object){
    object.image.onload=ready(object);
    object.imageAlt.onload=readyAlt(object);
}


//declaring all game objects
var sawStation= new gameObject(100,100,64,128,'Art_Assets/game_screen/workstation.png',0);
loadImg(sawStation);

var gameScreen= new gameObject(0,0,750,1500,'Art_Assets/game_screen/Colabrative Layout copy.png',0);
loadImg(gameScreen);

var menu= new gameObject(0,0,750,750,'Art_Assets/main_menu/bkg_start2.png',0);
loadImg(menu);

var startBtn= new gameObject(50,50,65,160,'Art_Assets/main_menu/btn_play.png','Art_Assets/main_menu/btn_playh.png');
loadImg(startBtn);

var creditBtn= new gameObject(50,150,65,160,'Art_Assets/main_menu/btn_help.png','Art_Assets/main_menu/btn_helph.png');
loadImg(creditBtn);

var credits= new gameObject(0,0,750,750,'Art_Assets/credits.png',0);
loadImg(credits);


var posx;
var posy;

var currentScreen= "mainMenu";

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
        draw(ctx,menu,0,0);
        draw(ctx,startBtn,0,0);
        draw(ctx,creditBtn,0,0);
    }

    if (currentScreen=="credits")
        ctx.drawImage(credits.image,0,0);
    //    draw(ctx,credits,0,0);

    //factory background layer (Left window)
    if(currentScreen=="factory") {
       // if (gameScreen.ready) //half of sceen
           // ctx2.drawImage(gameScreen.image,0,0,960,1080, 0, 0, 750, 750);

        draw(ctx2,gameScreen,0,0); //entire screen

        draw(ctx2,sawStation,3,-3);

    }

    ctx.fillText("x: "+posx,100,400);
    ctx.fillText("y: "+posy,100,415);

}

var draw = function(canvas,object,xDis,yDis){
    if(object.ready&&!object.hover)
    canvas.drawImage(object.image, object.x,object.y,object.w,object.h);
    if(object.readyAlt&&object.hover)
        canvas.drawImage(object.imageAlt, object.x+xDis,object.y+yDis,object.w,object.h);
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
    if(currentScreen=="credits") {
        currentScreen="mainMenu";
    }
    else if(creditBtn.hover&&currentScreen=="mainMenu") {
        currentScreen="credits";
    }
    else if(startBtn.hover&&currentScreen=="mainMenu") {
        currentScreen="factory";

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
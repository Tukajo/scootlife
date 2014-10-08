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

var workStation= function(src,altSrc,subScreen){
    this.subScreen=subScreen;
    this.x=0;
    this.y=0;
    this.h=64;
    this.w=128;
    this.hover=false;
    this.drag=false;
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

var stationPos =  function(x,y){
    this.x=x;
    this.y=y;
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

var position = [new stationPos(95,170),new stationPos(310,170),new stationPos(525,170),
                new stationPos(95,290),new stationPos(310,290),new stationPos(525,290),
                new stationPos(95,420),new stationPos(310,420),new stationPos(525,420)];

//declaring all game objects
/*
    right now you must declare the gameObject, call loadImg(), call contact(), and call draw() manually

 */

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



// 9 work stations
var sawStation= new workStation('Art_Assets/game_screen/workstation.png',0,"sawView");
loadImg(sawStation);

var drillStation= new workStation('Art_Assets/game_screen/workstation.png',0,"drillView");
loadImg(drillStation);

var bendStation= new workStation('Art_Assets/game_screen/workstation.png',0,"bendView");
loadImg(bendStation);

var weldStation= new workStation('Art_Assets/game_screen/workstation.png',0,"weldView");
loadImg(weldStation);

var grindStation= new workStation('Art_Assets/game_screen/workstation.png',0,"grindView");
loadImg(grindStation);

var paintStation= new workStation('Art_Assets/game_screen/workstation.png',0,"paintView");
loadImg(paintStation);

var assemblyStation= new workStation('Art_Assets/game_screen/workstation.png',0,"assemblyView");
loadImg(assemblyStation);

var fabricStation= new workStation('Art_Assets/game_screen/workstation.png',0,"fabricView");
loadImg(fabricStation);

var sewingStation= new workStation('Art_Assets/game_screen/workstation.png',0,"sewingView");
loadImg(sewingStation);

var station = [ sawStation,drillStation,bendStation,
                weldStation,grindStation,paintStation,
                assemblyStation,fabricStation,sewingStation];



for(var i=0; i<9; i++){
station[i].position=i;
}


var desk= new gameObject(250,550,128,256,'Art_Assets/game_screen/desk.png',0);
loadImg(desk);

var office=new gameObject(750,0,750,750,'Art_Assets/game_screen/office.png',0);
loadImg(office);


var posx;
var posy;

var currentScreen= "mainMenu";
var subScreen="null";

var updateRate=0;



var update = function(modifier) {


    if (updateRate == 60)
        updateRate = 0;
    ++updateRate;

    contact(startBtn);
    contact(creditBtn);
    contact(desk);


    for (var i = 0; i < 9; i++) {
        for (var a = 0; a < 9; a++) {
            if (station[i].position == a) {
                station[i].x=position[a].x;
                station[i].y=position[a].y;
            }
        }
    }
    for (var i = 0; i < 9; i++) {
        contact(station[i]);
    }
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
       //if (gameScreen.ready) //half of sceen
         //  ctx2.drawImage(gameScreen.image,0,0,960,1080, 0, 0, 750, 750);

        draw(ctx2,gameScreen,0,0); //entire screen
        //ctx2.drawImage(station[0].image,station[0].x,station[0].y,100,200);

        for(var i=0;i<9;i++){
            draw(ctx2,station[i],3,-3);
            //if(station[i].ready&&station[i].hover==false)
             //   ctx2.drawImage(station[i].image,station[i].x,station[i].y,station[i].w,station[i].h);
            //if(station[i].readyAlt&&station[i].hover)
              //  ctx2.drawImage(station[i].imageAlt,station[i].x+3,station[i].y-3,station[i].w,station[i].h);
        }
        //draw(ctx2,sawStation,3,-3);
        //draw(ctx2,drillStation,3,-3);
        draw(ctx2,desk,3,-3);
        if(subScreen=="office")
            draw(ctx2,office,0,0);

        if(subScreen!="office"&&subScreen!="leanTools"&&subScreen!="monthlyReport"&&subScreen!="calendar"){
            ctx.fillText(subScreen,850,400);

        }



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
        subScreen="null"
    }
    else if(currentScreen=="mainMenu") {
        if(creditBtn.hover)
            currentScreen="credits";
        else if(startBtn.hover) {
            currentScreen = "factory";
            subScreen="null";// Make this office in full game
        }
    }
    else if(currentScreen=="factory") {
        for(var i=0; i<9;i++){
            if(station[i].hover){
                subScreen=station[i].subScreen;
            }
        }
        if(desk.hover) {
            currentScreen = "factory";
            subScreen = "office";
        }
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
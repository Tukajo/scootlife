/**
 * Created by Student on 9/24/2014.
 */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.border=0;
canvas.top=0;
canvas.left=0;
canvas.width = 1550;
canvas.height = 750;
document.body.appendChild(canvas);
var ctx2 = canvas.getContext("2d");
var monthsArray = {January: "January", February: "February", March: "March", April: "April", May: "May", June: "June", July: "July", August: "August", September: "September", October: "October", November: "November", December: "December"};
var currentMonth = monthsArray.January;
var monthCounter = 0;

/*
var canvas2 = document.createElement("canvas");
var ctx2 = canvas.getContext("2d");
canvas2.top=0;
canvas2.left=0;
canvas2.width = 1550;
canvas2.height = 750;
document.body.appendChild(canvas2);

var background = document.createElement("canvas");
var ctx3 = background.getContext("2d");
background.left=-3;
background.top=-3;
background.width = 1000;
background.height = 500;
document.body.appendChild(background);
*/

var workStation= function(src,altSrc,subScreen,p, pTwo, pThree, pFour){
    this.problem=p;
    this.problemTwo=pTwo;
    this.problemThree=pThree;
    this.problemFour=pFour;
    this.subScreen=subScreen;
    this.x=0;
    this.y=0;
    this.h=128;
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

var position = [new stationPos(95,60),new stationPos(310,60),new stationPos(525,60),
                new stationPos(95,248),new stationPos(310,248),new stationPos(525,248),
                new stationPos(95,436),new stationPos(310,436),new stationPos(525,436)];

//declaring all game objects
/*
    right now you must declare the gameObject, call loadImg(), call contact(), and call draw() manually

 */

var gameScreen= new gameObject(0,0,750,750,'Art_Assets/game_screen/workstation_view.png',0);
loadImg(gameScreen);

var stationView= new gameObject(750,0,750,750,"Art_Assets/game_screen/Right_Side_Background.png",0);
loadImg(stationView);

var sawView= new gameObject(800,250,480,700,"Art_Assets/game_screen/Saw_Right_Table.png",0);
loadImg(sawView);

var border= new gameObject(-3,-3,780,1500,"Art_Assets/game_screen/background.png",0);
loadImg(border);
var barX=400;
var barY=600;

var loadingPeg= function(x){
    this.x=x;
    this.y=600;
    this.h=100;
    this.w=50;
    this.hover=false;
    this.ready=false;
    this.readyAlt=false;
    this.image=new Image();
    this.image.src="Art_Assets/game_screen/loading_peg.png";
    this.imageAlt=this.image;

}


// Creating loading bar & length
var startingX=400;
var loadingBar=[];
for(var i=0;i<9;i++){
    var x=new loadingPeg(startingX+50*i);
    loadImg(x);
    loadingBar[i]=x;
}

//problem list function
var problem= function(name,state){
    this.y;
    this.name=name;
    this.state=state;
    this.daysDown;
};

// problem list array


 var problemList=[new problem("Saw down due to late tubes",false),
    new problem("Saw down due to machine breakdown",false),
    new problem("Drill press down due to late parts from Saw",false),//drill
    new problem("Drill press down due to machine breakdown",false),
    new problem("Drill press down due to quality problem",false),
    new problem("Tube Bender down due to late parts from drill",false),//bender
    new problem("Tube Bender down due to machine breakdown",false),
    new problem("Tube Bender down due to quality problem",false),
    new problem("Tube Bender down due to bad parts from Drill press",false),
    new problem("Welding down due to late parts from Drill press",false),//welder
    new problem("Welding down due to machine breakdown",false),
    new problem("Welding down due to quality problem",false),
    new problem("Grinder down due to late parts from Welding",false),//grinder
    new problem("Grinder down due to bad parts from Welding",false),
    new problem("Paint booth down due to late parts from Grinder",false),//paint
    new problem("Paint booth down due to machine breakdown",false),
    new problem("Paint booth down due to bad parts from Welding",false),
    new problem("Fabric cutter down due to late nylon",false),//cutter
    new problem("Sewing down due to late parts from Fabric cutter",false),//sewing
    new problem("Sewing down due to machine breakdown",false),
    new problem("Sewing down due to quality problem",false),
    new problem("Assembly down due to late parts from Sewing",false),//assembly
    new problem("Assembly down due to late parts from Paint booth",false),
    new problem("Assembly down due to quality problem",false)];



var menu= new gameObject(0,0,750,750,'Art_Assets/main_menu/bkg_start2.png',0);
loadImg(menu);

var startBtn= new gameObject(50,50,65,160,'Art_Assets/main_menu/btn_play.png','Art_Assets/main_menu/btn_playh.png');
loadImg(startBtn);

var creditBtn= new gameObject(50,150,65,160,'Art_Assets/main_menu/btn_help.png','Art_Assets/main_menu/btn_helph.png');
loadImg(creditBtn);

var credits= new gameObject(0,0,750,750,'Art_Assets/credits.png',0);
loadImg(credits);


///////////////////////////////////////////////// v   Replace image for each button
//Office screen buttons
var closeBtn=new gameObject(1375,75,80,80,'Art_Assets/game_screen/calendarBtn_temp.png',0);
loadImg(closeBtn);

var reportBtn=new gameObject(1000,550,80,80,'Art_Assets/game_screen/reportBtn_temp.png',0);
loadImg(reportBtn);

var leanToolsBtn=new gameObject(780,100,300,300,'Art_Assets/game_screen/lean_toolsBtn_temp.png',0)
loadImg(leanToolsBtn);

var calendarBtn=new gameObject(1300,550,100,100,'Art_Assets/game_screen/calendarBtn_temp.png',0)
loadImg(calendarBtn);
//var calendarBtn = new gameObject()

var nextMonthBtn = new gameObject(1350, 600,100,100,'Art_Assets/game_screen/calendarBtn_temp.png',0);
loadImg(nextMonthBtn);


//Office screen views
var leanToolsView= new gameObject(770,20,710,710,"Art_Assets/game_screen/lean_tools_view.png",0);
loadImg(leanToolsView);

var reportView= new gameObject(770,20,710,710,"Art_Assets/game_screen/report_view.png",0);
loadImg(reportView);

var calendarView= new gameObject(770,20,710,710,"Art_Assets/game_screen/Calendar.png",0);
loadImg(calendarView);





///////////////////////////////////////   v   Replace image for each workstation

// 9 work stations
var sawStation= new workStation('Art_Assets/workshop_icons/icon_saw.png',0,"sawView",problemList[0],problemList[1],0,0);
loadImg(sawStation);

var drillStation= new workStation('Art_Assets/workshop_icons/icon_drill.png',0,"drillView",problemList[2],problemList[3],problemList[4],0);
loadImg(drillStation);

var bendStation= new workStation('Art_Assets/workshop_icons/icon_bender.png',0,"bendView",problemList[5],problemList[6],problemList[7],problemList[8]);
loadImg(bendStation);

var weldStation= new workStation('Art_Assets/workshop_icons/icon_welder.png',0,"weldView",problemList[9],problemList[10],problemList[11],0);
loadImg(weldStation);

var grindStation= new workStation('Art_Assets/workshop_icons/icon_grinder.png',0,"grindView",problemList[12],problemList[13],0,0);
loadImg(grindStation);

var paintStation= new workStation('Art_Assets/workshop_icons/icon_paint.png',0,"paintView",problemList[14],problemList[15],problemList[16],0);
loadImg(paintStation);

var fabricStation= new workStation('Art_Assets/workshop_icons/icon_cutting.png',0,"fabricView",problemList[17],0,0,0);
loadImg(fabricStation);

var sewingStation= new workStation('Art_Assets/workshop_icons/icon_sewing.png',0,"sewingView",problemList[18],problemList[19],problemList[20],0);
loadImg(sewingStation);

var assemblyStation= new workStation('Art_Assets/workshop_icons/icon_assembly.png',0,"assemblyView",problemList[21],problemList[22],problemList[23],0);
loadImg(assemblyStation);


var station = [ sawStation,drillStation,bendStation,
                weldStation,grindStation,paintStation,
                assemblyStation,fabricStation,sewingStation];



for(var i=0; i<9; i++){
station[i].position=i;
}


var desk= new gameObject(250,600,128,256,'Art_Assets/game_screen/desk.png',0);
loadImg(desk);

var office=new gameObject(750,0,750,750,'Art_Assets/game_screen/office.png',0);
loadImg(office);


var posx;
var posy;

var currentScreen= "mainMenu";
var subScreen="null";

var updateRate=0;

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// Factory income, Expenses, and background functions/variables are within this chunk of code //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////
/*
//Static values
var chairPrice=390;

var monthFunc= function(name,num){
    this.name=name;
    this.num=num;
}


var monthData=[new monthFunc("January",1),new monthFunc("February",2),new monthFunc("March",3),
                new monthFunc("April",4),new monthFunc("May",5),new monthFunc("June",6),
                new monthFunc("July",7),new monthFunc("August",8),new monthFunc("September",9),
                new monthFunc("October",10),new monthFunc("November",11),new monthFunc("December",12)];

// (Marcus Tolbert): I intend on calling branching functions in a similar way to how the excel document
//                  works, we would obviously cut out and simplify when possible. Hopefully a lot



// updates sales by calling functions to update sub components
var salesUpdate= function(month){
    if(200<month.finalInventory_chairs) {
        month.chairsSold = 200;
    }
    else if()
        month.chairsSold=finalInventory_chairs
    month.sales=month.chairsSold*chairPrice;
}

//month update will be called after the loading bar is first displayed
var monthUpdate= function(month){
    salesUpdate(month);
    laborUpdate(month);
}

*/

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
//                          End of Factory background calculations                            //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////


var update = function(modifier) {


    if (updateRate == 60)
        updateRate = 0;
    ++updateRate;

    contact(startBtn);
    contact(creditBtn);
    contact(desk);

    //finish all of the following through onclick and draw
    contact(reportBtn);
    contact(closeBtn);
    contact(leanToolsBtn);
    contact(calendarBtn);
    contact(nextMonthBtn);


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
        draw(ctx,loadingBar[0],0,0);

        for(var i=0;i<loadingBar.length;i++){
            draw(ctx,loadingBar[i],0,0);
            //check if problem[i].== true to display problem

        }
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
        }
        draw(ctx2,desk,3,-3);
        if(subScreen=="office"||subScreen=="leanTools"||subScreen=="monthlyReport"&&subScreen=="calendar")
            draw(ctx2,office,0,0);
        if(subScreen=="office"){
            //draw(ctx2,leanToolsBtn,0,0);//////////////////////// temp invisible hitbox
            //draw(ctx2,reportBtn,0,0);/////////////////////////// temp invisible hitbox
            //draw(ctx2,advMonthBtn,0,0);///////////////////////// temp invisible hitbox
        }

        //draw background of workstation
        if(subScreen!="office"&&subScreen!="leanTools"&&subScreen!="monthlyReport"&&subScreen!="calendar"){
            draw(ctx2,stationView,0,0);
        }
        if(subScreen==sawStation.subScreen)
            draw(ctx2,sawView,0,0);




        if(subScreen=="leanTools") {
            draw(ctx2, leanToolsView, 0, 0);
            ctx2.font="80px Georgia";
            ctx2.fillText("Lean Tools",900,100);
            ctx2.font="10px Georgia";
        }
        if(subScreen=="monthlyReport") {
            draw(ctx2, reportView, 0, 0);
            ctx2.font="80px Georgia";
            ctx2.fillText("Monthly Report",810,100);
            ctx2.font="10px Georgia";

            //ctx.fillText("Sales"+sales,reportView.x+10,reportView.y+);
        }
        if(subScreen=="calendar") {
            draw(ctx2, calendarView, 0, 0);
            ctx2.font="80px Georgia";
            switch (monthCounter) {
                case 0:
                    currentMonth = monthsArray.January;
                    break;
                case 1:
                    currentMonth = monthsArray.February;
                    break;
                case 2:
                    currentMonth = monthsArray.March;
                    break;
                case 3:
                    currentMonth = monthsArray.April;
                    break;
                case 4:
                    currentMonth = monthsArray.May;
                    break;
                case 5:
                    currentMonth = monthsArray.June;
                    break;
                case 6:
                    currentMonth = monthsArray.July;
                    break;
                case 7:
                    currentMonth = monthsArray.August;
                    break;
                case 8:
                    currentMonth = monthsArray.September;
                    break;
                case 9:
                    currentMonth = monthsArray.October;
                    break;
                case 10:
                    currentMonth = monthsArray.November;
                    break;
                case 11:
                    currentMonth = monthsArray.December;
            }
            ctx2.fillText(currentMonth,900,100);
            ctx2.font="10px Georgia";

        }
        if(subScreen=="leanTools"||subScreen=="monthlyReport"||subScreen=="calendar")
            //draw(ctx2,closeBtn,0,0);
        //if(subScreen=="leanTools"||subScreen=="monthlyReport"&&subScreen=="calendar")
          //  draw(ctx2,)

        if(subScreen!="sawView"&&subScreen!="office"&&subScreen!="leanTools"&&subScreen!="monthlyReport"&&subScreen!="calendar"){
            ctx2.font="80px Georgia";
            ctx2.fillText(subScreen,900,500);
            ctx2.font="10px Georgia";
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
            subScreen="office";
        }
    }
    else if(currentScreen=="factory") {
        for (var i = 0; i < 9; i++) {
            if (station[i].hover) {
                subScreen = station[i].subScreen;
            }
        }
        if (desk.hover) {
            currentScreen = "factory";
            subScreen = "office";
        }
      /*  if (leanToolsBtn.hover) {
            subScreen = "leanTools";
        }
        if (calendarBtn.hover) {
            subScreen = "calendar";
        }*/
        if(subScreen=="office"){
            if (leanToolsBtn.hover) {
                subScreen = "leanTools";
            }
            if (calendarBtn.hover) {
                subScreen = "calendar";
            }
            if(reportBtn.hover){
                subScreen = "monthlyReport"
            }
        }

        if (subScreen=="leanTools"||subScreen=="monthlyReport"||subScreen=="calendar") {
            if (closeBtn.hover) {
                subScreen = "office";
            }

        }
        //Counter to keep track of the months.
        //Month 12 = the 13th month so reset to 0.
        if(subScreen=="calendar"){
            if(nextMonthBtn.hover){
               monthCounter++;
                if(monthCounter == 12){
                 monthCounter = 0;
                }
            }
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
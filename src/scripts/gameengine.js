/**
 * Created by Student on 9/24/2014.
 */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

canvas.border = 0;
canvas.top = 0;
canvas.left = 0;
canvas.width = 1550;
canvas.height = 750;
document.body.appendChild(canvas);
var ctx2 = canvas.getContext("2d");
var monthsArray = {
    January: "January",
    February: "February",
    March: "March",
    April: "April",
    May: "May",
    June: "June",
    July: "July",
    August: "August",
    September: "September",
    October: "October",
    November: "November",
    December: "December"
};
var currentMonth = monthsArray.January;



var bossSpriteFrameCoffee = 0;
var BossCoffeeSpriteX;
var BossCoffeeSpriteY;
var bossCoffeeSipAnm = new Image();
bossCoffeeSipAnm.src = "Art_Assets/characters/boss/coffee_sip.png";
//Animation method for the sipping of coffee.
function drawBossCoffeeAnm(){


    BossCoffeeSpriteX = (bossSpriteFrameCoffee%38)*259;
    BossCoffeeSpriteY = Math.floor(bossSpriteFrameCoffee/38)*642;
    ctx.drawImage(bossCoffeeSipAnm,BossCoffeeSpriteX,BossCoffeeSpriteY,259,642,1050,100,(259/1.55),(642/1.55));

    if(bossSpriteFrameCoffee==152){
        bossSpriteFrameCoffee=0;
    }
    else{
        bossSpriteFrameCoffee++
    }
}

var bossWalkRightFrameCount = 0;
var BossWalkRightSpriteX;
var BossWalkRightSpriteX;
var BossWalkRightXPos=1050;
var BossWalkRightYPos=100;
var bossWalkRightAnm = new Image();
bossWalkRightAnm.src = "Art_Assets/characters/boss/twostep.png";
//Animation method for the sipping of coffee.
function drawBossWalkRightandMoveRight(){

    BossWalkRightSpriteX = (bossWalkRightFrameCount%19)*370;
    BossWalkRightSpriteX = Math.floor(bossWalkRightFrameCount/19)*649;
    ctx.drawImage(bossWalkRightAnm,BossWalkRightSpriteX,BossWalkRightSpriteX,370,649,1050+BossWalkRightXPos,100,(259/1.55),(642/1.55));
    if(bossWalkRightFrameCount==94){
        bossWalkRightFrameCount=0;
      if(BossWalkRightXPos==100){
          BossWalkRightXPos=0;
      }
    }
    else{
        BossWalkRightXPos++;
        bossWalkRightFrameCount++
    }
}

//---------------------------------------------------------------------------------------------------
//To change the color of the icons or the emotions of the workers change in concordance to this order:
//0 - Green Icon/Smiling Worker
//1 - Yellow Icon/Frowning Worker
//2 - Red Icon/Neutral Worker
//3 - Gray Icon
//Example of how do to it:
//Scenario: A problem occurs where the drill machines go down.
//Code: factoryFloorIconsArray.Drill = 2;
//The program will then redraw the red icon.
//---------------------------------------------------------------------------------------------------
var factoryFloorIconsArray = {
    Saw: 0,
    Assembly: 0,
    Drill: 0,
    Weld: 0,
    Bend: 0,
    Grind: 0,
    Paint: 0,
    Sew: 0,
    Cut: 0,
    Desk: 0,
    BossIcon: 0,
    SmedIcon: 0,
    workerOneIcon: 0,
    WorkerTwoIcon: 0,
    WorkerThreeIcon: 0,
    WorkerFourIcon: 0
};
//This is the list to keep track of the workers that use crosstraining.
//0 means no crosstraining
//1 means was crosstrained
//2 means was replaced by a crosstrained worker.
var workerCrossTrainingList = {
    workerZero:0,
    workerOne:0,
    workerTwo:0,
    workerThree:0,
    workerFour:0,
    workerFive:0,
    workerSix:0,
    workerSeven:0,
    workerEight:0
}
var monthCounter = 0;


var spriteFrameCount = 0;
var spriteX;
var spriteY;
var walkFrameCount = 0;
var walkDirectionBool = true;
var spriteSheetImg = new Image();
spriteSheetImg.src = "Art_Assets/workshop_icons/floor_icon_sprsht.png";

var WorkerIcon = function (spriteSheetImg,currentX,currentY) {
    this.spriteSheetImg = spriteSheetImg;
    this.currentX = currentX;
    this.currentY = currentY;

};

var bossworker = new WorkerIcon(spriteSheetImg,675,525);
var workerOne = new WorkerIcon(spriteSheetImg,110,0);
//Spritesheet drawer.
function drawSprtSht() {

    //requestAnimationFrame(drawSprtSht);
    spriteX = 300;
    spriteY = 300;
    switch(factoryFloorIconsArray.Saw){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*0, 300, 300,station[0].x, station[0].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*0, 300, 300,station[0].x, station[0].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*0, 300, 300,station[0].x, station[0].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*0, 300, 300,station[0].x, station[0].y, 110, 110);
            break;
    }
    switch(factoryFloorIconsArray.Assembly){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*4, spriteY*0, 300, 300,station[6].x, station[6].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*5, spriteY*0, 300, 300,station[6].x, station[6].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*6, spriteY*0, 300, 300,station[6].x, station[6].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*7, spriteY*0, 300, 300,station[6].x, station[6].y, 110, 110);
            break;
    }
    switch(factoryFloorIconsArray.Drill){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*1, 300, 300,station[1].x, station[1].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*1, 300, 300,station[1].x, station[1].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*1, 300, 300,station[1].x, station[1].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*1, 300, 300,station[1].x, station[1].y, 110, 110);
            break;
    }
    switch(factoryFloorIconsArray.Weld){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*4, spriteY*1, 300, 300,station[3].x, station[3].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*5, spriteY*1, 300, 300,station[3].x, station[3].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*6, spriteY*1, 300, 300,station[3].x, station[3].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*7, spriteY*1, 300, 300,station[3].x, station[3].y, 110, 110);
            break;
    }
    switch (factoryFloorIconsArray.Bend){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*2, 300, 300,station[2].x, station[2].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*2, 300, 300,station[2].x, station[2].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*2, 300, 300,station[2].x, station[2].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*2, 300, 300,station[2].x, station[2].y, 110, 110);
            break;
    }
    switch(factoryFloorIconsArray.Grind){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*4, spriteY*2, 300, 300,station[4].x, station[4].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*5, spriteY*2, 300, 300,station[4].x, station[4].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*6, spriteY*2, 300, 300,station[4].x, station[4].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*7, spriteY*2, 300, 300,station[4].x, station[4].y, 110, 110);
            break;
    }
    switch(factoryFloorIconsArray.Paint){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*3, 300, 300,station[5].x, station[5].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*3, 300, 300,station[5].x, station[5].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*3, 300, 300,station[5].x, station[5].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*3, 300, 300,station[5].x, station[5].y, 110, 110);
            break;
    }
    switch(factoryFloorIconsArray.Sew){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*4, spriteY*3, 300, 300,station[8].x, station[8].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*5, spriteY*3, 300, 300,station[8].x, station[8].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*6, spriteY*3, 300, 300,station[8].x, station[8].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*7, spriteY*3, 300, 300,station[8].x, station[8].y, 110, 110);
            break;
    }
    switch(factoryFloorIconsArray.Cut){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*4, 300, 300,station[7].x, station[7].y, 110, 110);
            break;
        case 1:
            ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*4, 300, 300,station[7].x, station[7].y, 110, 110);
            break;
        case 2:
            ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*4, 300, 300,station[7].x, station[7].y, 110, 110);
            break;
        case 3:
            ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*4, 300, 300,station[7].x, station[7].y, 110, 110);
            break;
    }
    switch (factoryFloorIconsArray.Desk){
        case 0:
            ctx.drawImage(spriteSheetImg, spriteX*4, spriteY*4, 300, 300,300,600, 140, 140);

            break;
    }
    switch(factoryFloorIconsArray.BossIcon) {
        case 0:
            if (walkDirectionBool) {
                bossworker.currentY = bossworker.currentY - 1;
                ctx.drawImage(spriteSheetImg, spriteX * 5, spriteY * 4, 300, 300, bossworker.currentX, bossworker.currentY, 70, 70);
            }

            else {
                bossworker.currentY = bossworker.currentY + 1;
                ctx.drawImage(spriteSheetImg, spriteX * 5, spriteY * 4, 300, 300, bossworker.currentX, bossworker.currentY, 70, 70);
            }
        break;
    }
    switch(factoryFloorIconsArray.SmedIcon){
        case 0:
            break;
    }
    switch(factoryFloorIconsArray.workerOneIcon){
        case 0:
            switch(workerCrossTrainingList.workerOne){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*5,300,300,station[0].x+30,station[0].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
        case 1:
            switch(workerCrossTrainingList.workerOne){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*6,300,300,station[0].x+30,station[0].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                      //Do nothing worker disappears
                    break;
            }
            break;
        case 2:
            switch(workerCrossTrainingList.workerOne){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*0, spriteY*7,300,300,station[0].x+30,station[0].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
    }
    switch (factoryFloorIconsArray.WorkerTwoIcon){
        case 0:
            switch(workerCrossTrainingList.workerTwo){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*5,300,300,station[1].x+30,station[1].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
        case 1:
            switch(workerCrossTrainingList.workerTwo){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*6,300,300,station[1].x+30,station[1].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
        case 2:
            switch(workerCrossTrainingList.workerTwo){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*1, spriteY*7,300,300,station[1].x+30,station[1].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
    }
    switch (factoryFloorIconsArray.WorkerThreeIcon){
        case 0:
            switch(workerCrossTrainingList.workerThree){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*5,300,300,station[2].x+30,station[2].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
        case 1:
            switch(workerCrossTrainingList.workerThree){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*6,300,300,station[2].x+30,station[2].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
        case 2:
            switch(workerCrossTrainingList.workerThree){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*2, spriteY*7,300,300,station[2].x+30,station[2].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
    }
    switch (factoryFloorIconsArray.WorkerFourIcon){
        case 0:
            switch(workerCrossTrainingList.workerFour){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*5,300,300,station[3].x+30,station[3].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
        case 1:
            switch(workerCrossTrainingList.workerFour){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*6,300,300,station[3].x+30,station[3].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
        case 2:
            switch(workerCrossTrainingList.workerFour){
                case 0:
                    ctx.drawImage(spriteSheetImg, spriteX*3, spriteY*7,300,300,station[3].x+30,station[3].y-60,60,60);
                    break;
                case 1:
                    //TODO - logic for moving for crosstrained
                    break;
                case 2:
                    //Do nothing worker disappears
                    break;
            }
            break;
    }

        //console.log("TEST1234");
        if(bossworker.currentY <= station[0].y){
            walkDirectionBool = false;
        }else if(bossworker.currentY >= station[8].y){
            walkDirectionBool = true;
        }


        if (spriteFrameCount == 63) {
            spriteFrameCount = 0;
        }
        else {
            spriteFrameCount++
        }
    }
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

    var workStation = function (src, altSrc, subScreen, p, pTwo, pThree, pFour) {
        this.problem = p;
        this.problemTwo = pTwo;
        this.problemThree = pThree;
        this.problemFour = pFour;
        this.subScreen = subScreen;
        this.x = 0;
        this.y = 0;
        this.h = 128;
        this.w = 128;
        this.hover = false;
        this.drag = false;
        this.ready = false;
        this.readyAlt = false;
        this.image = new Image();

        this.image.src = src;
        if (altSrc == 0)
            this.imageAlt = this.image;
        else {
            this.imageAlt = new Image();
            this.imageAlt.src = altSrc;
        }

    };


    var gameObject = function (x, y, h, w, src, altSrc) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.hover = false;
        this.ready = false;
        this.readyAlt = false;
        this.image = new Image();

        this.image.src = src;
        if (altSrc == 0)
            this.imageAlt = this.image;
        else {
            this.imageAlt = new Image();
            this.imageAlt.src = altSrc;


        }

    };

    var stationPos = function (x, y) {
        this.x = x;
        this.y = y;
    };

    var ready = function (object) {
        object.ready = true;
    }
    var readyAlt = function (object) {
        object.readyAlt = true;
    }
    var loadImg = function (object) {
        object.image.onload = ready(object);
        object.imageAlt.onload = readyAlt(object);
    }

    var position = [new stationPos(95, 60), new stationPos(310, 60), new stationPos(525, 60),
        new stationPos(95, 248), new stationPos(310, 248), new stationPos(525, 248),
        new stationPos(95, 436), new stationPos(310, 436), new stationPos(525, 436)];

//declaring all game objects
    /*
     right now you must declare the gameObject, call loadImg(), call contact(), and call draw() manually

     */

    var gameScreen = new gameObject(0, 0, 750, 750, 'Art_Assets/game_screen/workstation_view.png', 0);
    loadImg(gameScreen);

    var border = new gameObject(-3, -3, 780, 1500, "Art_Assets/game_screen/background.png", 0);
    loadImg(border);
    var barX = 400;
    var barY = 600;

    var loadingPeg = function (x) {
        this.x = x;
        this.y = 600;
        this.h = 100;
        this.w = 50;
        this.hover = false;
        this.ready = false;
        this.readyAlt = false;
        this.image = new Image();
        this.image.src = "Art_Assets/game_screen/loading_peg.png";
        this.imageAlt = this.image;

    }


// Creating loading bar & length
    var startingX = 400;
    var loadingBar = [];
    for (var i = 0; i < 9; i++) {
        var x = new loadingPeg(startingX + 50 * i);
        loadImg(x);
        loadingBar[i] = x;
    }

/*
//problem list function
    var problem = function (name, state) {
        this.y;
        this.name = name;
        this.state = state;
        this.daysDown;
    };
*/
// problem list array

var numProbs=0;
var problemList = [];

problemListUpdate();
// updates problem List array to the current month
function problemListUpdate() {
    for (numProbs >= 0; numProbs--;) {
        problemList[numProbs] = null;
    }

    factoryFloorIconsArray.Saw=0;
    factoryFloorIconsArray.Assembly=0;
    factoryFloorIconsArray.Drill=0;
    factoryFloorIconsArray.Weld=0;
    factoryFloorIconsArray.Bend=0;
    factoryFloorIconsArray.Grind=0;
    factoryFloorIconsArray.Paint=0;
    factoryFloorIconsArray.Sew=0;
    factoryFloorIconsArray.Cut=0;

    numProbs = 0;

    //Saw problems
    if (mitreSaw_LateParts(monthCounter) > 0) {
        problemList[numProbs] = ("Saw down " + mitreSaw_LateParts(monthCounter) + "days due to late tubes");
        if(factoryFloorIconsArray.Saw<2)
            factoryFloorIconsArray.Saw+=1;
        numProbs++;
    }
    if (mitreSaw_WorkersOver() > 0) {
        problemList[numProbs] = ("Saw works overtime to try and meet production");
        numProbs++;
    }
    if (mitreSaw_Downtime(monthCounter) > 0) {
        problemList[numProbs] = "Saw down" + mitreSaw_Downtime(monthCounter) + "days due to machine breakdown";
        if(factoryFloorIconsArray.Saw<2)
            factoryFloorIconsArray.Saw+=1;
        numProbs++;
    }
    if (mitreSaw_MaxCapacity() < 200) {
        problemList[numProbs] = "Saw cannot meet production due to capacity constraint";
        numProbs++;
    }

    //Drill problems
    if (drillPress_LateWIP() > 0) {
        problemList[numProbs] = "Drill press down " + drillPress_LateWIP() + "days due to late parts from saw";
        if(factoryFloorIconsArray.Drill<2)
            factoryFloorIconsArray.Drill+=1;
        numProbs++;
    }
    if (drillPress_Downtime(monthCounter) > 0) {
        problemList[numProbs] = "Drill press down " + drillPress_Downtime(monthCounter) + "days due to machine breakdown";
        if(factoryFloorIconsArray.Drill<2)
            factoryFloorIconsArray.Drill+=1;
        numProbs++;
    }
    if (drillPress_WorkersOver() > 0) {
        problemList[numProbs] = "Drill press works overtime to try and meet production";
        numProbs++;
    }
    if(drillPress_BadQuality(monthCounter) > 0){
       problemList[numProbs] = "Drill press down " + drillPress_BadQuality(monthCounter) + " days due to quality problem";
        if(factoryFloorIconsArray.Drill<2)
            factoryFloorIconsArray.Drill+=1;
        numProbs++;
    }
    if(drillPress_MaxCapacity() < 200){
        problemList[numProbs] = "Drill press cannot meet production due to capacity constraint";
        numProbs++;
    }

    //Bender problems
    if(tubeBender_LateWIP() > 0){
        problemList[numProbs] = "Tube bender down " + tubeBender_LateWIP() + " days due to late parts from drill";
        if(factoryFloorIconsArray.Bend<2)
            factoryFloorIconsArray.Bend+=1;
        numProbs++;
    }
    if(tubeBender_Downtime(monthCounter) > 0){
        problemList[numProbs] = "Tube bender down " + tubeBender_Downtime(monthCounter) + " days due to machine breakdown";
        if(factoryFloorIconsArray.Bend<2)
            factoryFloorIconsArray.Bend+=1;
        numProbs++;
    }
    if(tubeBender_WorkersOver() > 0){
        problemList[numProbs] = "Tube bender works overtime to try and meet production";
        numProbs++;
    }
    if(tubeBender_BadQuality(monthCounter) > 0){
        problemList[numProbs] = "Tube bender down " + tubeBender_BadQuality(monthCounter) + " days due to quality problem";
        if(factoryFloorIconsArray.Bend<2)
            factoryFloorIconsArray.Bend+=1;
        numProbs++;
    }
    if(tubeBender_MaxCapacity() < 200){
        problemList[numProbs] = "Tube bender cannot meet production due to capacity constraint";
        numProbs++;
    }
    if(tubeBender_DelayQuality(monthCounter) > 0){
        problemList[numProbs] = "Tube bender down " + tubeBender_DelayQuality(monthCounter) + " days due to bad parts from drill";
        if(factoryFloorIconsArray.Bend<2)
            factoryFloorIconsArray.Bend+=1;
        numProbs++;
    }

    //Welding problems
    if(welding_LateWIP() > 0){
        problemList[numProbs] = "Welding down " + welding_LateWIP() + " days due to late parts from metal cell";
        if(factoryFloorIconsArray.Weld<2)
            factoryFloorIconsArray.Weld+=1;
        numProbs++;
    }
    if(welding_WorkersOver() > 0){
        problemList[numProbs] = "Welding works overtime to try and meet production";
        numProbs++;
    }
    if(welding_Downtime(monthCounter) > 0){
        problemList[numProbs] = "Welding down " + welding_Downtime(monthCounter) + " days due to machine breakdown";
        if(factoryFloorIconsArray.Weld<2)
            factoryFloorIconsArray.Weld+=1;
        numProbs++;
    }
    if(welding_MaxCapacity() < 200){
        problemList[numProbs] = "Welding cannot meet production due to capacity constraint";
        numProbs++;
    }
    if(welding_BadQuality(monthCounter) > 0){
        problemList[numProbs] = "Welding down " + welding_BadQuality(monthCounter) + " days due to quality problem";
        if(factoryFloorIconsArray.Weld<2)
            factoryFloorIconsArray.Weld+=1;
        numProbs++;
    }

    //Grinder problems
    if(grinder_LateWIP() > 0){
        problemList[numProbs] = "Grinder down " + grinder_LateWIP() + " days due to late parts from welding";
        if(factoryFloorIconsArray.Grind<2)
            factoryFloorIconsArray.Grind+=1;
        numProbs++;
    }
    if(grinder_WorkersOver() > 0){
        problemList[numProbs] = "Grinder works overtime to try and meet production";
        numProbs++;
    }
    if(grinder_DelayQuality(monthCounter) > 0){
        problemList[numProbs] = "Grinder down " + grinder_DelayQuality(monthCounter) + " days due to bad parts from welding";
        if(factoryFloorIconsArray.Grind<2)
            factoryFloorIconsArray.Grind+=1;
        numProbs++;
    }
    if(grinder_MaxCapacity() < 200){
        problemList[numProbs] = "Grinder cannot meet production due to capacity constraint";
        numProbs++;
    }

    //Paint problems
    if(paintBooth_LateWIP() > 0){
        problemList[numProbs] = "Paint booth down " + paintBooth_LateWIP() + " days due to late parts from grinder";
        if(factoryFloorIconsArray.Paint<2)
            factoryFloorIconsArray.Paint+=1;
        numProbs++;
    }
    if(paintBooth_Downtime(monthCounter) > 0){
        problemList[numProbs] = "Paint booth down " + paintBooth_Downtime(monthCounter) + " days due to machine breakdown";
        if(factoryFloorIconsArray.Paint<2)
            factoryFloorIconsArray.Paint+=1;
        numProbs++;
    }
    if(paintBooth_WorkersOver() > 0){
        problemList[numProbs] = "Paint booth works overtime to try and meet production";
        numProbs++;
    }
    if(paintBooth_DelayQuality(monthCounter) > 0){
        problemList[numProbs] = "Paint booth down " + paintBooth_DelayQuality(monthCounter) + " days due to bad parts from welding";
        if(factoryFloorIconsArray.Paint<2)
            factoryFloorIconsArray.Paint+=1;
        numProbs++;
    }
    if(paintBooth_MaxCapacity() < 200){
        problemList[numProbs] = "Paint booth cannot meet production due to capacity constraint";
        numProbs++;
    }

    //Fabric problems
    if(fabricCutter_LateParts(monthCounter) > 0){
        problemList[numProbs] = "Fabric cutter down " + fabricCutter_LateParts(monthCounter) + " days due to late nylon";
        if(factoryFloorIconsArray.Cut<2)
            factoryFloorIconsArray.Cut+=1;
        numProbs++;
    }
    if(fabricCut_WorkersOver() > 0){
        problemList[numProbs] = "Fabric cut works overtime to try and meet production";
        numProbs++;
    }
    if(fabricCut_MaxCapacity() < 200){
        problemList[numProbs] = "Fabric cutter cannot meet production due to capacity constraint";
        numProbs++;
    }

    //Sewing problems
    if(sewing_LateWIP() > 0){
        problemList[numProbs] = "Sewing down " + sewing_LateWIP() + " days due to late parts from fabric cutter";
        if(factoryFloorIconsArray.Sew<2)
            factoryFloorIconsArray.Sew+=1;
        numProbs++;
    }
    if(sewing_Downtime(monthCounter) > 0){
        problemList[numProbs] =  "Sewing down " + sewing_Downtime(monthCounter) + " days due to machine breakdown";
        if(factoryFloorIconsArray.Sew<2)
            factoryFloorIconsArray.Sew+=1;
        numProbs++;
    }
    if(sewing_WorkersOver() > 0){
        problemList[numProbs] =  "Sewing works overtime to try and meet production";
        numProbs++;
    }
    if(sewing_BadQuality(monthCounter) > 0){
        problemList[numProbs] = "Sewing down " + sewing_BadQuality(monthCounter) + " days due to quality problem";
        if(factoryFloorIconsArray.Sew<2)
            factoryFloorIconsArray.Sew+=1;
        numProbs++;
    }
    if(sewing_MaxCapacity() < 200){
        problemList[numProbs] = "Sewing cannot meet production due to capacity constraint";
        numProbs++;
    }

    //Assembly problems
    if(assemblyBench_LateParts(monthCounter) > 0){
        problemList[numProbs] = "Assembly down " + assemblyBench_LateParts(monthCounter) + " days due to late " + assemblyBench_LateParts();
        if(factoryFloorIconsArray.Assembly<2)
            factoryFloorIconsArray.Assembly+=1;
        numProbs++;
    }
    if(assembly_WorkersOver() > 0){
        problemList[numProbs] = "Assembly works overtime to try and meet production";
        numProbs++;
    }
    if(assemblyBench_LateWIP() > 0){
        problemList[numProbs] = "Assembly down " + assemblyBench_LateWIP() + " days due to late parts from paint booth";
        if(factoryFloorIconsArray.Assembly<2)
            factoryFloorIconsArray.Assembly+=1;
        numProbs++;
    }
    if(assembly_MaxCapacity() < 200){
        problemList[numProbs] = "Assembly cannot meet production due to capacity constraint";
        numProbs++;
    }
    if(assemblyBench_BadQuality(monthCounter) > 0){
        problemList[numProbs] = "Assembly down " + assemblyBench_BadQuality(monthCounter) + " days due to quality problem";
        if(factoryFloorIconsArray.Assembly<2)
            factoryFloorIconsArray.Assembly+=1;
        numProbs++;
    }
}




    var menu = new gameObject(0, 0, 750, 1500, 'Art_Assets/main_menu/title2.png', 0);
    loadImg(menu);

    var startBtn = new gameObject(50, 50, 65, 160, 'Art_Assets/main_menu/btn_play.png', 'Art_Assets/main_menu/btn_playh.png');
    loadImg(startBtn);

    var creditBtn = new gameObject(50, 150, 65, 160, 'Art_Assets/main_menu/btn_help.png', 'Art_Assets/main_menu/btn_helph.png');
    loadImg(creditBtn);

    var credits = new gameObject(0, 0, 750, 750, 'Art_Assets/credits.png', 0);
    loadImg(credits);


///////////////////////////////////////////////// v   Replace image for each button
//Office screen buttons
    var closeBtn = new gameObject(1375, 75, 100, 100, 'Art_Assets/game_screen/calendarBtn_temp.png', 0);
    loadImg(closeBtn);

    var reportBtn = new gameObject(1000, 550, 80, 80, 'Art_Assets/game_screen/reportBtn_temp.png', 0);
    loadImg(reportBtn);

    var leanToolsBtn = new gameObject(780, 100, 300, 300, 'Art_Assets/game_screen/lean_toolsBtn_temp.png', 0);
    loadImg(leanToolsBtn);

    var calendarBtn = new gameObject(1300, 550, 100, 100, 'Art_Assets/game_screen/calendarBtn_temp.png', 0);
    loadImg(calendarBtn);

    var nextMonthBtn = new gameObject(1350, 600, 100, 100, 'Art_Assets/game_screen/calendarBtn_temp.png', 0);
    loadImg(nextMonthBtn);


//lean tools buttons
    var leanToolsBtnCells = new gameObject(866, 300, 34, 126, 'Art_Assets/game_screen/lean_toolsBtn_temp.png', 0)
    loadImg(leanToolsBtnCells);

    var leanToolsBtnSmedSaw = new gameObject(1012, 300, 34, 126, 'Art_Assets/game_screen/lean_toolsBtn_temp.png', 0)
    loadImg(leanToolsBtnSmedSaw);


//Office screen views
    var leanToolsView = new gameObject(825, 176, 400, 600, "Art_Assets/game_screen/LEANback.png", 0);
    loadImg(leanToolsView);

    var reportView = new gameObject(850, 20, 710, 550, "Art_Assets/game_screen/report_view.png", 0);
    loadImg(reportView);

    var calendarView = new gameObject(770, 20, 710, 710, "Art_Assets/game_screen/Calendar.png", 0);
    loadImg(calendarView);


///////////////////////////////////////   v   Replace image for each workstation

// 9 work stations icons
    var sawStation = new workStation('Art_Assets/workshop_icons/icon_saw.png', 0, "sawView", problemList[0], problemList[1], 0, 0);
    loadImg(sawStation);

    var drillStation = new workStation('Art_Assets/workshop_icons/icon_drill.png', 0, "drillView", problemList[2], problemList[3], problemList[4], 0);
    loadImg(drillStation);

    var bendStation = new workStation('Art_Assets/workshop_icons/icon_bender.png', 0, "bendView", problemList[5], problemList[6], problemList[7], problemList[8]);
    loadImg(bendStation);

    var weldStation = new workStation('Art_Assets/workshop_icons/icon_welder.png', 0, "weldView", problemList[9], problemList[10], problemList[11], 0);
    loadImg(weldStation);

    var grindStation = new workStation('Art_Assets/workshop_icons/icon_grinder.png', 0, "grindView", problemList[12], problemList[13], 0, 0);
    loadImg(grindStation);

    var paintStation = new workStation('Art_Assets/workshop_icons/icon_paint.png', 0, "paintView", problemList[14], problemList[15], problemList[16], 0);
    loadImg(paintStation);

    var fabricStation = new workStation('Art_Assets/workshop_icons/icon_cutting.png', 0, "fabricView", problemList[17], 0, 0, 0);
    loadImg(fabricStation);

    var sewingStation = new workStation('Art_Assets/workshop_icons/icon_sewing.png', 0, "sewingView", problemList[18], problemList[19], problemList[20], 0);
    loadImg(sewingStation);

    var assemblyStation = new workStation('Art_Assets/workshop_icons/icon_assembly.png', 0, "assemblyView", problemList[21], problemList[22], problemList[23], 0);
    loadImg(assemblyStation);

    var station = [sawStation, drillStation, bendStation,
        weldStation, grindStation, paintStation,
        assemblyStation, fabricStation, sewingStation];

    for (var i = 0; i < 9; i++) {
        station[i].position = i;
    }

// Workstation views
    var stationView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/Right_Side_Background.png", 0);
    loadImg(stationView);

    var sawView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_saw.jpg", 0);
    loadImg(sawView);

    var drillView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_drill.jpg", 0);
    loadImg(drillView);

    var bendView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_bending.jpg", 0);
    loadImg(bendView);

    var weldView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_welder.jpg", 0);
    loadImg(weldView);

    var grindView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_saw.jpg", 0);
    loadImg(grindView);

    var paintView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_painting.jpg", 0);
    loadImg(paintView);

    var fabricView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_sewing.jpg", 0);
    loadImg(fabricView);

    var sewingView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_cutting.jpg", 0);
    loadImg(sewingView);

    var assemblyView = new gameObject(750, 0, 750, 750, "Art_Assets/game_screen/workstations/workshop_assembly.jpg", 0);
    loadImg(assemblyView);


    var desk = new gameObject(250, 600, 128, 256, 'Art_Assets/game_screen/desk.png', 0);
    loadImg(desk);

    var office = new gameObject(750, 0, 750, 750, 'Art_Assets/game_screen/office.png', 0);
    loadImg(office);


    var posx;
    var posy;

    var currentScreen = "mainMenu";
    var subScreen = "null";


    var leanToolAllowance = 1000;


// lean tool states
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//kaban
    var leanTool_Kaban_Metal = false;
    var leanTool_Kaban_Weld = false;


//supermarket
    var leanTool_Market_Welding = false;
    var leanTool_Market_Assembly = false;

//Small lot sizes
    var leanTool_SmallLot_Metal = false;
    var leanTool_SmallLot_Weld = false;
    var leanTool_SmallLot_Fabric = false;

//fiveS
    var leanTool_fiveS_Saw = false;
    var leanTool_fiveS_Drill = false;
    var leanTool_fiveS_Bender = false;
    var leanTool_fiveS_Welding = false;
    var leanTool_fiveS_Grind = false;
    var leanTool_fiveS_Paint = false;
    var leanTool_fiveS_Fabric = false;
    var leanTool_fiveS_Sewing = false;
    var leanTool_fiveS_Assembly = false;

//smed
    var leanTool_Smed_Saw = false;
    var leanTool_Smed_Drill = false;
    var leanTool_Smed_Bender = false;
    var leanTool_Smed_Welding = false;
    var leanTool_Smed_Paint = false;
    var leanTool_Smed_Sewing = false;

//SourceQuality
    var leanTool_Quality_Drill = false;
    var leanTool_Quality_Bender = false;
    var leanTool_Quality_Welding = false;
    var leanTool_Quality_Sewing = false;
    var leanTool_Quality_Assembly = false;

//cells
    var leanTool_Cells = false;

//crossTraining
    var leanTool_CrossTrain_Metal = false;
    var leanTool_CrossTrain_Weld = false;
    var leanTool_CrossTrain_Fabric = false;

//self Directed Teams
    var leanTool_SelfDirected_Metal = false;
    var leanTool_SelfDirected_Weld = false;
    var leanTool_SelfDirected_Fabric = false;

//Preventive Maintenence
    var leanTool_PM_Saw = false;
    var leanTool_PM_Drill = false;
    var leanTool_PM_Bender = false;
    var leanTool_PM_Welding = false;
    var leanTool_PM_Paint = false;
    var leanTool_PM_Sewing = false;


//Vendor verified
    var leanTool_Vendor_Steel = false;
    var leanTool_Vendor_Nylon = false;
    var leanTool_Vendor_Bike = false;
    var leanTool_Vendor_Metal = false;

//Small Purchase lot sizes
    var leanTool_SmallPurchase_Steel = false;
    var leanTool_SmallPurchase_Nylon = false;
    var leanTool_SmallPurchase_Bike = false;
    var leanTool_SmallPurchase_Metal = false;

//new equiptment
    var leanTool_New_Saw = false;
    var leanTool_New_Drill = false;
    var leanTool_New_Bender = false;
    var leanTool_New_Welding = false;
    var leanTool_New_Grind = false;
    var leanTool_New_Paint = false;
    var leanTool_New_Fabric = false;
    var leanTool_New_Sewing = false;
    var leanTool_New_Assembly = false;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//var leanTool

    var updateRate = 0;

////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
// Factory income, Expenses, and background functions/variables are within this chunk of code //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////

//Static values
    var chairPrice = 390;
    var laborRate = 14;
    var laborRateOvertime = laborRate * 1.5;
    var workerHours = 160;
    var workerHoursOvertime = 40;
    var inventoryPercentFee = .03;
    var baselineInventoryPercentFee = .04;

// Values that monthData will have
    var monthFunc = function (name, num) {
        this.name = name;
        this.num = num;
        this.sales = 0;
        this.chairsSold = 0;

        this.laborRegular = 0;
        this.workers = 0;

        this.laborOvertime = 0;
        this.workersOvertime = 0;

        this.totalMaterialsCost = 0;
        this.purchasedMaterialsCost = 0;
        this.scrapMaterialsCost = 0;

        this.directCost = 0;// will equal labor regular+ labor overtime+ total materials cost

        this.inventoryCost = 0;// inventory * inventoryPercentFee
        this.inventory = 0;

        this.orderingCost = 0;

        this.leanIdeasCost = 0;

        this.overheadCost = 0;// inventory+(baselineCost*baselineInventoryPercentFee)
        this.baseline = 0;

        this.indirectCost = 0;// inventory cost+ ordering cost+ lean ideas cost+ overhead cost

        this.totalExpenses = 0;// indirect cost+ direct cost

        this.totalProfit = 0;// total cost- total expenses


        ///////////////////////////////////////////////////////////////////////////////////// Add all of the this.workstation.stats

    }

    function startMonth() {
        var month = monthData[0];
        month.chairsSold = 200;
        month.sales = Math.round(month.chairsSold * chairPrice);

        month.workers = 12;
        month.laborRegular = Math.round(month.workers * workerHours * laborRate);

        month.workerOvertime = 4;
        month.laborOvertime = Math.round(month.workerOvertime * workerHoursOvertime * laborRateOvertime);

        month.purchasedMaterials = 31850;
        month.scrap = 400;
        month.totalMaterialsCost = Math.round(month.scrap + month.purchasedMaterials);

        month.directCost = Math.round(month.laborRegular + month.laborOvertime + month.totalMaterialsCost);

        month.inventory = 42690;
        month.inventoryCost = Math.round(month.inventory * inventoryPercentFee);

        month.leanIdeasCost = 0;
        month.orderingCost = 2000;

        month.baselineCost = 19000;
        month.overheadCost = Math.round(month.baselineCost + (month.inventory * baselineInventoryPercentFee));

        month.indirectCost = Math.round(month.inventoryCost + month.orderingCost + month.leanIdeasCost + month.overheadCost);

        month.totalExpenses = Math.round(month.directCost + month.indirectCost);

        month.totalProfit = Math.round(month.sales - month.totalExpenses);

    }

    // FOR DEMO 10/24/14 only!!! not a real update function!
    function updateMonth(month) {
        /*
         if(leanToolCells==false) {
         // Real updateMonth function will call a function for each of these
         month.chairsSold = 153;
         month.workers = 12;
         month.workerOvertime = 5;
         month.purchasedMaterials = 18650;
         month.scrap = 400;
         month.inventory = 43811;
         month.orderingCost = 1200;
         month.baselineCost = 19000;
         }
         if(leanToolCells==true){
         month.chairsSold = 156;
         month.workers = 12;
         month.workerOvertime = 5;
         month.purchasedMaterials = 18650;
         month.scrap = 400;
         month.inventory = 43431;
         month.orderingCost = 1200;
         month.baselineCost = 18300;
         }
         if(leanToolSmedSaw==true){
         month.chairs
         Sold = 153;
         month.workers = 12;
         month.workerOvertime = 5;
         month.purchasedMaterials = 18650;
         month.scrap = 400;
         month.inventory = 43811;
         month.orderingCost = 1200;
         month.baselineCost = 19000;
         }
         */
        //create functions for each of these

        month.chairsSold = monthChairsSold(monthCounter);
        //month.sales = Math.round(month.chairsSold * chairPrice);
        month.sales = Math.round((monthChairsSold(monthCounter)* chairPrice));
        month.workers = monthWorkers(monthCounter);
        month.laborRegular = Math.round(month.workers * workerHours * laborRate);
        month.workerOvertime = total_WorkersOver(monthCounter);// from capacity
        month.laborOvertime = Math.round(month.workerOvertime * workerHoursOvertime * laborRateOvertime);
        month.purchasedMaterials = total_MaterialCost();//from capacity
        month.scrap = monthScrap(monthCounter);
        month.totalMaterialsCost = Math.round(month.scrap + month.purchasedMaterials);
        month.directCost = Math.round(month.laborRegular) + Math.round(month.laborOvertime) + Math.round(month.totalMaterialsCost);
        month.inventory = total_Value();//from inventory
        month.inventoryCost = Math.round(month.inventory * inventoryPercentFee);
        month.leanIdeasCost = 1000 - leanToolAllowance;
        month.orderingCost = total_OrderCost();//from inventory
        month.baselineCost = monthBaseline(monthCounter);
        month.overheadCost = Math.round(month.baselineCost + (month.inventory * baselineInventoryPercentFee));
        month.indirectCost = Math.round((month.inventory * inventoryPercentFee) + month.orderingCost + month.leanIdeasCost + (month.baselineCost + (month.inventory * baselineInventoryPercentFee)));
        console.log("indirect cost= inventory: "+month.inventoryCost+" +  ordering:"+month.orderingCost+" +  lean tools: "+month.leanIdeasCost+" + overhead: "+month.overheadCost);
        month.totalExpenses = Math.round(month.directCost + month.indirectCost);
        month.totalProfit = Math.round(month.sales - month.totalExpenses);


        var mCSTemp=monthChairsSold(monthCounter);
        console.log(mCSTemp);
        console.log("sales for "+monthCounter+" is "+(monthChairsSold(monthCounter)* chairPrice));
        console.log("laborRegular for "+monthCounter+" is "+(Math.round(monthWorkers(monthCounter)) * workerHours * laborRate));
        console.log("laborOvertime for "+monthCounter+" is "+(total_WorkersOver(monthCounter) * workerHoursOvertime * laborRateOvertime));
        console.log("total material cost for "+monthCounter+" is "+(monthScrap(monthCounter) + total_MaterialCost()));
        console.log("inventory cost for "+monthCounter+" is "+(total_Value() * inventoryPercentFee));
        console.log("direct cost for "+monthCounter+" is "+((Math.round(monthWorkers(monthCounter)) * workerHours * laborRate) + (total_WorkersOver(monthCounter) * workerHoursOvertime * laborRateOvertime) + (monthScrap(monthCounter) + total_MaterialCost())));
        console.log("overhead cost for "+monthCounter+" is "+(monthBaseline(monthCounter) + (total_Value() * baselineInventoryPercentFee)));
        console.log("indirect cost for "+monthCounter+" is "+((total_Value() * inventoryPercentFee) + total_OrderCost() + total_OrderCost() + (monthBaseline(monthCounter) + (total_Value() * baselineInventoryPercentFee))));
        console.log("total expenses for "+monthCounter+" is "+(((Math.round(monthWorkers(monthCounter)) * workerHours * laborRate) + (total_WorkersOver(monthCounter) * workerHoursOvertime * laborRateOvertime) + (monthScrap(monthCounter) + total_MaterialCost())) + ((total_Value() * inventoryPercentFee) + total_OrderCost() + total_OrderCost() + (monthBaseline(monthCounter) + (total_Value() * baselineInventoryPercentFee)))));
        console.log("total profit for "+monthCounter+" is "+((monthChairsSold(monthCounter) * chairPrice)-(monthChairsSold(monthCounter) * chairPrice) - (((Math.round(monthWorkers(monthCounter)) * workerHours * laborRate) + (total_WorkersOver(monthCounter) * workerHoursOvertime * laborRateOvertime) + (monthScrap(monthCounter) + total_MaterialCost())))));
        console.log("lean tool cost for "+monthCounter+" is "+( 1000 - leanToolAllowance));













    }

    function monthScrap(month) {

        //Scrap = 100 * (drillPress_BadQuality_One + tubeBender_BadQuality_One + welding_BadQuality_One + sewing_BadQuality_One + assemblyBench_BadQuality_One)
        return (100 * (drillPress_BadQuality(month) + tubeBender_BadQuality(month) + welding_BadQuality(month) + sewing_BadQuality(month) + assemblyBench_BadQuality(month)));
    }
    function monthChairsSold(month){
        console.log("month chairs sold return value= MIN((final inventory),(chairs)):"+ Math.min(assembly_FinalInventory(), chairs));
        console.log("month chairs sold assembly final inventory value:"+ assembly_FinalInventory());
        console.log("month chairs  value:"+ chairs);
        return (Math.min(assembly_FinalInventory(), chairs));
    }
    function monthWorkers(month){
        if(leanTool_Cells)
            return total_TrainWorkers(month);//from capacity
        else
            return total_NoCellsWorkers(month);//from capacity
    }
    function monthBaseline(){
        var baselineTemp = 19000;
        if(leanTool_Cells)
            baselineTemp-=700;
        if(leanTool_SelfDirected_Metal)
            baselineTemp-=500;
        if(leanTool_SelfDirected_Weld)
            baselineTemp-=500;
        if(leanTool_SelfDirected_Fabric)
            baselineTemp-=500;
        if(leanTool_New_Saw)
            baselineTemp+=300;
        if(leanTool_New_Drill)
            baselineTemp+=300;
        if(leanTool_New_Bender)
            baselineTemp+=300;
        if(leanTool_New_Welding)
            baselineTemp+=300;
        if(leanTool_New_Grind)
            baselineTemp+=300;
        if(leanTool_New_Paint)
            baselineTemp+=300;
        if(leanTool_New_Fabric)
            baselineTemp+=300;
        if(leanTool_New_Sewing)
            baselineTemp+=300;
        if(leanTool_New_Assembly)
            baselineTemp+=300;

        return baselineTemp;
    }

    //Problems table Functions
    // Saw late parts update
    function mitreSaw_LateParts(month){
    if(month==0||month==9){
        if(leanTool_Vendor_Steel==false)
            return 2;
        else
            return 0;
    }
    else if(month==2){
        if(leanTool_Vendor_Steel==false&&leanTool_SmallPurchase_Steel)
            return 2;
        else
            return 0;

    }
    else if(month==5){
        if(leanTool_SmallPurchase_Steel)
            return 2;
        else
            return 0;
    }
    else
        return 0;
    }

    // Saw down time
    function mitreSaw_Downtime(month){
    if(month==0){
        if(!leanTool_PM_Saw)
            return 3;
        else
            return 0;
    }
    else if(month==4||month==6){
        if(!leanTool_PM_Saw)
            return 2;
        else
            return 0;
    }
    else if(month==10){
        if(!leanTool_PM_Saw)
            return 3;
        else
            return 1;
    }
    else
        return 0;
}

// drill late WIP
function drillPress_LateWIP(){
    return mitreSaw_DaysLateOut();
}


//drill down time
function drillPress_Downtime(month){
    if(month==2){
        if(leanTool_PM_Drill==false)
            return 2;
        else
            return 0;
    }
    else if(month==5){
        if(leanTool_PM_Drill==false)
            return 2;
        else
            return 1;
    }
    else if(month==8||month==11){
        if(leanTool_PM_Drill==false)
            return 3;
        else
            return 0;
    }
    else
        return 0;

}

// drill press quality
function drillPress_BadQuality(month){
    if(month==0){
        if(leanTool_SmallLot_Metal)
            return .25;
        else
            return .5;
    }
    else if(month==1||month==3||month==5||month==7||month==10){
        if(leanTool_Quality_Drill==false){
            if(leanTool_SmallLot_Metal)
                return .25;
            else
                return .5;
        }
        else
            return 0;
    }
    else if (month==6){
        if(leanTool_Quality_Drill==false){
            if(leanTool_SmallLot_Metal)
                return .5;
            else
                return 1;
        }
        else
            return 0;
    }
    else if (month==8){
        if(leanTool_Quality_Drill==false){
            if(leanTool_SmallLot_Metal)
                return .5;
            else
                return 1;
        }
        else if(leanTool_SmallLot_Metal)
            return .25;
        else
            return .5;
    }
    else
        return 0;
}

function tubeBender_LateWIP(){
    return drillPress_DaysLateOut();
}

function tubeBender_Downtime(month){
    if (month==1) {
        if (leanTool_PM_Bender==false) {
            return 2;
        }
        else{return 0;}
    }
    else if (month==7) {
        if (!leanTool_PM_Bender) {
            return 1;
        }
        else{return 0;}
    }
    else if (month==10) {
        if (!leanTool_PM_Bender) {
            return 1;
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

function tubeBender_BadQuality(month){
    if (month==0||month==2||month==3||month==7||month==9||month==10) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.25;
            }
            else{
                return 0.5
            }
        }
        else{return 0;}
    }
    else if(month==1){
        if (leanTool_SmallLot_Metal) {
            return 0.25;
        }
        else{
            return 0.5;
        }
    }
    else if (month==5) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.75;
            }
            else{
                return 1.5;
            }
        }
        else{return 0;}
    }
    else if (month==8) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.5;
            }
            else{
                return 1;
            }
        }
        else{
            if (leanTool_SmallLot_Metal) {
                return 0.25;
            }
            else{
                return 0.5;
            }
        }
    }
    else{
        return 0;
    }
}

function tubeBender_DelayQuality(month){
    if (month==0) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else if (month==1) {
        if (leanTool_Kaban_Metal==true || leanTool_Quality_Drill==false) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else if (month==3) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else if (month==5) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else if (month==6) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else if (month==7) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else if (month==8) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else if (month==10) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

function welding_LateWIP(){
    return tubeBender_DaysLateOut();
}

function welding_Downtime(month){
    if (month==0||month==2) {
        if (!leanTool_PM_Welding) {
            return 2;
        }
        else{return 0;}
    }
    else if (month==1||month==3) {
        if (!leanTool_PM_Welding) {
            return 3;
        }
        else{
            return 1;
        }
    }
    else if (month==5) {
        if (!leanTool_PM_Welding) {
            return 4;
        }
        else{return 0;}
    }
    else if (month==7) {
        if (!leanTool_PM_Welding) {
            return 3;
        }
        else{
            return 1.5;
        }
    }
    else if (month==9) {
        if (!leanTool_PM_Welding) {
            return 3;
        }
        else{return 0;}
    }
    else if (month==10) {
        if (!leanTool_PM_Welding) {
            return 2;
        }
        else{
            return 1;
        }
    }
    else{
        return 0;
    }
}

function welding_BadQuality(month){
    if (month==0) {
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 1;
            }
            else{
                return 2;
            }
        }
        else{return 0;}
    }
    else if (month==1) {
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 1.5;
            }
            else{
                return 3;
            }
        }
        else{return 0;}
    }
    else if (month==2) {
        if (leanTool_SmallLot_Weld) {
            return 1;
        }
        else{
            return 2;
        }
    }
    else if (month==3) {
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 1;
            }
            else{
                return 2;
            }
        }
        else{
            if (leanTool_SmallLot_Weld) {
                return 0.5;
            }
            else{
                return 1;
            }
        }
    }
    else if (month==4) {
        if (leanTool_Quality_Welding==false) {
            if (leanTool_SmallLot_Weld==true) {
                return 1.5;
            }
            else{
                return 3;
            }
        }
        else{return 0;}
    }
    else if (month==5) {
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 1;
            }
            else{
                return 2;
            }
        }
        else{return 0;}
    }
    else if(month==6){
        if (leanTool_SmallLot_Weld) {
            return 0.5;
        }
        else{
            return 1;
        }
    }
    else if (month==7) {
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 1.5;
            }
            else{
                return 3;
            }
        }
        else{return 0;}
    }
    else if (month==10) {
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 2;
            }
            else{
                return 4;
            }
        }
        else{return 0;}
    }
    else if (month==11) {
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 1;
            }
            else{
                return 2;
            }
        }
        else{return 0;}
    }
    else{return 0;}
}

function grinder_LateWIP(){
    return welding_DaysLateOut();
}

function grinder_DelayQuality(month){
    if (leanTool_Kaban_Weld || !leanTool_Quality_Welding){
        return welding_BadQuality(month);
    }
    else{return 0;}
}

function paintBooth_LateWIP(){
    return grinder_DaysLateOut();
}

function paintBooth_Downtime(month){
    if (month==3) {
        return 1;
    }
    else if (month==8) {
        if (!leanTool_PM_Paint) {
            return 2;
        }
        else{return 0;}
    }
    else if (month==11) {
        if (!leanTool_PM_Paint) {
            return 1;
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

function paintBooth_DelayQuality(month){
    return grinder_DelayQuality(month);
}

function fabricCutter_LateParts(month){
    if (month==4) {
        if (!leanTool_Vendor_Nylon && leanTool_SmallPurchase_Nylon) {
            return 2;
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

function sewing_LateWIP(){
    return fabricCut_DaysLateOut();
}

function sewing_Downtime(month){
    if (month==0) {
        if (!leanTool_PM_Sewing) {
            return 2;
        }
        else{
            return 1;
        }
    }
    else if (month==2) {
        if (!leanTool_PM_Sewing) {
            return 2;
        }
        else{return 0;}
    }
    else if (month==4) {
        if (!leanTool_PM_Sewing) {
            return 2;
        }
        else{
            return 1;
        }
    }
    else if (month==7) {
        if (!leanTool_PM_Sewing) {
            return 2;
        }
        else{return 0;}
    }
    else if (month==8) {
        if (!leanTool_PM_Sewing) {
            return 1;
        }
        else{return 0;}
    }
    else if (month==10) {
        if (!leanTool_PM_Sewing) {
            return 3;
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

function sewing_BadQuality(month){
    if (month==0) {
        if (!leanTool_Quality_Sewing) {
            if (leanTool_SmallLot_Fabric) {
                return 0.5;
            }
            else{
                return 1
            }
        }
        else{return 0;}
    }
    else if (month==3) {
        if (!leanTool_Quality_Sewing) {
            if (leanTool_SmallLot_Fabric) {
                return 0.5;
            }
            else{
                return 1;
            }
        }
        else{return 0;}
    }
    else if (month==5) {
        if (!leanTool_Quality_Sewing) {
            if (leanTool_SmallLot_Fabric) {
                return 0.5;
            }
            else{
                return 1;
            }
        }
        else{return 0;}
    }
    else if (month==7) {
        if (leanTool_SmallLot_Fabric) {
            return 0.5;
        }
        else{
            return 1;
        }
    }
    else if (month==10) {
        if (!leanTool_Quality_Sewing) {
            if (leanTool_SmallLot_Fabric) {
                return 0.5;
            }
            else{
                return 1;
            }
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

function assemblyBench_LateParts(month){
    if (month==3) {
        if (!leanTool_Vendor_Metal && leanTool_SmallPurchase_Metal) {
            return 2;
        }
        else{return 0;}
    }
    else if (month==6) {
        if (!leanTool_Vendor_Bike) {
            return 2;
        }
        else{return 0;}
    }
    else if (month==10) {
        if (!leanTool_Vendor_Metal && leanTool_SmallPurchase_Metal) {
            return 2
        }
        else{return 0;}
    }
    else if (month==11) {
        if (leanTool_SmallPurchase_Bike) {
            return 2;
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

function assemblyBench_LateWIP(){
    return paintBooth_DaysLateOut() + sewing_DaysLateOut();
}

function assemblyBench_BadQuality(month){
    if (month==4) {
        if (!leanTool_Quality_Assembly) {
            return 0.5;
        }
        else{return 0;}
    }
    else{
        return 0;
    }
}

///////////////////////////////////////////////////////////////////////
//processes

//Saw functions
function mitreSaw_CurrentQuantity(){
    if (leanTool_New_Saw)
        return 2;
    else
        return 1;
}
function mitreSaw_SetupTime() {
    if(leanTool_Smed_Drill)
        return (.4);
    else
        return 2;
}
function mitreSaw_NumParts(){
    return 14;
}
function mitreSaw_ProcessTime() {
    return "0.2 - 1.2 min";
}
function mitreSaw_TotalTime(){
    return 10.4;
}
function mitreSaw_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Saw)
        tempEff+=.06;
    if(leanTool_SelfDirected_Metal)
        tempEff-=.03;
    return tempEff;
}
function mitreSaw_Reliability(){
    if(leanTool_PM_Saw)
        return .995;
    else
        return .97;
}
function mitreSaw_Quality(){
    return 1;
}
function mitreSaw_BatchSizes(){
    if(leanTool_SmallLot_Metal)
        return 20;
    else
        return 40;
}
function mitreSaw_Handling(){
    if(leanTool_Cells)
        return 0;
    else
        return 2;
}
//Duplicate Function
//function mitreSaw_NeededMachines(){
  //  return (mitreSaw_NeededMin()/(24 * MinPerDay * mitreSaw_Efficiency() * mitreSaw_Reliability() * mitreSaw_Quality()));
//}


//Drill functions
function drillPress_CurrentQuantity(){
    if (leanTool_New_Drill)
        return 2;
    else
        return 1;
}
function drillPress_SetupTime() {
    if(leanTool_Smed_Welding)
        return (.4);
    else
        return 2;
}
function drillPress_NumParts(){
    return 4;
}
function drillPress_ProcessTime() {
    return "2 min";
}
function drillPress_TotalTime(){
    return 16;
}
function drillPress_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Drill)
        tempEff+=.06;
    if(leanTool_SelfDirected_Metal)
        tempEff-=.03;
    return tempEff;
}
function drillPress_Reliability(){
    if(leanTool_PM_Drill)
        return .995;
    else
        return .97;
}function drillPress_Quality(){
    if(leanTool_Quality_Drill)
        return .996;
    else
        return .98;
}
function drillPress_BatchSizes(){
    if(leanTool_SmallLot_Metal)
        return 20;
    else
        return 40;
}
function drillPress_Handling(){
    if(leanTool_Cells)
        return 0;
    else
        return 2;
}
//Duplicate Function
//function drillPress_NeededMachines(){
  //  return (drillPress_NeededMin()/(24 * MinPerDay * drillPress_Efficiency() * drillPress_Reliability() * drillPress_Quality()));
//}

//Bender functions
function tubeBender_CurrentQuantity(){
    if (leanTool_New_Bender)
        return 2;
    else
        return 1;
 }
 function tubeBender_SetupTime(){
     if(leanTool_Smed_Bender)
         return 1;
     else
         return 5;
 }
 function tubeBender_NumParts(){
    return 8;
 }
 function tubeBender_ProcessTime() {
    return "1-3 min";
 }
 function tubeBender_TotalTime(){
    return 33;
 }
 function tubeBender_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Bender)
        tempEff+=.06;
    if(leanTool_SelfDirected_Metal)
        tempEff-=.03;
        return tempEff;
 }
 function tubeBender_Reliability(){
    if(leanTool_PM_Bender)
        return .998;
    else
        return .99;
 }function tubeBender_Quality(){
    if(leanTool_Quality_Bender)
        return .996;
    else
        return .98;
 }
 function tubeBender_BatchSizes(){
     if(leanTool_SmallLot_Metal)
         return 20;
     else
         return 40;
 }
 function tubeBender_Handling(){
    return 2;
 }
//Duplicate Function
 //function tubeBender_NeededMachines(){
   // return (tubeBender_NeededMin()/(24 * MinPerDay * tubeBender_Efficiency() * tubeBender_Reliability() * tubeBender_Quality()));
 //}

//welding functions
function welding_CurrentQuantity(){
    if (leanTool_New_Saw)
        return 3;
    else
        return 2;
}
function welding_SetupTime(){
    if(leanTool_Smed_Welding)
        return 2;
    else
        return 10;
}
function welding_NumParts(){
    return 5;
}
function welding_ProcessTime() {
    return "2-30 min";
}
function welding_TotalTime(){
    return 106;
}
function welding_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Welding)
        tempEff+=.06;
    if(leanTool_SelfDirected_Metal)
        tempEff-=.03;
    return tempEff;
}
function welding_Reliability(){
    if(leanTool_PM_Welding)
        return .99;
    else
        return .95;
}
function welding_Quality(){
    if(leanTool_Quality_Welding)
        return .99;
    else
        return .95;
}
function welding_BatchSizes(){
    if(leanTool_SmallLot_Weld)
        return 20;
    else
        return 40;
}
function welding_Handling(){
    if(leanTool_Cells)
        return 0;
    else
        return 2;
}
//Duplicate Function
//function welding_NeededMachines(){
  //  return (welding_NeededMin()/(24 * MinPerDay * welding_Efficiency() * welding_Reliability() * welding_Quality()));
//}

//Grinder functions
function grinder_CurrentQuantity(){
    if (leanTool_New_Grind)
        return 2;
    else
        return 1;
}
function grinder_SetupTime(){
    return 0;
}
function grinder_NumParts(){
    return 5;
}
function grinder_ProcessTime() {
    return "1-4 min";
}
function grinder_TotalTime(){
    return 34;
}
function grinder_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Grind)
        tempEff+=.06;
    if(leanTool_SelfDirected_Weld)
        tempEff-=.03;
    return tempEff;
}
function grinder_Reliability(){
    return 1;
}
function grinder_Quality(){
    return 1;
}
function grinder_BatchSizes(){
    if(leanTool_SmallLot_Weld)
        return 20;
    else
        return 40;
}
function grinder_Handling(){
    if(leanTool_Cells)
        return 0;
    else
        return 2;
}
//Duplicate function
//function grinder_NeededMachines(){
  //  return (grinder_NeededMin()/(24 * MinPerDay * grinder_Efficiency() * grinder_Reliability() * grinder_Quality()));
//}

//Paint functions
function paintBooth_CurrentQuantity(){
    if (leanTool_New_Paint)
        return 2;
    else
        return 1;
}
function paintBooth_SetupTime(){
    if(leanTool_Smed_Paint)
        return 3;
    else
        return 15;
}
function paintBooth_NumParts(){
    return 4;
}
function paintBooth_ProcessTime() {
    return "2-8 min";
}
function paintBooth_TotalTime(){
    return 38;
}
function paintBooth_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Paint)
        tempEff+=.06;
    if(leanTool_SelfDirected_Weld)
        tempEff-=.03;
    return tempEff;
}
function paintBooth_Reliability(){
    if(leanTool_PM_Paint)
        return .995;
    else
        return .98;
}
function paintBooth_Quality(){
    return 1;
}
function paintBooth_BatchSizes(){
    if(leanTool_SmallLot_Weld==true)
        return 20;
    else
        return 40;
}
function paintBooth_Handling(){
    return 2;
}
//Duplicate Function
//function paintBooth_NeededMachines(){
  //  return (paintBooth_NeededMin()/(24 * MinPerDay * paintBooth_Efficiency() * paintBooth_Reliability() * paintBooth_Quality()));
//}

// fabric functions
function fabricCutter_CurrentQuantity(){
    if (leanTool_New_Fabric)
        return 2;
    else
        return 1;
}
function fabricCutter_SetupTime(){
    return 0;
}
function fabricCutter_NumParts(){
    return 2;
}
function fabricCutter_ProcessTime() {
    return "4-8 min";
}
function fabricCutter_TotalTime(){
    return 12;
}
function fabricCutter_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Fabric)
        tempEff+=.06;
    if(leanTool_SelfDirected_Fabric)
        tempEff-=.03;
    return tempEff;
}
function fabricCutter_Reliability(){
    return 1;
}
function fabricCutter_Quality(){
    return 1;
}
function fabricCutter_BatchSizes(){
    if(leanTool_SmallLot_Fabric)
        return 10;
    else
        return 20;
}
function fabricCutter_Handling(){
    if(leanTool_Cells)
        return 0;
    else
        return 2;
}
//Duplicate Function
//function fabricCut_NeededMachines(){
  //  return (fabricCut_NeededMin()/(24 * MinPerDay * fabricCutter_Efficiency() * fabricCutter_Reliability() * fabricCutter_Quality()));
//}

// Sewing functions
function sewing_CurrentQuantity(){
    if (leanTool_New_Sewing)
        return 3;
    else
        return 2;
}
function sewing_SetupTime(){
    if(leanTool_Smed_Sewing)
        return 1;
    else
        return 5;
}
function sewing_NumParts(){
    return 2;
}
function sewing_ProcessTime() {
    return "12-30 min";
}
function sewing_TotalTime(){
    return 42;
}
function sewing_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Sewing)
        tempEff+=.06;
    if(leanTool_SelfDirected_Fabric)
        tempEff-=.03;
    return tempEff;
}
function sewing_Reliability(){
    if(leanTool_PM_Sewing)
        return .99;
    else
        return .95;
}
function sewing_Quality(){
    if(leanTool_Quality_Sewing)
        return .996;
    else
        return .98;
}
function sewing_BatchSizes(){
    if(leanTool_SmallLot_Weld)
        return 10;
    else
        return 20;
}
function sewing_Handling(){
    return 2;
}
//Duplicate Function
//function sewing_NeededMachines(){
  //  return (sewing_NeededMin()/(24 * MinPerDay() * sewing_Efficiency() * sewing_Reliability() * sewing_Quality()));
//}

//Assembly functions
function assembly_CurrentQuantity(){
    if (leanTool_New_Assembly)
        return 3;
    else
        return 2;
}
function assembly_SetupTime(){
    return 0;
}
function assembly_NumParts(){
    return 3;
}
function assembly_ProcessTime() {
    return "8-49 min";
}
function assembly_TotalTime(){
    return 65;
}
function assembly_Efficiency(){
    var tempEff=.9;
    if(leanTool_fiveS_Assembly)
        tempEff+=.06;
    return tempEff;
}
function assembly_Reliability(){
    return 1;
}
function assembly_Quality(){
    if(leanTool_Quality_Assembly)
        return .998;
    else
        return .99;
}
function assembly_BatchSizes(){
    return 1;
}
function assembly_Handling(){
    return 0;
}
//Duplicate Function
//function assembly_NeededMachines(){
  //  return (assembly_NeededMin()/(24 * MinPerDay() * assembly_Efficiency() * assembly_Reliability() * assembly_Quality()));
//}



//CAPACITY
var chairs = 200;
var MinPerDay = 450;

// Mitre Saw Capacity
function mitreSaw_NeededMin(){
    return(chairs * mitreSaw_TotalTime()) + (mitreSaw_NumParts() * chairs *(2 / mitreSaw_BatchSizes()) * (mitreSaw_SetupTime() + mitreSaw_Handling()))
}
function mitreSaw_DaysDownQuality(){
    return mitreSaw_Downtime(monthCounter);
}
function mitreSaw_DaysStarved(){
    if (leanTool_SmallPurchase_Steel) {
        return mitreSaw_LateParts(monthCounter);
    }
    else{
        return 0;
    }
}
function mitreSaw_AvailableMin(){
    return ((20 - (mitreSaw_DaysDownQuality() / mitreSaw_CurrentQuantity()) - mitreSaw_DaysStarved()) * MinPerDay * mitreSaw_Efficiency() * mitreSaw_Reliability());
}
function mitreSaw_NeededMachines(){
    return mitreSaw_NeededMin() / mitreSaw_AvailableMin();
}
function mitreSaw_NoCellsWorkers(){
    return Math.min(mitreSaw_CurrentQuantity(), Math.ceil(mitreSaw_NeededMachines()));
}
function mitreSaw_TrainWorkers(){
    if (leanTool_CrossTrain_Metal ) {
        return Math.min(mitreSaw_CurrentQuantity() + drillPress_CurrentQuantity() + tubeBender_CurrentQuantity(), Math.ceil(mitreSaw_NeededMachines() + drillPress_NeededMachines() + tubeBender_NeededMachines()), 0 );
    }
    else{
        return mitreSaw_NoCellsWorkers() + drillPress_NoCellsWorkers() + tubeBender_NoCellsWorkers();
    }
}
function mitreSaw_WorkersOver(){
    if ((mitreSaw_NoCellsWorkers() - mitreSaw_NeededMachines()) < 0) {
        return mitreSaw_NoCellsWorkers();
    }
    else if (((mitreSaw_NoCellsWorkers() - mitreSaw_NeededMachines()) / mitreSaw_NoCellsWorkers()) < 0.05) {
        return mitreSaw_NoCellsWorkers() / 2;
    }
    else{
        return 0;
    }
}
function mitreSaw_MaxCapacity(){
    return Math.floor(chairs * (mitreSaw_NoCellsWorkers() + 0.25 * mitreSaw_WorkersOver()) * (mitreSaw_AvailableMin() / mitreSaw_NeededMin()));
}
var prevInventory_Saw=40;
function mitreSaw_PrevInventory(){
    return prevInventory_Saw;
}
function mitreSaw_MaxOutInventory(){
    if (leanTool_Kaban_Metal) {
        return 0;
    }
    else{
        return 3 * drillPress_BatchSizes();
    }
}
function mitreSaw_ActualProd(){
    return Math.min(mitreSaw_MaxCapacity(), (chairs + mitreSaw_MaxOutInventory() - mitreSaw_PrevInventory()));
}
function mitreSaw_FinalInventory(){
    return mitreSaw_PrevInventory() + mitreSaw_ActualProd() - drillPress_ActualProd();
}
function mitreSaw_DaysLateOut(){
    var temp=0;
    if (leanTool_Kaban_Metal) {
        temp = 0;
    }
    else if (leanTool_SmallLot_Metal) {
        temp = 2;
    }
    else{
        temp = 4;
    }

    var temp2=0;
    if (mitreSaw_MaxCapacity() < chairs) {
        temp2 = ((chairs - mitreSaw_MaxCapacity())/10);
    }
    else{
        temp2 = 0;
    }
    return Math.max(mitreSaw_DaysDownQuality() - temp, 0) + temp2;
}

// Drill Press Capacity
function drillPress_NeededMin(){
    return ((chairs * drillPress_TotalTime()) + (drillPress_NumParts() * chairs *(2 / drillPress_BatchSizes()) * (drillPress_SetupTime() + drillPress_Handling())));
}
function drillPress_DaysDownQuality(){
    return (drillPress_Downtime(monthCounter) + drillPress_BadQuality(monthCounter));
}
function drillPress_DaysStarved(){
    return mitreSaw_DaysLateOut();
}
function drillPress_AvailableMin(){
    return ((20 - (drillPress_DaysDownQuality() / drillPress_CurrentQuantity()) - drillPress_DaysStarved()) * MinPerDay * drillPress_Efficiency() * drillPress_Reliability());
}
function drillPress_NeededMachines(){
    return drillPress_NeededMin() / drillPress_AvailableMin();
}
function drillPress_NoCellsWorkers() {
    return Math.min(drillPress_CurrentQuantity(), Math.ceil(drillPress_NeededMachines()));
}
function drillPress_WorkersOver() {
    if ((drillPress_NoCellsWorkers() - drillPress_NeededMachines()) < 0) {
        return drillPress_NoCellsWorkers();
    }
    else if (((drillPress_NoCellsWorkers() - drillPress_NeededMachines()) / drillPress_NoCellsWorkers()) < 0.05) {
        return (drillPress_NoCellsWorkers() / 2)
    }
    else{
        return 0;
    }
}
function drillPress_MaxCapacity() {
    return Math.floor(chairs * (drillPress_NoCellsWorkers() + 0.25 * drillPress_WorkersOver()) *(drillPress_AvailableMin() / drillPress_NeededMin()));
}
var prevInventory_Drill=40;
function drillPress_PrevInventory(){
    return prevInventory_Drill;
}
function drillPress_MaxOutInventory(){
    if (leanTool_Kaban_Metal) {
        return 0;
    }
    else{
        return 3 * tubeBender_BatchSizes();
    }
}
function drillPress_ActualProd(){
    return Math.min(drillPress_MaxCapacity(), (chairs + drillPress_MaxOutInventory() - drillPress_PrevInventory()), mitreSaw_ActualProd() + mitreSaw_PrevInventory());
}
function drillPress_FinalInventory(){
    return drillPress_PrevInventory() + drillPress_ActualProd() - tubeBender_ActualProd();
}
function drillPress_DaysLateOut() {
    var temp1=0;
    var temp2=0;

    if (leanTool_Kaban_Metal) {
        temp1 = 0;
    }
    else if (leanTool_SmallLot_Metal) {
        temp1 = 2;
    }
    else{ temp1 = 4;}

    if (drillPress_MaxCapacity() < chairs) {
        temp2 = ((chairs - drillPress_MaxCapacity())/10);
    }
    else{ temp2 = 0;}

    return Math.max(drillPress_DaysDownQuality() - temp1, 0) + temp2;



}

//Tube Bender Capacity
function tubeBender_NeededMin(){
    return (chairs * tubeBender_TotalTime() + tubeBender_NumParts() * chairs * (2 / tubeBender_BatchSizes()) * (tubeBender_SetupTime() + tubeBender_Handling()));
}
function tubeBender_DaysDownQuality(){
    return tubeBender_Downtime(monthCounter) + tubeBender_BadQuality(monthCounter) + tubeBender_DelayQuality(monthCounter);
}
function tubeBender_DaysStarved(){
    return drillPress_DaysLateOut();
}
function tubeBender_AvailableMin(){
    return (20 - (tubeBender_DaysDownQuality() / tubeBender_CurrentQuantity()) - tubeBender_DaysStarved()) * MinPerDay * tubeBender_Efficiency() * tubeBender_Reliability();
}
function tubeBender_NeededMachines(){
    return tubeBender_NeededMin() / tubeBender_AvailableMin();
}
function tubeBender_NoCellsWorkers() {
    return Math.min(tubeBender_CurrentQuantity(), Math.ceil(tubeBender_NeededMachines()));
}
function tubeBender_WorkersOver(){
    if ((tubeBender_NoCellsWorkers() - tubeBender_NeededMachines()) < 0) {
        return tubeBender_NoCellsWorkers();
    }
    else if (((tubeBender_NoCellsWorkers() - tubeBender_NeededMachines()) / tubeBender_NoCellsWorkers()) < 0.05) {
        return (tubeBender_NoCellsWorkers() / 2);
    }
    else{
        return 0;
    }
}
function tubeBender_MaxCapacity() {
    return Math.floor(chairs * (tubeBender_NoCellsWorkers() + 0.25 * tubeBender_WorkersOver()) * (tubeBender_AvailableMin() / tubeBender_NeededMin()));
}
var prevInventory_Bender=35;
function tubeBender_PrevInventory(){
    return prevInventory_Bender;
}
function tubeBender_MaxOutInventory() {
    if (leanTool_Market_Welding) {
        return tubeBender_BatchSizes();
    }
    else{
        return 3 * tubeBender_BatchSizes();
    }
}
function tubeBender_ActualProd() {
    return Math.min(tubeBender_MaxCapacity(), chairs + tubeBender_MaxOutInventory() - tubeBender_PrevInventory(), drillPress_ActualProd() + drillPress_PrevInventory());
}
function tubeBender_FinalInventory(){
    return tubeBender_PrevInventory() + tubeBender_ActualProd() - welding_ActualProd();
}
function tubeBender_DaysLateOut(){
    var temp1=0;
    var temp2=0;
    var temp3=0;

    if (leanTool_SmallLot_Metal) {
        temp1 = 2;
    }
    else if(!leanTool_SmallLot_Metal) {
        temp1 = 4;
    }
    if (tubeBender_MaxCapacity()<chairs) {
        temp2 = ((chairs - tubeBender_MaxCapacity())/10);
    }
    else{temp2 = 0;}

    if (tubeBender_PrevInventory()<tubeBender_BatchSizes()) {
        temp3 = ((tubeBender_BatchSizes() - tubeBender_PrevInventory())/10);
    }
    else{temp3 = 0;}

    temp1= Math.max(tubeBender_DaysDownQuality() - temp1,0);
    //console.log("Temp1 (0) ="+temp1+" Temp2 (0) ="+temp2+" Temp3 (0) ="+temp3);

    return ( temp1+ temp2 + temp3);


}

//Welding Capacity
function welding_NeededMin(){
    return (chairs * welding_TotalTime()) + (welding_NumParts() * chairs * (2 / welding_BatchSizes()) * (welding_SetupTime() + welding_Handling()));
}
function welding_DaysDownQuality(){
    return welding_Downtime(monthCounter) + welding_BadQuality(monthCounter);
}
function welding_DaysStarved(){
    return tubeBender_DaysLateOut();
}
function welding_AvailableMin(){
    return (20 - (welding_DaysDownQuality() / welding_CurrentQuantity()) - welding_DaysStarved()) * MinPerDay * welding_Efficiency() * welding_Reliability();
}
function welding_NeededMachines(){
    return welding_NeededMin() / welding_AvailableMin();
}
function welding_NoCellsWorkers() {
    return Math.min(welding_CurrentQuantity(), Math.ceil(welding_NeededMachines()));
}
function welding_TrainWorkers(){
    if (leanTool_CrossTrain_Weld) {
        return Math.min(welding_CurrentQuantity() + grinder_CurrentQuantity() + paintBooth_CurrentQuantity(), Math.ceil(welding_NeededMachines() + grinder_NeededMachines() + paintBooth_NeededMachines()));
    }
    else{
        return (welding_NoCellsWorkers() + grinder_NoCellsWorkers() + paintBooth_NoCellsWorkers());
    }
}
function welding_WorkersOver(){
    if ((welding_NoCellsWorkers() - welding_NeededMachines()) < 0) {
        return welding_NoCellsWorkers();
    }
    else if (((welding_NoCellsWorkers() - welding_NeededMachines()) / welding_NoCellsWorkers()) < 0.05) {
        return welding_NoCellsWorkers() / 2;
    }
    else{ return 0;}
}
function welding_MaxCapacity() {
    return Math.floor(chairs * (welding_NoCellsWorkers() + 0.25 * welding_WorkersOver()) * welding_AvailableMin() / welding_NeededMin());
}
var prevInventory_Weld=20;
function welding_PrevInventory(){
    return prevInventory_Weld;
}
function welding_MaxOutInventory() {
    if (leanTool_Kaban_Weld) {
        return 0;
    }
    else{
        return 3 * grinder_BatchSizes();
    }
}
function welding_ActualProd() {
    return Math.min(welding_MaxCapacity(), chairs + welding_MaxOutInventory() - welding_PrevInventory(), tubeBender_ActualProd() + tubeBender_PrevInventory());
}
function welding_FinalInventory(){
    return welding_PrevInventory() + welding_ActualProd() - grinder_ActualProd();
}
function welding_DaysLateOut(){
    var temp1;
    var temp2;

    if (leanTool_Kaban_Weld) {
        temp1 = 0;
    }
    else if (leanTool_SmallLot_Weld) {
        temp1 = 2;
    }
    else
        temp1 = 4;

    temp1 = Math.max(welding_DaysDownQuality() - temp1, 0);
    if (welding_MaxCapacity() < chairs) {
        temp2 = ((chairs - welding_MaxCapacity()) / 10);
    }
    else
        temp2 = 0;

    return (temp1+ temp2);
}

//Grinder Capacity
function grinder_NeededMin(){
    return ((chairs * grinder_TotalTime()) + (grinder_NumParts() * chairs * (2/ grinder_BatchSizes()) * (grinder_SetupTime() + grinder_Handling())));
}
function grinder_DaysDownQuality(){
    return grinder_DelayQuality(monthCounter);
}
function grinder_DaysStarved(){
    return welding_DaysLateOut();
}
function grinder_AvailableMin(){
    return (20- (grinder_DaysDownQuality() / grinder_CurrentQuantity()) - grinder_DaysStarved()) * MinPerDay * grinder_Efficiency() * grinder_Reliability();
}
function grinder_NeededMachines(){
    return grinder_NeededMin() / grinder_AvailableMin();
}
function grinder_NoCellsWorkers() {
    return Math.min(grinder_CurrentQuantity(), Math.ceil(grinder_NeededMachines()));
}
function grinder_WorkersOver(){
    if ((grinder_NoCellsWorkers() - grinder_NeededMachines()) < 0) {
        return grinder_NoCellsWorkers();
    }
    else if (((grinder_NoCellsWorkers() - grinder_NeededMachines()) / grinder_NoCellsWorkers()) < 0.05) {
        return grinder_NoCellsWorkers() / 2;
    }
    else{
        return 0;
    }
}
function grinder_MaxCapacity() {
    return Math.floor(chairs * (grinder_NoCellsWorkers() + 0.25 * grinder_WorkersOver()) * (grinder_AvailableMin() / grinder_NeededMin()));
}
var prevInventory_Grind=15;
function grinder_PrevInventory(){
    return prevInventory_Grind;
}
function grinder_MaxOutInventory() {
    if (leanTool_Kaban_Weld) {
        return 0;
    }
    else{
        return 3 * paintBooth_BatchSizes();
    }
}
function grinder_ActualProd() {
    return Math.min(grinder_MaxCapacity(), chairs + grinder_MaxOutInventory() - grinder_PrevInventory(), welding_ActualProd() + welding_PrevInventory());
}
function grinder_FinalInventory(){
    return (grinder_PrevInventory() + grinder_ActualProd() - paintBooth_ActualProd());
}
function grinder_DaysLateOut(){
    var temp;
    var temp2;

    if (leanTool_Kaban_Weld) {
        temp = 0;
    }
    else if (leanTool_SmallLot_Weld) {
        temp = 2;
    }
    else {temp =4;}

    if (grinder_MaxCapacity() < chairs) {
        temp2 = (chairs - grinder_MaxCapacity()) / 10;
    }
    else{temp2 = 0;}

    return Math.max(grinder_DaysDownQuality() - temp, 0) + temp2;
}

// Paint Booth Capacity
function paintBooth_NeededMin(){
    return (chairs * paintBooth_TotalTime()) + (paintBooth_NumParts() * chairs * (2 / paintBooth_BatchSizes()) * (paintBooth_SetupTime() + paintBooth_Handling()));
}
function paintBooth_DaysDownQuality(){
    return paintBooth_Downtime(monthCounter) + paintBooth_DelayQuality(monthCounter);
}
function paintBooth_DaysStarved(){
    return grinder_DaysLateOut();
}
function paintBooth_AvailableMin(){
    return (20 - (paintBooth_DaysDownQuality() / paintBooth_CurrentQuantity()) - paintBooth_DaysStarved()) * MinPerDay * paintBooth_Efficiency() * paintBooth_Reliability();
}
function paintBooth_NeededMachines(){
    return paintBooth_NeededMin() / paintBooth_AvailableMin();
}
function paintBooth_NoCellsWorkers() {
    return Math.min(paintBooth_CurrentQuantity(), Math.ceil(paintBooth_NeededMachines()));
}
function paintBooth_WorkersOver(){
    if ((paintBooth_NoCellsWorkers() - paintBooth_NeededMachines()) < 0 ) {
        return paintBooth_NoCellsWorkers();
    }
    else if (((paintBooth_NoCellsWorkers() - paintBooth_NeededMachines()) / paintBooth_NoCellsWorkers()) < 0.05) {
        return (paintBooth_NoCellsWorkers() / 2);
    }
    else {return 0;}
}
function paintBooth_MaxCapacity() {
    return Math.floor(chairs * (paintBooth_NoCellsWorkers() + 0.25 * paintBooth_WorkersOver()) * (paintBooth_AvailableMin() / paintBooth_NeededMin()));
}
var prevInventory_Paint=15;
function paintBooth_PrevInventory(){
    return prevInventory_Paint;
}
function paintBooth_MaxOutInventory() {
    if (leanTool_Market_Assembly) {
        return paintBooth_BatchSizes();
    }
    else{
        return 3 * paintBooth_BatchSizes();
    }
}
function paintBooth_ActualProd() {
    return Math.min(paintBooth_MaxCapacity(), (chairs + paintBooth_MaxOutInventory() - paintBooth_PrevInventory()), (grinder_ActualProd() + grinder_PrevInventory()));
}
function paintBooth_FinalInventory(){
    return (paintBooth_PrevInventory() + paintBooth_ActualProd() - assembly_ActualProd());
}
function paintBooth_DaysLateOut(){
    var temp;
    var temp2;
    var temp3;

    if (leanTool_SmallLot_Weld) {
        temp = 2;
    }
    else{temp = 4;}
    //console.log("temp 1 "+temp);

    if (sewing_MaxCapacity() < chairs) {
        temp2 = ((chairs - sewing_MaxCapacity()) / 10);
    }
    else{temp2 = 0;}
    //console.log("temp 2 "+temp2);

    if (paintBooth_PrevInventory() < paintBooth_BatchSizes()) {
        //console.log("paint batch "+paintBooth_BatchSizes());
        temp3 = ((paintBooth_BatchSizes() - paintBooth_PrevInventory()) / 10);
    }
    else{temp3 = 0;}
    //console.log("temp 3 "+temp3);

    return (Math.max((paintBooth_DaysDownQuality() - temp), 0) + temp2 + temp3);
}

//Fabric Cut Capacity
function fabricCut_NeededMin(){
    return (chairs * fabricCutter_TotalTime()) + (fabricCutter_NumParts() * chairs * (2 / fabricCutter_BatchSizes()) * ( fabricCutter_SetupTime() + fabricCutter_Handling()));
}
function fabricCut_DaysDownQuality(){
    return 0;
}
function fabricCut_DaysStarved(){
    if (leanTool_SmallPurchase_Nylon) {
        return fabricCutter_LateParts(monthCounter);
    }
    else{return 0;}
}
function fabricCut_AvailableMin(){
    return ((20 - (fabricCut_DaysDownQuality() / fabricCutter_CurrentQuantity()) - fabricCut_DaysStarved()) * MinPerDay * fabricCutter_Efficiency() * fabricCutter_Reliability());
}
function fabricCut_NeededMachines(){
    return fabricCut_NeededMin() / fabricCut_AvailableMin();
}
function fabricCut_NoCellsWorkers() {
    return Math.min(fabricCutter_CurrentQuantity(), Math.ceil(fabricCut_NeededMachines()));
}
function fabricCut_TrainWorkers(){
    if (leanTool_CrossTrain_Fabric) {
        return Math.min(fabricCutter_CurrentQuantity() + sewing_CurrentQuantity(), Math.ceil(fabricCut_NeededMachines() + sewing_NeededMachines()));
    }
    else{
        return fabricCut_NoCellsWorkers() + sewing_NoCellsWorkers();
    }
}
function fabricCut_WorkersOver(){
    if ((fabricCut_NoCellsWorkers() - fabricCut_NeededMachines()) < 0) {
        return fabricCut_NoCellsWorkers();
    }
    else if(((fabricCut_NoCellsWorkers() - fabricCut_NeededMachines()) / fabricCut_NoCellsWorkers()) < 0.05){
        return (fabricCut_NoCellsWorkers() / 2);
    }
    else{return 0;}
}
function fabricCut_MaxCapacity() {
    return Math.floor(chairs * (fabricCut_NoCellsWorkers() + 0.25 * fabricCut_WorkersOver()) *(fabricCut_AvailableMin() / fabricCut_NeededMin()));
}
var prevInventory_Fabric=20;
function fabricCut_PrevInventory(){
    return prevInventory_Fabric;
}
function fabricCut_MaxOutInventory() {
    return 3 * fabricCutter_BatchSizes();
}
function fabricCut_ActualProd() {
    return Math.min(fabricCut_MaxCapacity(), (chairs + fabricCut_MaxOutInventory() - fabricCut_PrevInventory()));
}
function fabricCut_FinalInventory(){
    return fabricCut_PrevInventory() + fabricCut_ActualProd() - sewing_ActualProd();
}
function fabricCut_DaysLateOut(){
    var temp;
    var temp2;

    if (leanTool_SmallLot_Fabric) {
        temp = 2
    }
    else{temp = 4;}

    if (fabricCut_MaxCapacity() < chairs) {
        temp2 = ((chairs - fabricCut_MaxCapacity()) / 10);
    }
    else{temp2 = 0;}

    return Math.max(fabricCut_DaysDownQuality() - temp,0) + temp2;
}

//Sewing Capacity
function sewing_NeededMin(){
    return (chairs * sewing_TotalTime() + (sewing_NumParts() * chairs *(2 / sewing_BatchSizes()) * (sewing_SetupTime() + sewing_Handling())));
}
function sewing_DaysDownQuality(){
    return sewing_Downtime(monthCounter) + sewing_BadQuality(monthCounter);
}
function sewing_DaysStarved(){
    return fabricCut_DaysLateOut();
}
function sewing_AvailableMin(){
    return (20 - (sewing_DaysDownQuality() / sewing_CurrentQuantity()) - sewing_DaysStarved()) * MinPerDay * sewing_Efficiency() * sewing_Reliability();
}
function sewing_NeededMachines(){
    return sewing_NeededMin() / sewing_AvailableMin();
}
function sewing_NoCellsWorkers() {
    return Math.min(sewing_CurrentQuantity(), Math.ceil(sewing_NeededMachines()));
}
function sewing_WorkersOver(){
    if ((sewing_NoCellsWorkers() - sewing_NeededMachines()) < 0) {
        return sewing_NoCellsWorkers();
    }
    else if (((sewing_NoCellsWorkers() - sewing_NeededMachines()) / sewing_NoCellsWorkers()) < 0.05) {
        return sewing_NoCellsWorkers() / 2;
    }
    else{
        return 0;
    }
}
function sewing_MaxCapacity() {
    return Math.floor(chairs * (sewing_NoCellsWorkers() + 0.25 * sewing_WorkersOver()) * (sewing_AvailableMin() / sewing_NeededMin()));
}
var prevInventory_Sewing=20;
function sewing_PrevInventory(){
    return prevInventory_Sewing;
}
function sewing_MaxOutInventory() {
    if (leanTool_Market_Assembly) {
        return sewing_BatchSizes();
    }
    else{
        return 3 * sewing_BatchSizes();
    }
}
function sewing_ActualProd() {
    return Math.min(sewing_MaxCapacity(), (chairs + sewing_MaxOutInventory() - sewing_PrevInventory()), (fabricCut_ActualProd() + fabricCut_PrevInventory()));
}
function sewing_FinalInventory(){
    return sewing_PrevInventory() + sewing_ActualProd() - assembly_ActualProd();
}
function sewing_DaysLateOut(){
    var temp;
    var temp2;
    var temp3;

    if (leanTool_SmallLot_Fabric) {
        temp = 2;
    }
    else{temp = 4;}

    if (sewing_MaxCapacity() < chairs) {
        temp2 = ((chairs - sewing_MaxCapacity()) / 10);
    }
    else{temp2 = 0;}

    if (sewing_PrevInventory() < sewing_BatchSizes()) {
        temp3 = ((sewing_BatchSizes() - sewing_PrevInventory()) / 10);
    }
    else{temp3 = 0;}

    return (Math.max(sewing_DaysDownQuality() - temp, 0) + temp2 + temp3);
}

//Assembly Capacity
function assembly_NeededMin(){
    return (chairs * assembly_TotalTime()) + (assembly_NumParts() * chairs *(2 / assembly_BatchSizes()) * (assembly_SetupTime() + assembly_Handling()));
}
function assembly_DaysDownQuality(){
    return assemblyBench_BadQuality(monthCounter);
}
function assembly_DaysStarved(){
    var temp;
    if (leanTool_SmallPurchase_Bike || leanTool_SmallPurchase_Metal) {
        temp =  assemblyBench_LateParts(monthCounter);
    }
    else{temp = 0;}

    return temp + (paintBooth_DaysLateOut() + sewing_DaysLateOut());
}
function assembly_AvailableMin(){
    return (20 - (assembly_DaysDownQuality() / assembly_CurrentQuantity()) - assembly_DaysStarved()) * MinPerDay * assembly_Efficiency() * assembly_Reliability();
}
function assembly_NeededMachines(){
    return assembly_NeededMin() / assembly_AvailableMin();
}
function assembly_NoCellsWorkers() {
    return Math.min(assembly_CurrentQuantity(), Math.ceil(assembly_NeededMachines()));
}
function assembly_TrainWorkers(){
    return assembly_NoCellsWorkers();
}
function assembly_WorkersOver(){
    if ((assembly_NoCellsWorkers() - assembly_NeededMachines()) < 0) {
        return assembly_NoCellsWorkers();
    }
    else if (((assembly_NoCellsWorkers() - assembly_NeededMachines()) / assembly_NoCellsWorkers()) < 0.05) {
        return (assembly_NoCellsWorkers() / 2);
    }
    else
        return 0;
}
function assembly_MaxCapacity() {
    return Math.floor(chairs * ( assembly_NoCellsWorkers() + 0.25 * assembly_WorkersOver()) *(assembly_AvailableMin() / assembly_NeededMin()));
}


var prevInventory_Assembly=10;
function assembly_PrevInventory() {
    return prevInventory_Assembly;
}
function assembly_MaxOutInventory() {
    return 0;
}
function assembly_ActualProd() {
    return Math.min(assembly_MaxCapacity(), chairs + assembly_MaxOutInventory() - assembly_PrevInventory(), paintBooth_ActualProd() + paintBooth_PrevInventory(), sewing_ActualProd() + sewing_PrevInventory());
}
function assembly_FinalInventory(){
    var tempInventory=assembly_PrevInventory();
    return (assembly_PrevInventory() + assembly_ActualProd());

}


//Capacity Totals
function total_NoCellsWorkers(){
    return (mitreSaw_NoCellsWorkers() + drillPress_NoCellsWorkers() + tubeBender_NoCellsWorkers() + welding_NoCellsWorkers() + grinder_NoCellsWorkers() + paintBooth_NoCellsWorkers() + fabricCut_NoCellsWorkers() + sewing_NoCellsWorkers() + assembly_NoCellsWorkers());
}
function total_TrainWorkers(){
    return (mitreSaw_TrainWorkers() + welding_TrainWorkers() + fabricCut_TrainWorkers() + assembly_TrainWorkers());
}
function total_WorkersOver(){
    return (mitreSaw_WorkersOver() + drillPress_WorkersOver() + tubeBender_WorkersOver() + welding_WorkersOver() + grinder_WorkersOver() + paintBooth_WorkersOver() + fabricCut_WorkersOver() + sewing_WorkersOver() + assembly_WorkersOver());
}


//INVENTORY

// Nineteen by one Tube Inventory
function nineteenbyoneTube_ChairQuantity(){
    return nineteenbyoneTube_PrevChairQuantity() + nineteenbyoneTube_ChairOrderQuantity() * nineteenbyoneTube_NumOrders() - mitreSaw_ActualProd();
}
function nineteenbyoneTube_ChairPrice() {
    return nineteenbyoneTube_PricePerChair();
}
function nineteenbyoneTube_Value(){
    return nineteenbyoneTube_ChairQuantity() * nineteenbyoneTube_ChairPrice();
}
var nineteenbyoneTube_PrevChair=200;
function nineteenbyoneTube_PrevChairQuantity(){
    return nineteenbyoneTube_PrevChair;
}
function nineteenbyoneTube_ChairOrderQuantity(){
    return nineteenbyoneTube_ChairsPerUnit() * nineteenbyoneTube_OrderQuantity();
}
function nineteenbyoneTube_NumOrders(){
    if (nineteenbyoneTube_PrevChairQuantity() - mitreSaw_ActualProd() <= nineteenbyoneTube_ROP()) {
        return (Math.ceil((nineteenbyoneTube_ROP() - nineteenbyoneTube_PrevChairQuantity() + mitreSaw_ActualProd()) / nineteenbyoneTube_ChairOrderQuantity()));
    }
    else{
        return 0;
    }
}
function nineteenbyoneTube_OrderPrice(){
    return nineteenbyoneTube_PricePerChair() * nineteenbyoneTube_ChairOrderQuantity();
}
function nineteenbyoneTube_InventoryOrderCost(){
    return nineteenbyoneTube_NumOrders() * nineteenbyoneTube_OrderCost();
}
function nineteenbyoneTube_MaterialCost(){
    return nineteenbyoneTube_OrderPrice() * nineteenbyoneTube_NumOrders();
}


//Twenty five by oneTube Inventory
function twentyfivebyoneTube_ChairQuantity(){
    return twentyfivebyoneTube_PrevChairQuantity() + (twentyfivebyoneTube_ChairOrderQuantity() * twentyfivebyoneTube_NumOrders()) - mitreSaw_ActualProd();
}
function twentyfivebyoneTube_ChairPrice() {
    return twentyfivebyoneTube_PricePerChair();
}
function twentyfivebyoneTube_Value(){
    return twentyfivebyoneTube_ChairQuantity() * twentyfivebyoneTube_ChairPrice();
}
var twentyfivebyoneTube_PrevChair=200;
function twentyfivebyoneTube_PrevChairQuantity(){
    return twentyfivebyoneTube_PrevChair;
}
function twentyfivebyoneTube_ChairOrderQuantity(){
    return twentyfivebyoneTube_ChairsPerUnit() * twentyfivebyoneTube_OrderQuantity();
}
function twentyfivebyoneTube_NumOrders(){
    if (twentyfivebyoneTube_PrevChairQuantity() - mitreSaw_ActualProd() <= twentyfivebyoneTube_ROP()) {
        return Math.ceil((twentyfivebyoneTube_ROP() - twentyfivebyoneTube_PrevChairQuantity() + mitreSaw_ActualProd()) / twentyfivebyoneTube_ChairOrderQuantity());
    }
    else{
        return 0;
    }
}
function twentyfivebyoneTube_OrderPrice(){
    return twentyfivebyoneTube_PricePerChair() * twentyfivebyoneTube_ChairOrderQuantity();
}
function twentyfivebyoneTube_InventoryOrderCost(){
    return twentyfivebyoneTube_NumOrders() * twentyfivebyoneTube_OrderCost();
}
function twentyfivebyoneTube_MaterialCost(){
    return twentyfivebyoneTube_OrderPrice() * twentyfivebyoneTube_NumOrders();
}


//Thirty five by two Tube Inventory
function thirtyfivebytwoTube_ChairQuantity(){
    return thirtyfivebytwoTube_PrevChairQuantity() + (thirtyfivebytwoTube_ChairOrderQuantity() * thirtyfivebytwoTube_NumOrders()) - mitreSaw_ActualProd();
}
function thirtyfivebytwoTube_ChairPrice() {
    return thirtyfivebytwoTube_PricePerChair();
}
function thirtyfivebytwoTube_Value(){
    return thirtyfivebytwoTube_ChairQuantity() * thirtyfivebytwoTube_ChairPrice();
}
var thirtyfivebytwoTube_PrevChair=1400;
function thirtyfivebytwoTube_PrevChairQuantity(){
    return thirtyfivebytwoTube_PrevChair;
}
function thirtyfivebytwoTube_ChairOrderQuantity(){
    return thirtyfivebytwoTube_ChairsPerUnit() * thirtyfivebytwoTube_OrderQuantity();
}
function thirtyfivebytwoTube_NumOrders(){
    if (thirtyfivebytwoTube_PrevChairQuantity() - mitreSaw_ActualProd() <= thirtyfivebytwoTube_ROP()) {
        return Math.ceil((thirtyfivebytwoTube_ROP() - thirtyfivebytwoTube_PrevChairQuantity() + mitreSaw_ActualProd()) / thirtyfivebytwoTube_ChairOrderQuantity());
    }
    else{
        return 0;
    }
}
function thirtyfivebytwoTube_OrderPrice(){
    return thirtyfivebytwoTube_PricePerChair() * thirtyfivebytwoTube_ChairOrderQuantity();
}
function thirtyfivebytwoTube_InventoryOrderCost(){
    return thirtyfivebytwoTube_NumOrders() * thirtyfivebytwoTube_OrderCost();
}
function thirtyfivebytwoTube_MaterialCost(){
    return thirtyfivebytwoTube_OrderPrice() * thirtyfivebytwoTube_NumOrders();
}


//Nylon Fabric Inventory
function nylonFabric_ChairQuantity(){
    return nylonFabric_PrevChairQuantity() + (nylonFabric_ChairOrderQuantity() * nylonFabric_NumOrders()) - fabricCut_ActualProd();
}
function nylonFabric_ChairPrice() {
    return nylonFabric_PricePerChair();
}
function nylonFabric_Value(){
    return nylonFabric_ChairQuantity() * nylonFabric_ChairPrice();
}
var nylonFabric_PrevChair=320;
function nylonFabric_PrevChairQuantity(){
    return nylonFabric_PrevChair;
}
function nylonFabric_ChairOrderQuantity(){
    return nylonFabric_ChairsPerUnit() * nylonFabric_OrderQuantity();
}
function nylonFabric_NumOrders(){
    if (nylonFabric_PrevChairQuantity() - fabricCut_ActualProd() <= nylonFabric_ROP()) {
        return Math.ceil((nylonFabric_ROP() - nylonFabric_PrevChairQuantity() + fabricCut_ActualProd()) / nylonFabric_ChairOrderQuantity());
    }
    else{
        return 0;
    }
}
function nylonFabric_OrderPrice(){
    return nylonFabric_PricePerChair() * nylonFabric_ChairOrderQuantity();
}
function nylonFabric_InventoryOrderCost(){
    return nylonFabric_NumOrders() * nylonFabric_OrderCost();
}
function nylonFabric_MaterialCost(){
    return nylonFabric_OrderPrice() * nylonFabric_NumOrders();
}

//Caster Wheel Inventory
function casterWheel_ChairQuantity(){
    return casterWheel_PrevChairQuantity() + (casterWheel_ChairOrderQuantity() * casterWheel_NumOrders()) - assembly_ActualProd();
}
function casterWheel_ChairPrice() {
    return casterWheel_PricePerChair();
}
function casterWheel_Value(){
    return casterWheel_ChairQuantity() * casterWheel_ChairPrice();
}
var casterWheel_PrevChair=200;
function casterWheel_PrevChairQuantity(){
    return casterWheel_PrevChair;
}
function casterWheel_ChairOrderQuantity(){
    return casterWheel_ChairsPerUnit() * casterWheel_OrderQuantity();
}
function casterWheel_NumOrders(){
    if (casterWheel_PrevChairQuantity() - assembly_ActualProd() <= casterWheel_ROP()) {
        return Math.ceil((casterWheel_ROP() - casterWheel_PrevChairQuantity() + assembly_ActualProd()) / casterWheel_ChairOrderQuantity());
    }
    else{return 0;}
}
function casterWheel_OrderPrice(){
    return casterWheel_PricePerChair() * casterWheel_ChairOrderQuantity();
}
function casterWheel_InventoryOrderCost(){
    return casterWheel_NumOrders() * casterWheel_OrderCost();
}
function casterWheel_MaterialCost(){
    return casterWheel_OrderPrice() * casterWheel_NumOrders();
}


//Rear Bike Wheel Inventory
function rearBikeWheel_ChairQuantity(){
    return rearBikeWheel_PrevChairQuantity() + (rearBikeWheel_ChairOrderQuantity() * rearBikeWheel_NumOrders()) - assembly_ActualProd();
}
function rearBikeWheel_ChairPrice() {
    return rearBikeWheel_PricePerChair();
}
function rearBikeWheel_Value(){
    return rearBikeWheel_ChairQuantity() * rearBikeWheel_ChairPrice();
}
var rearBikeWheel_PrevChair=180;
function rearBikeWheel_PrevChairQuantity(){
    return rearBikeWheel_PrevChair;
}
function rearBikeWheel_ChairOrderQuantity(){
    return rearBikeWheel_ChairsPerUnit() * rearBikeWheel_OrderQuantity();
}
function rearBikeWheel_NumOrders(){
    if (rearBikeWheel_ChairOrderQuantity() - assembly_ActualProd() <= rearBikeWheel_ROP()) {
        return Math.ceil((rearBikeWheel_ROP() - rearBikeWheel_PrevChairQuantity() + assembly_ActualProd()) / rearBikeWheel_ChairOrderQuantity());
    }
    else{
        return 0;
    }
}
function rearBikeWheel_OrderPrice(){
    return rearBikeWheel_PricePerChair() * rearBikeWheel_ChairOrderQuantity();
}
function rearBikeWheel_InventoryOrderCost(){
    return rearBikeWheel_NumOrders() * rearBikeWheel_OrderCost();
}
function rearBikeWheel_MaterialCost(){
    return rearBikeWheel_OrderPrice() * rearBikeWheel_NumOrders();
}

//Handle Inventory
function handle_ChairQuantity(){
    return handle_PrevChairQuantity() + (handle_ChairOrderQuantity() * handle_NumOrders()) - assembly_ActualProd();
}
function handle_ChairPrice() {
    return handle_PricePerChair();
}
function handle_Value(){
    return handle_ChairQuantity() * handle_ChairPrice();
}
var handle_PrevChair=400;
function handle_PrevChairQuantity(){
    return handle_PrevChair;
}
function handle_ChairOrderQuantity(){
    return handle_ChairsPerUnit() * handle_OrderQuantity();
}
function handle_NumOrders(){
    if (handle_PrevChairQuantity() - assembly_ActualProd() <= handle_ROP()) {
        return Math.ceil((handle_ROP() - handle_PrevChairQuantity() + assembly_ActualProd()) / handle_ChairOrderQuantity());
    }
    else{
        return 0;
    }
}
function handle_OrderPrice(){
    return handle_PricePerChair() * handle_ChairOrderQuantity();
}
function handle_InventoryOrderCost(){
    return handle_NumOrders() * handle_OrderCost();
}
function handle_MaterialCost(){
    return handle_OrderPrice() * handle_NumOrders();
}

//Fender Inventory
function fender_ChairQuantity(){
    return fender_PrevChairQuantity() + (fender_ChairOrderQuantity() * fender_NumOrders()) - assembly_ActualProd();
}
function fender_ChairPrice() {
    return fender_PricePerChair();
}
function fender_Value(){
    return fender_ChairQuantity() * fender_ChairPrice();
}
var fender_PrevChair=500;
function fender_PrevChairQuantity(){
    return fender_PrevChair;
}
function fender_ChairOrderQuantity(){
    return fender_ChairsPerUnit() * fender_OrderQuantity();
}
function fender_NumOrders(){
    if (fender_PrevChairQuantity() - assembly_ActualProd() <= fender_ROP()) {
        return Math.ceil((fender_ROP() - fender_PrevChairQuantity() + assembly_ActualProd()) / fender_ChairOrderQuantity());
    }
    else{
        return 0;
    }
}
function fender_OrderPrice(){
    return fender_PricePerChair() * fender_ChairOrderQuantity();
}
function fender_InventoryOrderCost(){
    return fender_NumOrders() * fender_OrderCost();
}
function fender_MaterialCost(){
    return fender_OrderPrice() * fender_NumOrders();
}

//Footrest Plate Inventory
function footrestPlate_ChairQuantity(){
    return (footrestPlate_PrevChairQuantity() + (footrestPlate_ChairOrderQuantity() * footrestPlate_NumOrders()) - assembly_ActualProd());
}
function footrestPlate_ChairPrice() {
    return footrestPlate_PricePerChair();
}
function footrestPlate_Value(){
    return footrestPlate_ChairQuantity() * footrestPlate_ChairPrice();
}
var footrestPlate_PrevChair=200;
function footrestPlate_PrevChairQuantity(){
    return footrestPlate_PrevChair;
}
function footrestPlate_ChairOrderQuantity(){
    return footrestPlate_ChairsPerUnit() * footrestPlate_OrderQuantity();
}
function footrestPlate_NumOrders(){
    if (footrestPlate_PrevChairQuantity() - assembly_ActualProd() <= footrestPlate_ROP()) {
        return Math.ceil((footrestPlate_ROP() - footrestPlate_PrevChairQuantity() + assembly_ActualProd()) / footrestPlate_ChairOrderQuantity());
    }
    else{
        return 0;
    }
}
function footrestPlate_OrderPrice(){
    return footrestPlate_PricePerChair() * footrestPlate_ChairOrderQuantity();
}
function footrestPlate_InventoryOrderCost(){
    return footrestPlate_NumOrders() * footrestPlate_OrderCost();
}
function footrestPlate_MaterialCost(){
    return footrestPlate_OrderPrice() * footrestPlate_NumOrders();
}

//Brake Lever Inventory
function brakeLever_ChairQuantity(){
    return (brakeLever_PrevChairQuantity() + (brakeLever_ChairOrderQuantity() * brakeLever_NumOrders()) - assembly_ActualProd());
}
function brakeLever_ChairPrice() {
    return brakeLever_PricePerChair();
}
function brakeLever_Value(){
    return brakeLever_ChairQuantity() * brakeLever_ChairPrice();
}
var brakeLever_PrevChair=250;
function brakeLever_PrevChairQuantity(){
    return brakeLever_PrevChair;
}
function brakeLever_ChairOrderQuantity(){
    return brakeLever_ChairsPerUnit() * brakeLever_OrderQuantity();
}
function brakeLever_NumOrders(){
    if (brakeLever_PrevChairQuantity() - assembly_ActualProd() <= brakeLever_ROP()) {
        return Math.ceil((brakeLever_ROP() - brakeLever_PrevChairQuantity() + assembly_ActualProd()) / brakeLever_ChairOrderQuantity());
    }
    else{return 0;}
}
function brakeLever_OrderPrice(){
    return brakeLever_PricePerChair() * brakeLever_ChairOrderQuantity();
}
function brakeLever_InventoryOrderCost(){
    return brakeLever_NumOrders() * brakeLever_OrderCost();
}
function brakeLever_MaterialCost(){
    return brakeLever_OrderPrice() * brakeLever_NumOrders();
}

////////////////
//Lower section of inventory
function tubeSaw_Batches(){
    return 14;
}
function tubeSaw_ChairQuantity(){
    return mitreSaw_FinalInventory();
}
function tubeSaw_ChairPrice(){
    return 1.95;
}
function tubeSaw_Value(){
    return tubeSaw_Batches() * tubeSaw_ChairQuantity() * tubeSaw_ChairPrice();
}


function tubeDrill_Batches(){
    return 14;
}
function tubeDrill_ChairQuantity(){
    return drillPress_FinalInventory();
}
function tubeDrill_ChairPrice(){
    return 2.10;
}
function tubeDrill_Value(){
    return tubeDrill_Batches() * tubeDrill_ChairQuantity() * tubeDrill_ChairPrice();
}

function tubeBender_Batches(){
    return 14;
}
function tubeBender_ChairQuantity(){
    return tubeBender_FinalInventory();
}
function tubeBender_ChairPrice(){
    return 2.40;
}
function tubeBender_Value(){
    return tubeBender_Batches() * tubeBender_ChairQuantity() * tubeBender_ChairPrice();
}


function weldWelder_Batches(){
    return 5;
}
function weldWelder_ChairQuantity(){
    return welding_FinalInventory();
}
function weldWelder_ChairPrice(){
    return 9.75;
}
function weldWelder_Value(){
    return weldWelder_Batches() * weldWelder_ChairQuantity() * weldWelder_ChairPrice();
}

function weldGrinder_Batches(){
    return 5;
}
function weldGrinder_ChairQuantity() {
    return grinder_FinalInventory();
}
function weldGrinder_ChairPrice(){
    return 10.75;
}
function weldGrinder_Value(){
    return weldGrinder_Batches() * weldGrinder_ChairQuantity() * weldGrinder_ChairPrice();
}

function weldPaint_Batches(){
    return 5;
}
function weldPaint_ChairQuantity(){
    return paintBooth_FinalInventory();
}
function weldPaint_ChairPrice(){
    return 12.00;
}

function weldPaint_Value(){
    return weldPaint_Batches() * weldPaint_ChairQuantity() * weldPaint_ChairPrice();
}

function fabricFabCut_Batches(){
    return  2;
}
function fabricFabCut_ChairQuantity(){
    return fabricCut_FinalInventory();
}
function fabricFabCut_ChairPrice(){
    return  8.75;
}
function fabricFabCut_Value(){
    return fabricFabCut_Batches() * fabricFabCut_ChairQuantity() * fabricFabCut_ChairPrice();
}

function fabricSewing_Batches(){
    return 2;
}
function fabricSewing_ChairQuantity(){
    return  sewing_FinalInventory();
}
function fabricSewing_ChairPrice(){
    return 15.75;
}
function fabricSewing_Value(){
    return fabricSewing_Batches() * fabricSewing_ChairQuantity() * fabricSewing_ChairPrice();
}


function finalAssembly_ChairQuantity(){
    return 5;
}
function finalAssembly_ChairPrice(){
    return 225.00;
}
function finalAssembly_Value(){
    return finalAssembly_ChairQuantity() * finalAssembly_ChairPrice();
}

function total_Value(){
    return (nineteenbyoneTube_Value() + twentyfivebyoneTube_Value() + thirtyfivebytwoTube_Value() + nylonFabric_Value() + casterWheel_Value() + rearBikeWheel_Value() + handle_Value() + fender_Value() + footrestPlate_Value() + brakeLever_Value() + tubeSaw_Value() + tubeDrill_Value() + tubeBender_Value() + weldWelder_Value() + weldGrinder_Value() + weldPaint_Value() + fabricFabCut_Value() + fabricSewing_Value() + finalAssembly_Value());
}
function total_NumOrders(){
    return (nineteenbyoneTube_NumOrders() + twentyfivebyoneTube_NumOrders() + thirtyfivebytwoTube_NumOrders() + nylonFabric_NumOrders() + casterWheel_NumOrders() +rearBikeWheel_NumOrders()+ handle_NumOrders() + fender_NumOrders() + footrestPlate_NumOrders() + brakeLever_NumOrders());
}
function total_OrderCost(){
    return (nineteenbyoneTube_InventoryOrderCost() + twentyfivebyoneTube_InventoryOrderCost() + thirtyfivebytwoTube_InventoryOrderCost() + nylonFabric_InventoryOrderCost() + casterWheel_InventoryOrderCost()+ rearBikeWheel_InventoryOrderCost()+ handle_InventoryOrderCost() + fender_InventoryOrderCost() + footrestPlate_InventoryOrderCost() + brakeLever_InventoryOrderCost());
}
function total_MaterialCost(){
    return (nineteenbyoneTube_MaterialCost() + twentyfivebyoneTube_MaterialCost() + thirtyfivebytwoTube_MaterialCost() + nylonFabric_MaterialCost() + casterWheel_MaterialCost() + rearBikeWheel_MaterialCost() + handle_MaterialCost() + fender_MaterialCost() + footrestPlate_MaterialCost() + brakeLever_MaterialCost());
}

/////////////////////////////////////
//Raw materials
// 19x1 tube info

function nineteenbyoneTube_OrderQuantity(){
    if(leanTool_SmallPurchase_Steel)
        return 5;
    else
        return 10;
}
function nineteenbyoneTube_ROP(){
    if(leanTool_SmallPurchase_Steel)
        return 0;
    else
        return 100;
}
function nineteenbyoneTube_ChairsPerUnit(){
    return 8;
}
function nineteenbyoneTube_PricePerUnit(){
    return 225;
}
function nineteenbyoneTube_PricePerChair(){
    return (nineteenbyoneTube_PricePerUnit() / nineteenbyoneTube_ChairsPerUnit());
}
function nineteenbyoneTube_Reliability(){
    if(leanTool_Vendor_Steel)
        return .99;
    else
        return .95;
}
function nineteenbyoneTube_OrderCost(){
    if(leanTool_Vendor_Steel)
        return 50;
    else
        return 200;
}

//25x1 tube info
function twentyfivebyoneTube_OrderQuantity(){
    if(leanTool_SmallPurchase_Steel)
        return 3;
    else
        return 10;
}
function twentyfivebyoneTube_ROP(){
    if(leanTool_SmallPurchase_Steel)
        return 0;
    else
        return 100;
}
function twentyfivebyoneTube_ChairsPerUnit(){
    return 17;
}
function twentyfivebyoneTube_PricePerUnit(){
    return 300;
}
function twentyfivebyoneTube_PricePerChair(){
    return (twentyfivebyoneTube_PricePerUnit() / twentyfivebyoneTube_ChairsPerUnit());
}
function twentyfivebyoneTube_Reliability(){
    if(leanTool_Vendor_Steel)
        return .99;
    else
        return .95;
}
function twentyfivebyoneTube_OrderCost(){
    if(leanTool_Vendor_Steel)
        return 50;
    else
        return 200;
}

//35x2 tube info
function thirtyfivebytwoTube_OrderQuantity(){
    if(leanTool_SmallPurchase_Steel)
        return 3;
    else
        return 10;
}
function thirtyfivebytwoTube_ROP(){
    if(leanTool_SmallPurchase_Steel)
        return 0;
    else
        return 100;
}
function thirtyfivebytwoTube_ChairsPerUnit(){
    return 600;
}
function thirtyfivebytwoTube_PricePerUnit(){
    return 500;
}
function thirtyfivebytwoTube_PricePerChair(){
    return (thirtyfivebytwoTube_PricePerUnit() / thirtyfivebytwoTube_ChairsPerUnit());
}
function thirtyfivebytwoTube_Reliability(){
    if(leanTool_Vendor_Steel)
        return .99;
    else
        return .95;
}
function thirtyfivebytwoTube_OrderCost(){
    if(leanTool_Vendor_Steel)
        return 50;
    else
        return 200;
}

//nylon fabric info
function nylonFabric_OrderQuantity(){
    if(leanTool_SmallPurchase_Nylon)
        return 3;
    else
        return 12;
}
function nylonFabric_ROP(){
    if(leanTool_SmallPurchase_Nylon)
        return 0;
    else
        return 100;
}
function nylonFabric_ChairsPerUnit(){
    return 50;
}
function nylonFabric_PricePerUnit(){
    return 450;
}
function nylonFabric_PricePerChair(){
    return (nylonFabric_PricePerUnit() / nylonFabric_ChairsPerUnit());
}
function nylonFabric_Reliability(){
    if(leanTool_Vendor_Nylon)
        return .98;
    else
        return .90;
}
function nylonFabric_OrderCost(){
    if(leanTool_Vendor_Nylon)
        return 50;
    else
        return 200;
}

//Caster Wheel info
function casterWheel_OrderQuantity(){
    if(leanTool_SmallPurchase_Bike)
        return 2;
    else
        return 8;
}
function casterWheel_ROP(){
    if(leanTool_SmallPurchase_Bike)
        return 0;
    else
        return 100;
}
function casterWheel_ChairsPerUnit(){
    return 100;
}
function casterWheel_PricePerUnit(){
    return 600;
}
function casterWheel_PricePerChair(){
    return (casterWheel_PricePerUnit() / casterWheel_ChairsPerUnit());
}
function casterWheel_Reliability(){
    if(leanTool_Vendor_Bike)
        return .98;
    else
        return .90;
}
function casterWheel_OrderCost(){
    if(leanTool_Vendor_Bike)
        return 50;
    else
        return 200;
}

//Rear Bike Wheel info
function rearBikeWheel_OrderQuantity(){
    if(leanTool_SmallPurchase_Bike)
        return 5;
    else
        return 20;
}
function rearBikeWheel_ROP(){
    if(leanTool_SmallPurchase_Bike)
        return 0;
    else
        return 100;
}
function rearBikeWheel_ChairsPerUnit(){
    return 10;
}
function rearBikeWheel_PricePerUnit(){
    return 400;
}
function rearBikeWheel_PricePerChair(){
    return (rearBikeWheel_PricePerUnit() / rearBikeWheel_ChairsPerUnit());
}
function rearBikeWheel_Reliability(){
    if(leanTool_Vendor_Bike)
        return .98;
    else
        return .90;
}
function rearBikeWheel_OrderCost(){
    if(leanTool_Vendor_Bike)
        return 50;
    else
        return 200;
}

//Handle info
function handle_OrderQuantity(){
    if(leanTool_SmallPurchase_Bike)
        return 1;
    else
        return 4;
}
function handle_ROP(){
    if(leanTool_SmallPurchase_Bike)
        return 0;
    else
        return 100;
}
function handle_ChairsPerUnit(){
    return 100;
}
function handle_PricePerUnit(){
    return 225;
}
function handle_PricePerChair(){
    return (handle_PricePerUnit() / handle_ChairsPerUnit());
}
function handle_Reliability(){
    if(leanTool_Vendor_Bike)
        return .98;
    else
        return .90;
}
function handle_OrderCost(){
    if(leanTool_Vendor_Bike)
        return 50;
    else
        return 200;
}

//Fender info
function fender_OrderQuantity(){
    if(leanTool_SmallPurchase_Bike)
        return 2;
    else
        return 8;
}
function fender_ROP(){
    if(leanTool_SmallPurchase_Bike)
        return 0;
    else
        return 100;
}
function fender_ChairsPerUnit(){
    return 50;
}
function fender_PricePerUnit(){
    return 120;
}
function fender_PricePerChair(){
    return (fender_PricePerUnit() / fender_ChairsPerUnit());
}
function fender_Reliability(){
    if(leanTool_Vendor_Bike)
        return .98;
    else
        return .90;
}
function fender_OrderCost(){
    if(leanTool_Vendor_Bike)
        return 50;
    else
        return 200;
}

//Footrest info
function footrestPlate_OrderQuantity(){
    if(leanTool_SmallPurchase_Metal)
        return 1;
    else
        return 4;
}
function footrestPlate_ROP(){
    if(leanTool_SmallPurchase_Metal)
        return 0;
    else
        return 100;
}
function footrestPlate_ChairsPerUnit(){
    return 100;
}
function footrestPlate_PricePerUnit(){
    return 150;
}
function footrestPlate_PricePerChair(){
    return (footrestPlate_PricePerUnit() / footrestPlate_ChairsPerUnit());
}
function footrestPlate_Reliability(){
    if(leanTool_Vendor_Metal)
        return .98;
    else
        return .90;
}
function footrestPlate_OrderCost() {
    if (leanTool_Vendor_Metal)
        return 50;
    else
        return 200;
}

//Brake Lever info

function brakeLever_OrderQuantity(){
    if(leanTool_SmallPurchase_Metal)
        return 1;
    else
        return 2;
}
function brakeLever_ROP(){
    if(leanTool_SmallPurchase_Metal)
        return 0;
    else
        return 100;
}
function brakeLever_ChairsPerUnit(){
    return 200;
}
function brakeLever_PricePerUnit(){
    return 150;
}
function brakeLever_PricePerChair(){
    return (brakeLever_PricePerUnit() / brakeLever_ChairsPerUnit());
}
function brakeLever_Reliability(){
    if(leanTool_Vendor_Metal)
        return .98;
    else
        return .90;
}
function brakeLever_OrderCost(){
    if(leanTool_Vendor_Metal)
        return 50;
    else
        return 200;
}

//total price per chair
function totalPricePerChair(){
    return (nineteenbyoneTube_PricePerChair() + twentyfivebyoneTube_PricePerChair() + thirtyfivebytwoTube_PricePerChair() + nylonFabric_PricePerChair() + casterWheel_PricePerChair() + rearBikeWheel_PricePerChair() + handle_PricePerChair() + fender_PricePerChair() + footrestPlate_PricePerChair() + brakeLever_PricePerChair());
}


    var monthData = [new monthFunc("January", 1), new monthFunc("February", 2), new monthFunc("March", 3),
        new monthFunc("April", 4), new monthFunc("May", 5), new monthFunc("June", 6),
        new monthFunc("July", 7), new monthFunc("August", 8), new monthFunc("September", 9),
        new monthFunc("October", 10), new monthFunc("November", 11), new monthFunc("December", 12)];

    startMonth();
//Starting Data


    /*
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


    var update = function (modifier) {


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
        // lean tool buttons
        contact(leanToolsBtnCells);
        contact(leanToolsBtnSmedSaw);




        for (var i = 0; i < 9; i++) {
            for (var a = 0; a < 9; a++) {
                if (station[i].position == a) {
                    station[i].x = position[a].x;
                    station[i].y = position[a].y;
                }
            }
        }
        for (var i = 0; i < 9; i++) {
            contact(station[i]);
        }
    };


// checks if mouse is touching something
    var contact = function (button) {

        if (posx >= button.x &&
            posx <= button.w + button.x &&
            posy >= button.y &&
            posy <= button.h + button.y) {
            button.hover = true;
        }
        else
            button.hover = false;
    }


    var render = function () {


        if (currentScreen == "mainMenu") {
            draw(ctx, menu, 0, 0);
            draw(ctx, startBtn, 0, 0);
            draw(ctx, creditBtn, 0, 0);
            // draw(ctx,loadingBar[0],0,0);

            //for(var i=0;i<loadingBar.length;i++){
            //  draw(ctx,loadingBar[i],0,0);
            //check if problem[i].== true to display problem

            //}

        }
        if (currentScreen == "credits")
            ctx.drawImage(credits.image, 0, 0);
        //    draw(ctx,credits,0,0);

        //factory background layer (Left window)
        if (currentScreen == "factory") {

            //if (gameScreen.ready) //half of sceen
            //  ctx2.drawImage(gameScreen.image,0,0,960,1080, 0, 0, 750, 750);

            draw(ctx2, gameScreen, 0, 0); //entire screen
            //ctx2.drawImage(station[0].image,station[0].x,station[0].y,100,200);
            drawSprtSht();

            /*for (var i = 0; i < 9; i++) {
                draw(ctx2, station[i], 3, -3);
            }*/
            if (subScreen == "office" || subScreen == "leanTools" || subScreen == "monthlyReport" && subScreen == "calendar")
                draw(ctx2, office, 0, 0);
            if (subScreen == "office") {

                drawBossCoffeeAnm();
                drawBossWalkRightandMoveRight();
                //draw(ctx2,leanToolsBtn,0,0);//////////////////////// temp invisible hitbox
                //draw(ctx2,reportBtn,0,0);/////////////////////////// temp invisible hitbox
                //draw(ctx2,advMonthBtn,0,0);///////////////////////// temp invisible hitbox
            }

            //draw background of workstation
            if (subScreen != "office" && subScreen != "leanTools" && subScreen != "monthlyReport" && subScreen != "calendar") {
                draw(ctx2, stationView, 0, 0);
            }
            //Determine which station to draw using this switch.
            switch (subScreen) {
                case sawStation.subScreen:
                    draw(ctx2, sawView, 0, 0);
                    break;
                case drillStation.subScreen:
                    draw(ctx2, drillView, 0, 0);
                    break;
                case bendStation.subScreen:
                    draw(ctx2, bendView, 0, 0);
                    break;
                case weldStation.subScreen:
                    draw(ctx, weldView, 0, 0);
                    break;
                case grindStation.subScreen:
                    draw(ctx2, grindView, 0, 0);
                    break;
                case paintStation.subScreen:
                    draw(ctx2, paintView, 0, 0);
                    break;
                case assemblyStation.subScreen:
                    draw(ctx2, assemblyView, 0, 0);
                    break;
                case fabricStation.subScreen:
                    draw(ctx2, fabricView, 0, 0);
                    break;
                case sewingStation.subScreen:
                    draw(ctx2, sewingView, 0, 0);
                    break;
            }


            if (subScreen == "leanTools") {
                draw(ctx2, leanToolsView, 0, 0);
                ctx2.font = "80px Georgia";
                //ctx2.fillText("Lean Tools",900,100);
                ctx2.font = "16px Georgia";
                //draw(ctx,leanToolsBtnCells,0,0);
                if (leanTool_Cells == true) {
                    ctx.fillText("/////", 910, 314);
                }
                ctx.fillText("Cells", 910, 314);

                // place in a different screen in the near future
                if (leanTool_Smed_Saw == true) {
                    ctx.fillText("///////////", 1030, 314);
                }
                ctx.fillText("SMED-Saw", 1030, 314);


                ctx.textAlign = "right";
                ctx.fillText(leanToolAllowance, 1020, 550);
                ctx.textAlign = "left";
                ctx2.font = "10px Georgia";
            }

            //report screen is background of
            if (subScreen == "monthlyReport") {
                draw(ctx2, reportView, 0, 0);
                ctx2.font = "60px Georgia";
                ctx2.fillText(monthData[monthCounter].name, reportView.x + 30, reportView.y + 120);
                ctx2.font = "10px Georgia";

                var column = [];
                column[0] = reportView.x + 30;
                for (var i = 1; i < 8; i++) {

                    column[i] = column[i - 1] + 80;

                }

                column[1] = column[0] + 150;
                column[2] = column[1] + 60;
                column[3] = column[2] + 100;
                var row = [];
                row[0] = reportView.y + 150;
                for (var i = 1; i < 20; i++) {
                    row[i] = row[i - 1] + 15;
                }
                ctx2.font = "14px Georgia";

                //headings
                ctx.fillText("Sales: ", column[0], row[2]);
                ctx.fillText("Total Income: ", column[0], row[3]);

                ctx.fillText("Labor-regular:", column[0], row[6]);
                ctx.fillText("Labor-overtime:", column[0], row[7]);
                ctx.fillText("Purchased materials:", column[0], row[8]);
                ctx.fillText("Direct cost:", column[0], row[9]);

                ctx.fillText("Inventory cost:", column[0], row[11]);
                ctx.fillText("Ordering cost:", column[0], row[12]);
                ctx.fillText("Lean improvements:", column[0], row[13]);
                ctx.fillText("Overhead:", column[0], row[14]);
                ctx.fillText("Indirect cost:", column[0], row[15]);

                ctx.fillText("Total expenses:", column[0], row[17]);

                //right alligned values
                ctx2.textAlign = "right";
                ctx.fillText("$", column[1], row[2]), ctx.fillText(monthData[monthCounter].sales, column[2], row[2]);


                ctx.fillText("$", column[1], row[6]), ctx.fillText(monthData[monthCounter].laborRegular, column[2], row[6]);
                ctx.fillText("$", column[1], row[7]), ctx.fillText(monthData[monthCounter].laborOvertime, column[2], row[7]);
                ctx.fillText("$", column[1], row[8]), ctx.fillText(monthData[monthCounter].totalMaterialsCost, column[2], row[8]);
                ctx.fillText("$", column[1], row[9]), ctx.fillText(monthData[monthCounter].directCost, column[2], row[9]);

                ctx.fillText("$", column[1], row[11]), ctx.fillText(monthData[monthCounter].inventoryCost, column[2], row[11]);
                ctx.fillText("$", column[1], row[12]), ctx.fillText(monthData[monthCounter].orderingCost, column[2], row[12]);
                ctx.fillText("$", column[1], row[13]), ctx.fillText(monthData[monthCounter].leanIdeasCost, column[2], row[13]);
                ctx.fillText("$", column[1], row[14]), ctx.fillText(monthData[monthCounter].overheadCost, column[2], row[14]);
                ctx.fillText("$", column[1], row[15]), ctx.fillText(monthData[monthCounter].indirectCost, column[2], row[15]);

                ctx.fillText("$", column[1], row[17]), ctx.fillText(monthData[monthCounter].totalExpenses, column[2], row[17]);


                ctx2.font = "bold 14px Georgia";
                ctx.fillText("$", column[1], row[3]), ctx.fillText(monthData[monthCounter].sales, column[2], row[3]);
                ctx.fillText("$", column[1], row[19]), ctx.fillText(monthData[monthCounter].totalProfit, column[2], row[19]);
                ctx2.font = "normal 14px Georgia"

                ctx2.textAlign = "left";


                //ctx.fillText("Chairs Sold: ",column[2],row[0]), ctx.fillText(monthData[monthCounter].chairsSold,column[3],row[0]);
                //ctx.fillText("Price: ",column[4],row[0]);
                //ctx.fillText("$    "+chairPrice,column[5],row[0]);

                //Bold headings
                ctx2.font = "bold 14px Georgia";
                ctx.fillText("Income", column[0], row[1]);
                ctx.fillText("Expenses", column[0], row[5]);
                ctx.fillText("Total profit:", column[0], row[19]);
                ctx2.font = "normal 14px Georgia";
                ctx2.font = "10px Georgia";
                /*month.chairsSold = 200;


                 month.totalExpenses=month.directCost+month.indirectCost;

                 month.totalProfit=month.sales-month.totalExpenses;
                 */

                //ctx.fillText("Sales"+sales,reportView.x+10,reportView.y+);
            }
            if (subScreen == "calendar") {
                draw(ctx2, calendarView, 0, 0);
                ctx2.font = "80px Georgia";
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
                ctx2.fillText(currentMonth, 900, 100);
                ctx2.font = "10px Georgia";
            }
            if (subScreen == "leanTools" || subScreen == "monthlyReport" || subScreen == "calendar"){

            }
            //draw(ctx2,closeBtn,0,0);
            //if(subScreen=="leanTools"||subScreen=="monthlyReport"&&subScreen=="calendar")
            //  draw(ctx2,)
                if (subScreen != "sawView" && subScreen != "office" && subScreen != "leanTools" && subScreen != "monthlyReport" && subScreen != "calendar") {
                    ctx2.font = "80px Georgia";
                    ctx2.fillText(subScreen, 900, 500);
                    ctx2.font = "10px Georgia";
                }


        }


        //ctx.fillText("x: "+posx,100,400);
        //ctx.fillText("y: "+posy,100,415);

    }

    var draw = function (canvas, object, xDis, yDis) {
        if (object.ready && !object.hover)
            canvas.drawImage(object.image, object.x, object.y, object.w, object.h);
        if (object.readyAlt && object.hover)
            canvas.drawImage(object.imageAlt, object.x + xDis, object.y + yDis, object.w, object.h);
    }

    var tracker = function (e) {
        var pos = getMousePos(canvas, e);
        posx = pos.x;
        posy = pos.y;
    }


    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    canvas.addEventListener('click', onClick, false);

function createConsoleTable(){

    console.log("Machine    Needed Min");
    console.log("SAW            "+mitreSaw_NeededMin());
    console.log("Drill          "+drillPress_NeededMin());
    console.log("Bender         "+tubeBender_NeededMin());
    console.log("Welding        "+welding_NeededMin());
    console.log("Grinder        "+grinder_NeededMin());
    console.log("paint          "+paintBooth_NeededMin());
    console.log("fabric         "+fabricCut_NeededMin());
    console.log("Sewing         "+sewing_NeededMin());
    console.log("Assembly       "+assembly_NeededMin());

    console.log("Machine    down");
    console.log("SAW            "+mitreSaw_DaysDownQuality());
    console.log("Drill          "+drillPress_DaysDownQuality());
    console.log("Bender         "+tubeBender_DaysDownQuality());
    console.log("Welding        "+welding_DaysDownQuality());
    console.log("Grinder        "+grinder_DaysDownQuality());
    console.log("paint          "+paintBooth_DaysDownQuality());
    console.log("fabric         "+fabricCut_DaysDownQuality());
    console.log("Sewing         "+sewing_DaysDownQuality());
    console.log("Assembly       "+assembly_DaysDownQuality());

    console.log("Machine    starved days");
    console.log("SAW            "+mitreSaw_DaysStarved());
    console.log("Drill          "+drillPress_DaysStarved());
    console.log("Bender         "+tubeBender_DaysStarved());
    console.log("Welding        "+welding_DaysStarved());
    console.log("Grinder        "+grinder_DaysStarved());
    console.log("paint          "+paintBooth_DaysStarved());
    console.log("fabric         "+fabricCut_DaysStarved());
    console.log("Sewing         "+sewing_DaysStarved());
    console.log("Assembly       "+assembly_DaysStarved());

    console.log("Machine    Available Min");
    console.log("SAW            "+mitreSaw_AvailableMin());
    console.log("Drill          "+drillPress_AvailableMin());
    console.log("Bender         "+tubeBender_AvailableMin());
    console.log("Welding        "+welding_AvailableMin());
    console.log("Grinder        "+grinder_AvailableMin());
    console.log("paint          "+paintBooth_AvailableMin());
    console.log("fabric         "+fabricCut_AvailableMin());
    console.log("Sewing         "+sewing_AvailableMin());
    console.log("Assembly       "+assembly_AvailableMin());

    console.log("Machine    needed machines");
    console.log("SAW            "+mitreSaw_NeededMachines());
    console.log("Drill          "+drillPress_NeededMachines());
    console.log("Bender         "+tubeBender_NeededMachines());
    console.log("Welding        "+welding_NeededMachines());
    console.log("Grinder        "+grinder_NeededMachines());
    console.log("paint          "+paintBooth_NeededMachines());
    console.log("fabric         "+fabricCut_NeededMachines());
    console.log("Sewing         "+sewing_NeededMachines());
    console.log("Assembly       "+assembly_NeededMachines());

    console.log("Machine    no cell workers");
    console.log("SAW            "+mitreSaw_NoCellsWorkers());
    console.log("Drill          "+drillPress_NoCellsWorkers());
    console.log("Bender         "+tubeBender_NoCellsWorkers());
    console.log("Welding        "+welding_NoCellsWorkers());
    console.log("Grinder        "+grinder_NoCellsWorkers());
    console.log("paint          "+paintBooth_NoCellsWorkers());
    console.log("fabric         "+fabricCut_NoCellsWorkers());
    console.log("Sewing         "+sewing_NoCellsWorkers());
    console.log("Assembly       "+assembly_NoCellsWorkers());

    console.log("Machine    cell trained workers");
    console.log("SAW            "+mitreSaw_TrainWorkers());
    console.log("Drill          ");
    console.log("Bender         ");
    console.log("Welding        "+welding_TrainWorkers());
    console.log("Grinder        ");
    console.log("paint          ");
    console.log("fabric         "+fabricCut_TrainWorkers());
    console.log("Sewing         ");
    console.log("Assembly       "+assembly_TrainWorkers());

    console.log("Machine    overtime workers");
    console.log("SAW            "+mitreSaw_WorkersOver());
    console.log("Drill          "+drillPress_WorkersOver());
    console.log("Bender         "+tubeBender_WorkersOver());
    console.log("Welding        "+welding_WorkersOver());
    console.log("Grinder        "+grinder_WorkersOver());
    console.log("paint          "+paintBooth_WorkersOver());
    console.log("fabric         "+fabricCut_WorkersOver());
    console.log("Sewing         "+sewing_WorkersOver());
    console.log("Assembly       "+assembly_WorkersOver());

    console.log("Machine    Max chair  capacity");
    console.log("SAW            "+mitreSaw_MaxCapacity());
    console.log("Drill          "+drillPress_MaxCapacity());
    console.log("Bender         "+tubeBender_MaxCapacity());
    console.log("Welding        "+welding_MaxCapacity());
    console.log("Grinder        "+grinder_MaxCapacity());
    console.log("paint          "+paintBooth_MaxCapacity());
    console.log("fabric         "+fabricCut_MaxCapacity());
    console.log("Sewing         "+sewing_MaxCapacity());
    console.log("Assembly       "+assembly_MaxCapacity());

    console.log("Machine    previous inventory");
    console.log("SAW            "+mitreSaw_PrevInventory());
    console.log("Drill          "+drillPress_PrevInventory());
    console.log("Bender         "+tubeBender_PrevInventory());
    console.log("Welding        "+welding_PrevInventory());
    console.log("Grinder        "+grinder_PrevInventory());
    console.log("paint          "+paintBooth_PrevInventory());
    console.log("fabric         "+fabricCut_PrevInventory());
    console.log("Sewing         "+sewing_PrevInventory());
    console.log("Assembly       "+assembly_PrevInventory());

    console.log("Machine    max out inventory");
    console.log("SAW            "+mitreSaw_MaxOutInventory());
    console.log("Drill          "+drillPress_MaxOutInventory());
    console.log("Bender         "+tubeBender_MaxOutInventory());
    console.log("Welding        "+welding_MaxOutInventory());
    console.log("Grinder        "+grinder_MaxOutInventory());
    console.log("paint          "+paintBooth_MaxOutInventory());
    console.log("fabric         "+fabricCut_MaxOutInventory());
    console.log("Sewing         "+sewing_MaxOutInventory());
    console.log("Assembly       "+assembly_MaxOutInventory());

    console.log("Machine    actual production");
    console.log("SAW            "+mitreSaw_ActualProd());
    console.log("Drill          "+drillPress_ActualProd());
    console.log("Bender         "+tubeBender_ActualProd());
    console.log("Welding        "+welding_ActualProd());
    console.log("Grinder        "+grinder_ActualProd());
    console.log("paint          "+paintBooth_ActualProd());
    console.log("fabric         "+fabricCut_ActualProd());
    console.log("Sewing         "+sewing_ActualProd());
    console.log("Assembly       "+assembly_ActualProd());

    console.log("Machine    final inventory");
    console.log("SAW            "+mitreSaw_FinalInventory());
    console.log("Drill          "+drillPress_FinalInventory());
    console.log("Bender         "+tubeBender_FinalInventory());
    console.log("Welding        "+welding_FinalInventory());
    console.log("Grinder        "+grinder_FinalInventory());
    console.log("paint          "+paintBooth_FinalInventory());
    console.log("fabric         "+fabricCut_FinalInventory());
    console.log("Sewing         "+sewing_FinalInventory());
    console.log("Assembly       "+assembly_FinalInventory());

    console.log("Machine    days late out");
    console.log("SAW            "+mitreSaw_DaysLateOut());
    console.log("Drill          "+drillPress_DaysLateOut());
    console.log("Bender         "+tubeBender_DaysLateOut());
    console.log("Welding        "+welding_DaysLateOut());
    console.log("Grinder        "+grinder_DaysLateOut());
    console.log("paint          "+paintBooth_DaysLateOut());
    console.log("fabric         "+fabricCut_DaysLateOut());
    console.log("Sewing         "+sewing_DaysLateOut());
    console.log("Assembly        Don't worry about it");


    console.log("Part          Value");
    console.log("19x1           "+nineteenbyoneTube_Value());
    console.log("              $"+nineteenbyoneTube_ChairPrice());
    console.log("              #"+nineteenbyoneTube_ChairQuantity());
    console.log("prev: "+nineteenbyoneTube_PrevChairQuantity()+" + chars in order: "+nineteenbyoneTube_ChairOrderQuantity()+" * # orders: "+nineteenbyoneTube_NumOrders()+" - saw prod: "+mitreSaw_ActualProd());



    console.log("25x1           "+twentyfivebyoneTube_Value());
    console.log("              $"+twentyfivebyoneTube_ChairPrice());
    console.log("              #"+twentyfivebyoneTube_ChairQuantity());
    console.log("prev: "+twentyfivebyoneTube_PrevChairQuantity()+" + chars in order: "+twentyfivebyoneTube_ChairOrderQuantity()+" * # orders: "+twentyfivebyoneTube_NumOrders()+" - saw prod: "+mitreSaw_ActualProd());

    console.log("35x2           "+thirtyfivebytwoTube_Value());
    console.log("              $"+thirtyfivebytwoTube_ChairPrice());
    console.log("              #"+thirtyfivebytwoTube_ChairQuantity());
    console.log("prev: "+thirtyfivebytwoTube_PrevChairQuantity()+" + chars in order: "+thirtyfivebytwoTube_ChairOrderQuantity()+" * # orders: "+thirtyfivebytwoTube_NumOrders()+" - saw prod: "+mitreSaw_ActualProd());

    console.log("Nylon          "+nylonFabric_Value());
    console.log("# "+nylonFabric_NumOrders());
    console.log("Caster         "+casterWheel_Value());
    console.log("# "+casterWheel_NumOrders());
    console.log("Rear wheel     "+rearBikeWheel_Value());
    console.log("# "+rearBikeWheel_NumOrders());
    console.log("Handle         "+handle_Value());
    console.log("# "+handle_NumOrders());
    console.log("Fender         "+fender_Value());
    console.log("# "+fender_NumOrders());
    console.log("Footrest       "+footrestPlate_Value());
    console.log("# "+footrestPlate_NumOrders());
    console.log("Brake Lever    "+brakeLever_Value());
    console.log("# "+brakeLever_NumOrders());
    console.log("tube Saw       "+tubeSaw_Value());
    console.log("tube drill     "+tubeDrill_Value());
    console.log("tube bend      "+tubeBender_Value());
    console.log("weld weld      "+weldWelder_Value());
    console.log("weld grind     "+weldGrinder_Value());
    console.log("weld paint     "+weldPaint_Value());
    console.log("Fabric fabric  "+fabricFabCut_Value());
    console.log("Fabric sew     "+fabricSewing_Value());
    console.log("final          "+finalAssembly_Value());
}

createConsoleTable();
    function onClick(evt) {
        if (subScreen == "calendar") {
            if (nextMonthBtn.hover) {//click of next month button will change month, update month stats, and show the new report
                var sawTemp=mitreSaw_FinalInventory();
                var drillTemp=drillPress_FinalInventory();
                var bendTemp=tubeBender_FinalInventory();
                var weldTemp=welding_FinalInventory();
                var grindTemp=grinder_FinalInventory();
                var paintTemp=paintBooth_FinalInventory();
                var fabricTemp=fabricCut_FinalInventory();
                var sewingTemp=sewing_FinalInventory();
                var assemblyTemp=assembly_FinalInventory()-monthChairsSold();

                //Inventory temp
                var tempNineteenbyoneTube=nineteenbyoneTube_ChairQuantity();
                var tempTwentyfivebyoneTube= twentyfivebyoneTube_ChairQuantity();
                var tempThirtyfivebytwoTube= thirtyfivebytwoTube_ChairQuantity();
                var tempNylonFabric_PrevChair= nylonFabric_ChairQuantity();
                var tempCasterWheel_PrevChair= casterWheel_ChairQuantity();
                var tempRearBikeWheel_PrevChair= rearBikeWheel_ChairQuantity();
                var tempHandle_prevChair= handle_ChairQuantity();
                var tempFender_PrevChair= fender_ChairQuantity();
                var tempFootrestPlate_PrevChair= footrestPlate_ChairQuantity();
                var tempBrakeLever_PrevChair= brakeLever_ChairQuantity();

                //inventory update
                nineteenbyoneTube_PrevChair=tempNineteenbyoneTube;
                twentyfivebyoneTube_PrevChair=tempTwentyfivebyoneTube;
                thirtyfivebytwoTube_PrevChair=tempThirtyfivebytwoTube;
                nylonFabric_PrevChair=tempNylonFabric_PrevChair;
                casterWheel_PrevChair=tempCasterWheel_PrevChair;
                rearBikeWheel_PrevChair=tempRearBikeWheel_PrevChair;
                handle_PrevChair=tempHandle_prevChair;
                fender_PrevChair= tempFender_PrevChair;
                footrestPlate_PrevChair= tempFootrestPlate_PrevChair;
                brakeLever_PrevChair= tempBrakeLever_PrevChair;


                //prev inventory update
                prevInventory_Saw=sawTemp;
                prevInventory_Drill=drillTemp;
                prevInventory_Bender=bendTemp;
                prevInventory_Weld=weldTemp;
                prevInventory_Grind=grindTemp;
                prevInventory_Paint=paintTemp;
                prevInventory_Fabric=fabricTemp;
                prevInventory_Sewing=sewingTemp;
                prevInventory_Assembly=assemblyTemp;


                console.log("paint previous"+prevInventory_Paint);
                console.log("paint previous 2nd month"+prevInventory_Paint);
                monthCounter++;
                problemListUpdate();


                if (monthCounter == 12) {
                    monthCounter = 0;
                }
                updateMonth(monthData[monthCounter]);
                createConsoleTable();
                leanToolAllowance = 1000;
                draw(ctx, office, 0, 0);
                subScreen = "monthlyReport";
            }
            if (closeBtn.hover) {
                subScreen = "office";
            }
        }
        else if (currentScreen == "credits") {
            currentScreen = "mainMenu";
            subScreen = "null"
        }
        else if (currentScreen == "mainMenu") {
            if (creditBtn.hover)
                currentScreen = "credits";
            else if (startBtn.hover) {
                currentScreen = "factory";
                subScreen = "office";
            }
        }
        else if (currentScreen == "factory") {
            for (var i = 0; i < 9; i++) {
                if (station[i].hover) {
                    subScreen = station[i].subScreen;
                }
            }
            if (desk.hover) {
                currentScreen = "factory";
                subScreen = "office";
            }
            else if (subScreen == "leanTools") {
                if (leanToolsBtnCells.hover && leanToolAllowance == 1000) {//This must be modified to keep cost under 1000
                    leanToolAllowance = 0;
                    leanTool_Cells = true;
                }
                if (leanToolsBtnSmedSaw.hover && leanToolAllowance >= 300 && leanTool_Smed_Saw == false) {//This must be modified to keep cost under 1000
                    leanToolAllowance -= 300;
                    leanTool_Smed_Saw = true;
                }
            }
            else if (subScreen == "office") {
                if (leanToolsBtn.hover) {
                    subScreen = "leanTools";
                }
                if (calendarBtn.hover) {
                    subScreen = "calendar";
                }
                if (reportBtn.hover) {
                    subScreen = "monthlyReport";
                }
            }
            if (subScreen == "leanTools" || subScreen == "monthlyReport" || subScreen == "calendar") {
                if (closeBtn.hover) {
                    subScreen = "office";
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

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
            ctx.drawImage(spriteSheetImg, spriteX*4, spriteY*4, 300, 300,300,600, 110, 110);

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

        console.log("TEST1234");
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

//problem list function
    var problem = function (name, state) {
        this.y;
        this.name = name;
        this.state = state;
        this.daysDown;
    };

// problem list array


    var problemList = [new problem("Saw down due to late tubes", false),
        new problem("Saw down due to machine breakdown", false),
        new problem("Drill press down due to late parts from Saw", false),//drill
        new problem("Drill press down due to machine breakdown", false),
        new problem("Drill press down due to quality problem", false),
        new problem("Tube Bender down due to late parts from drill", false),//bender
        new problem("Tube Bender down due to machine breakdown", false),
        new problem("Tube Bender down due to quality problem", false),
        new problem("Tube Bender down due to bad parts from Drill press", false),
        new problem("Welding down due to late parts from Drill press", false),//welder
        new problem("Welding down due to machine breakdown", false),
        new problem("Welding down due to quality problem", false),
        new problem("Grinder down due to late parts from Welding", false),//grinder
        new problem("Grinder down due to bad parts from Welding", false),
        new problem("Paint booth down due to late parts from Grinder", false),//paint
        new problem("Paint booth down due to machine breakdown", false),
        new problem("Paint booth down due to bad parts from Welding", false),
        new problem("Fabric cutter down due to late nylon", false),//cutter
        new problem("Sewing down due to late parts from Fabric cutter", false),//sewing
        new problem("Sewing down due to machine breakdown", false),
        new problem("Sewing down due to quality problem", false),
        new problem("Assembly down due to late parts from Sewing", false),//assembly
        new problem("Assembly down due to late parts from Paint booth", false),
        new problem("Assembly down due to quality problem", false)];


    var menu = new gameObject(0, 0, 750, 750, 'Art_Assets/main_menu/bkg_start2.png', 0);
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

    var sawView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Saw_Right_Table.png", 0);
    loadImg(sawView);

    var drillView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Drill_Right_Table.png", 0);
    loadImg(drillView);

    var bendView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Bend_Right_Table.png", 0);
    loadImg(bendView);

    var weldView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Weld_Right_Table.png", 0);
    loadImg(weldView);

    var grindView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Saw_Right_Table.png", 0);
    loadImg(grindView);

    var paintView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Paint_Right_Table.png", 0);
    loadImg(paintView);

    var fabricView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Saw_Right_Table.png", 0);
    loadImg(fabricView);

    var sewingView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Sewing_Right_Table.png", 0);
    loadImg(sewingView);

    var assemblyView = new gameObject(800, 250, 480, 700, "Art_Assets/game_screen/Saw_Right_Table.png", 0);
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
        month.workers = monthWorkers(monthCounter);
        month.workerOvertime = total_WorkersOver(monthCounter);// from capacity
        month.purchasedMaterials = total_MaterialCost;//from capacity
        month.scrap = monthScrap(monthCounter);

        month.inventory = total_Value;//from inventory
        month.orderingCost = total_OrderCost;//from inventory
        month.baselineCost = monthBaseline(monthCounter);


        month.sales = Math.round(month.chairsSold * chairPrice);
        month.laborRegular = Math.round(month.workers * workerHours * laborRate);
        month.laborOvertime = Math.round(month.workerOvertime * workerHoursOvertime * laborRateOvertime);
        month.totalMaterialsCost = Math.round(month.scrap + month.purchasedMaterials);
        month.inventoryCost = Math.round(month.inventory * inventoryPercentFee);
        month.directCost = Math.round(month.laborRegular + month.laborOvertime + month.totalMaterialsCost);
        month.overheadCost = Math.round(month.baselineCost + (month.inventory * baselineInventoryPercentFee));
        month.indirectCost = Math.round(month.inventoryCost + month.orderingCost + month.leanIdeasCost + month.overheadCost);
        month.totalExpenses = Math.round(month.directCost + month.indirectCost);
        month.totalProfit = Math.round(month.sales - month.totalExpenses);
        month.leanIdeasCost = 1000 - leanToolAllowance;


    }

    function monthScrap(month) {

        //Scrap = 100 * (drillPress_BadQuality_One + tubeBender_BadQuality_One + welding_BadQuality_One + sewing_BadQuality_One + assemblyBench_BadQuality_One)
        return (100 * (drillPress_BadQuality(month) + tubeBender_BadQuality(month) + welding_BadQuality(month) + sewing_BadQuality(month) + assemblyBench_BadQuality(month)));
    }
    function monthChairsSold(month){
        return Math.min(assembly_FinalInventory(month), chairs);
    }
    function monthWorkers(month){
        if(leanTool_Cells)
            return total_TrainWorkers(month);//from capacity
        else
            return total_NoCellWorkers(month);//from capacity
    }
    function monthBaseline(month){
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
        if(leanTool_PM_Saw)
            return 3;
        else
            return 0;
    }
    else if(month==4||month==6){
        if(leanTool_PM_Saw)
            return 2;
        else
            return 0;
    }
    else if(month==10){
        if(leanTool_PM_Saw)
            return 3;
        else
            return 1;
    }
    else
        return 0;
}

// drill late WIP
function drillPress_LateWIP(month){
    return mitreSaw_DaysLateOut;
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
            return 0;
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
        if(leanTool_SmallLot_Drill)
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

function tubeBender_LateWIP(month){
    return drillPress_DaysLateOut;
}

function tubeBender_Downtime(month){
    if (month==1) {
        if (!leanTool_PM_Bender) {
            return 2;
        }
    }
    else if (month==7) {
        if (!leanTool_PM_Bender) {
            return 1;
        }
    }
    else if (month==10) {
        if (!leanTool_PM_Bender) {
            return 1;
        }
    }
    else{
        return 0;
    }
}

function tubeBender_BadQuality(month){
    if (month==0) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.25;
            }
            else{
                return 0.5
            }
        }
    }
    else if(month==1){
        if (leanTool_SmallLot_Metal) {
            return 0.25;
        }
        else{
            return 0.5;
        }
    }
    else if (month==2) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.25;
            }
            else{
                return 0.5;
            }
        }
    }
    else if (month==3) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.25;
            }
            else{
                return 0.5;
            }
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
    }
    else if (month==7) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.25;
            }
            else{
                return 0.5;
            }
        }
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
    else if (month==9) {
        if (!leanTool_Quality_Bender) {
            if (leanTool_SmallLot_Metal) {
                return 0.25;
            }
            else{
                return 0.5;
            }
        }
    }
    else if (month==10) {
        if (!leanTool_Quality_Bender) {
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
    }
    else if (month==1) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
    }
    else if (month==3) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
    }
    else if (month==5) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
    }
    else if (month==6) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
    }
    else if (month==7) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
    }
    else if (month==8) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
    }
    else if (month==10) {
        if (leanTool_Kaban_Metal || !leanTool_Quality_Drill) {
            return drillPress_BadQuality(month)
        }
    }
    else{
        return 0;
    }
}

function welding_LateWIP(month){
    return tubeBender_DaysLateOut;
}

function welding_Downtime(month){
    if (month==0) {
        if (!leanTool_PM_Welding) {
            return 2;
        }
    }
    else if (month==1) {
        if (!leanTool_PM_Welding) {
            return 3;
        }
        else{
            return 1;
        }
    }
    else if (month==2) {
        if (!leanTool_PM_Welding) {
            return 2;
        }
    }
    else if (month==3) {
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
        if (!leanTool_Quality_Welding) {
            if (leanTool_SmallLot_Weld) {
                return 1.5;
            }
            else{
                return 3;
            }
        }
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
                return 1;
            }
            else{
                return 2;
            }
        }
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
    }
}

function grinder_LateWIP(month){
    return welding_DaysLateOut;
}

function grinder_DelayQuality(month){
    if (leanTool_Kaban_Weld || !leanTool_Quality_Welding){
        return welding_BadQuality(month);
    }
}

function paintBooth_LateWIP(month){
    return grinder_DaysLateOut;
}

function paintBooth_Downtime(month){
    if (month==3) {
        return 1;
    }
    else if (month==8) {
        if (!leanTool_PM_Paint) {
            return 2;
        }
    }
    else if (month==11) {
        if (!leanTool_PM_Paint) {
            return 1;
        }
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
    }
    else{
        return 0;
    }
}

function sewing_LateWIP(month){
    return fabricCut_DaysLateOut;
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
    }
    else if (month==8) {
        if (!leanTool_PM_Sewing) {
            return 1;
        }
    }
    else if (month==10) {
        if (!leanTool_PM_Sewing) {
            return 3;
        }
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
    }
    else if (month==6) {
        if (!leanTool_Vendor_Bike) {
            return 2;
        }
    }
    else if (month==10) {
        if (!leanTool_Vendor_Metal && leanTool_SmallPurchase_Metal) {
            return 2
        }
    }
    else if (month==11) {
        if (leanTool_SmallPurchase_Bike) {
            return 2;
        }
    }
    else{
        return 0;
    }
}

function assemblyBench_LateWIP(month){
    return paintBooth_DaysLateOut + sewing_DaysLateOut;
}

function assemblyBench_BadQuality(month){
    if (month==4) {
        if (!leanTool_Quality_Assembly) {
            return 0.5;
        }
    }
    else{
        return 0;
    }
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

    function onClick(evt) {
        if (subScreen == "calendar") {
            if (nextMonthBtn.hover) {//click of next month button will change month, update month stats, and show the new report
                monthCounter++;
                if (monthCounter == 12) {
                    monthCounter = 0;
                }
                updateMonth(monthData[monthCounter]);
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
                    leanToolCells = true;
                }
                if (leanToolsBtnSmedSaw.hover && leanToolAllowance >= 300 && leanToolSmedSaw == false) {//This must be modified to keep cost under 1000
                    leanToolAllowance -= 300;
                    leanToolSmedSaw = true;
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

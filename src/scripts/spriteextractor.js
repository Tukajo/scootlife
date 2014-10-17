
var

    s_buttons,
    s_splash,

    //s_bird,
    s_bg
    //s_fg,
    //s_pipeNorth,
    //s_pipeSouth,
    //s_text


function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x*2;
    this.y = y*2;
    this.width = width*2;
    this.height = height*2;
};
Sprite.prototype.draw = function(ctx, x, y) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
        x, y, this.width, this.height);
};

function initSprites(img) {

  /*  s_bird = [
        new Sprite(img, 358, 115, 30, 30),
        new Sprite(img, 358, 145, 32, 19),
        new Sprite(img, 358, 165, 31, 15)
        //new Sprite(img, 361, 181, 27, 25)
    ];*/
        s_runBtn =[
            new Sprite(img,89,1725,593,193),
            new Sprite(img,761,1725,593,193)
        ];
    s_bg = new Sprite(img, 1461, 929, 1361, 1365);
    s_bg.color = "#70C5CF";



/*    s_text = {
        GameTitle: new Sprite(img, 192, 114, 108, 23),
        GameOver:   new Sprite(img, 199, 138, 99, 14),
        GetReady:   new Sprite(img, 198, 156, 88, 18)
    }*/
    s_buttons = {
        RunFactory:  new Sprite(img,  89, 1725, 593, 193),
        Credits:  new Sprite(img, 119, 177, 40, 14),
        Paper: new Sprite(img, 159, 177, 40, 14),
        Calendar: new Sprite(img,  296, 327, 40, 15),
        Desk:    new Sprite(img, 257, 191, 40, 14),
        SawStation: new Sprite(img, 159, 191, 40, 14)
    }

    s_splash = new Sprite(img, 135, 142,  63.50, 26);


/*
    s_numberS.draw = s_numberB.draw = function(ctx, x, y, num, center, offset) {
        num = num.toString();

        var step = this.width + 2;

        if(center){
            x = center - (num.length*step-2)/2;

        }
        if(offset){
            x += step*(offset - num.length);
        }


        for (var i = 0, len = num.length; i < len; i++) {
            var n = parseInt(num[i]);
            ctx.drawImage(img, step*n, this.y, this.width, this.height,
                x, y, this.width, this.height)
            x += step;
        }
    }*/
}
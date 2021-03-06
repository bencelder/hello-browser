function initialize(){
    //alert("JavaScript Initialized");

    // Get the canvas
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");

    // draw a box
    drawBlock(0, 0, 0);
    drawBlock(9, 0, 0);
    drawBlock(0, 19,0);
    drawBlock(9, 19,0);
}

// x = [0, 9]
// y = [0, 19]
// c = [0, 360] color hue

function drawBlock(x, y, c){
    // convert to pixel coords
    pixelX = x*20;
    pixelY = (19-y)*20;

    // set the fill color
    //ctx.fillStyle="#FF0000";
    ctx.fillStyle = "hsl(" + c + ",100%,50%)";

    // draw the rectangle
    ctx.fillRect(pixelX+2, pixelY+2, 16, 16);

    // *** top of the block *** //

    // set the hue a little lighter
    ctx.fillStyle = "hsl(" + c + ",100%,70%)";

    // draw the top polygon
    ctx.beginPath();
    ctx.moveTo(pixelX,    pixelY);
    ctx.lineTo(pixelX+20, pixelY);
    ctx.lineTo(pixelX+18, pixelY+2);
    ctx.lineTo(pixelX+2,  pixelY+2);
    ctx.fill();

    // *** left, right of the block *** //
    ctx.fillStyle = "hsl(" + c + ",100%,40%)";

    ctx.beginPath();
    ctx.moveTo(pixelX, pixelY);
    ctx.lineTo(pixelX, pixelY+20);
    ctx.lineTo(pixelX+2, pixelY+18);
    ctx.lineTo(pixelX+2, pixelY+2);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(pixelX+20, pixelY);
    ctx.lineTo(pixelX+20, pixelY+20);
    ctx.lineTo(pixelX+18, pixelY+18);
    ctx.lineTo(pixelX+18, pixelY+2);
    ctx.fill();

    // *** bottom of the block *** //
    ctx.fillStyle = "hsl(" + c + ",100%,30%)";

    ctx.beginPath();
    ctx.moveTo(pixelX, pixelY+20);
    ctx.lineTo(pixelX+2, pixelY+18);
    ctx.lineTo(pixelX+18, pixelY+18);
    ctx.lineTo(pixelX+20, pixelY+20);
    ctx.fill();
}
function keyDown(e){
    alert("HI! Keycode: " + e.keyCode);
}

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

const keys = [];

const player = {
    x: 0,
    y: 0,
    width: 40,
    height: 72,
    framex: 0,
    framey: 0,
    speed: 9,
    moving: false
};

const playerSprite = new Image ();
playerSprite.src = "white square.jpg";
const background = new Image();
background.src = "background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    _ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

let position = 0;
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background, position, 0, canvas.width, canvas,
        height);
        drawSprite(playerSprite, player.width, player.frameX, 
        player.height * player.frameY, player.width, player.
        height, player.x, player.y, player.width, player.height)
        ;
        position++;
        movePlayer();
        requestAnimationFrame(animate);
}
animate();

window.addEventListener("keydown", function(e){
    keys[e.keycode] = true;
    player.moving = true;
});
window.addEventListener("keyup", function(e){
    delete keys[e.keycode];
    player.moving = false;
});

function movePlayer(){
    if (keys[38] && player.y > 100){
        player.y -= player.speed;
        player.frameY = false
    }
    if (keys [37] && player.x > 0){
        player.x -= player.speed;
        player.frameY = 1;
    }
    if (keys [40] && player.y < canvas.height - player.height){
        player.y +- player.speed;
        player.frameY = 0;
    }
    if (keys[39] && player.x < canvas.width - player.width){
        player.x +- player.speed;
        player.frameY = 2;
    }
}
function handlePlayerFrame(){
    if (player.frameX < 3 && player.moving) player.framex++
    else player.framex - 0;
}
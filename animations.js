// fade out element with duration
function fadeOut(e, d) {
    return new Promise(r => {
        e.style.animation = "fadeout "+d+" ease forwards";

        e.addEventListener(
            "animationend",
            () => r(),
            { once: true }
        );
    });
}

// fade in element
function fadeIn(e, d) {
    return new Promise(r => {
        e.style.animation = "fadein "+d+" ease forwards";

        e.addEventListener(
            "animationend",
            () => r(),
            { once: true }
        );
    });
}

// fly in element from left with duration
function flyFromLeft(e, d) {
    return new Promise(r => {
        e.style.animation = "flyfromleft "+d+" ease-out forwards";

        e.addEventListener(
            "animationend",
            () => r(),
            { once: true }
        );
    });
}

// fly in element from right with duration
function flyFromRight(e, d) {
    return new Promise(r => {
        e.style.animation = "flyfromright "+d+" ease-out forwards";

        e.addEventListener(
            "animationend",
            () => r(),
            { once: true }
        );
    });
}

// jump out element with duration
function jumpOut(e, d) {
    return new Promise(r => {
        e.style.animation = "jumpout "+d+" ease forwards";

        e.addEventListener(
            "animationend",
            () => r(),
            { once: true }
        );
    });
}

// pulse element
function startBounce(e){
    let scale=120;
    function bounce(delay){
        setTimeout(()=>{
            if (scale==120){
                scale=100;
                bounce(1000);
            } else {
                scale=120;
                bounce(300);
            }
            e.style="transform:scale("+scale+"%);";
        },delay);
    }
    bounce(800);
}

function randomnum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//particle stuff
let canvas=document.createElement("canvas");
let ctx=canvas.getContext('2d');
let rad=1;
let a=50;
canvas.style="position:fixed;top:0px;left:0px;z-index:-3;";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

let particles=[];

for (let i=0;i<a;i++){
    particles.push({
        x: randomnum(0,window.innerWidth),
        y: randomnum(0,window.innerHeight),
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        c: (i<a/2)?"b":"r"
    });
}

function animationloop(){
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    for (let p of particles){
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, 2 * Math.PI);
        p.x+=p.vx;
        p.y+=p.vy;
        if (p.x<0) p.x=window.innerWidth;
        if (p.x>window.innerWidth) p.x=0;
        if (p.y<0) p.y=window.innerHeight;
        if (p.y>window.innerHeight) p.y=0;
    
        if (p.c=="r"){
            ctx.strokeStyle = "#ff4538";
            ctx.fillStyle = "#ff8178";
        } else {
            ctx.strokeStyle = '#007bff';
            ctx.fillStyle = '#abcfff';
        }

        ctx.stroke();
        ctx.fill();
    }
    
    requestAnimationFrame(animationloop);
}
//particle stuff
let canvas=document.createElement("canvas");
let ctx=canvas.getContext('2d');
let rad=1;
let a=70;
let maxd=100;

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

function getcolor(c,t=1){
    if (c=="r"){
        return "rgba(255, 69, 56,"+t+")"
    } else {
        return "rgba(0, 123, 255,"+t+")"
    }
}

function randomnum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
            ctx.strokeStyle = getcolor("r");
            ctx.fillStyle = "#ff8178";
        } else {
            ctx.strokeStyle = getcolor("b");
            ctx.fillStyle = '#abcfff';
        }

        ctx.stroke();
        ctx.fill();
    }

    for (let i=0;i<particles.length;i++){
        for (let j=0;j<particles.length;j++){
            let p1=particles[i];
            let p2=particles[j];

            //fucking pythagorean theorem
            let a=(p1.y-p2.y)**2;
            let b=(p1.x-p2.x)**2;
            let c=Math.sqrt(a+b);
            if (c<maxd){
                let t = 1-(c/maxd);
                let g = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                g.addColorStop(0, getcolor(p1.c, t));
                g.addColorStop(1, getcolor(p2.c, t));

                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = g;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }
    
    requestAnimationFrame(animationloop);
}
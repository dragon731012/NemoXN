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

function growFromTop(e, d) {
    return new Promise(r => {
        e.style.animation = "growfromtop "+d+" ease forwards";

        e.addEventListener(
            "animationend",
            () => r(),
            { once: true }
        );
    });
}

function growFromLeft(e, d) {
    return new Promise(r => {
        e.style.animation = "growfromleft "+d+" ease forwards";

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
async function show(e){
    return new Promise((r) => {
        let val = -5;
        const d = 7;
        const step = 1;
        const speed = 10;

        let interval = setInterval(() => {
            const maskValue = `linear-gradient(to right, 
                rgba(0,0,0,1) 0%, 
                rgba(0,0,0,1) ${val - d}%, 
                rgba(0,0,0,0) ${val}%, 
                rgba(0,0,0,0) 100%)`;

            e.style.webkitMaskImage = maskValue;
            e.style.maskImage = maskValue;

            val += step;

            if (val > 100 + d) {
                clearInterval(interval);
                e.style.webkitMaskImage = "none";
                e.style.maskImage = "none";
            }
            if (val > 78) {
                r(true);
            }
            e.style.opacity=1;
        }, speed);
    });
}

async function say(el, text){
    el.style.transition = "0s all";
    el.style.opacity = "1";

    el.innerHTML = "";

    const words = text.split(" ");
    const spans = words.map(word => {
        const s = document.createElement("span");
        s.textContent = word + " ";
        el.appendChild(s);
        return s;
    });

    const lines = [];
    let currentLine = [];
    let lastTop = null;

    spans.forEach(span => {
        const top = span.getBoundingClientRect().top;

        if (lastTop === null || Math.abs(top - lastTop) < 2) {
            currentLine.push(span);
        } else {
            lines.push(currentLine);
            currentLine = [span];
        }

        lastTop = top;
    });

    if (currentLine.length) lines.push(currentLine);

    el.innerHTML = "";
    const lineDivs = lines.map(line => {
        const div = document.createElement("div");
        div.style.webkitMaskImage = "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)";
        div.style.maskImage = "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)";
        
        line.forEach(span => div.appendChild(span));
        el.appendChild(div);
        return div;
    });

    for (let line of lineDivs) {
        await show(line);
    }
    return true;
}
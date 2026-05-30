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

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
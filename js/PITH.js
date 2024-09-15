let btnUp = document.querySelector(".btn-up");
btnUp.addEventListener("click", () => {
    window.scrollTo(0, 0, "smooth");
});
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector("div.articles").offsetTop) {
        btnUp.style.visibility = "visible";
        btnUp.style.opacity = "1";
    } else {
        btnUp.style.visibility = "hidden";
        btnUp.style.opacity = "0";
    }
});
let progressHTML = document.querySelector(
    ".skills .container .skill .html .progress-bar .progress"
);
let goalHTML = 80;
let progressCSS = document.querySelector(
    ".skills .container .skill .css .progress-bar .progress"
);
let goalCSS = 85;
let progressJS = document.querySelector(
    ".skills .container .skill .js .progress-bar .progress"
);
let goalJS = 70;
let progressPYTHON = document.querySelector(
    ".skills .container .skill .python .progress-bar .progress"
);
let goalPYTHON = 80;
let numberHTML = document.querySelector(
    ".skills .container .skill .html .info div:last-of-type"
);
let numberCSS = document.querySelector(
    ".skills .container .skill .css .info div:last-of-type"
);
let numberJS = document.querySelector(
    ".skills .container .skill .js .info div:last-of-type"
);
let numberPYTHON = document.querySelector(
    ".skills .container .skill .python .info div:last-of-type"
);
window.addEventListener("scroll", () => {
    if (window.scrollY >= document.querySelector("div.skills").offsetTop-300) {
        progressHTML.style.width = `${goalHTML}%`;
        progressCSS.style.width = `${goalCSS}%`;
        progressJS.style.width = `${goalJS}%`;
        progressPYTHON.style.width = `${goalPYTHON}%`;
    } else {
        progressHTML.style.width = `0%`;
        progressCSS.style.width = `0%`;
        progressJS.style.width = `0%`;
        progressPYTHON.style.width = `0%`;
    }
});
let timeDay = document.querySelector(
    ".event .container .content .time .day span:first-of-type"
);
let timeHour = document.querySelector(
    ".event .container .content .time .hour span:first-of-type"
);
let timeMinute = document.querySelector(
    ".event .container .content .time .minute span:first-of-type"
);
let timeSecond = document.querySelector(
    ".event .container .content .time .second span:first-of-type"
);
timeDay.textContent = 5;
timeHour.textContent = 0;
timeMinute.textContent = 0;
timeSecond.textContent = 2;
let timecountdown = setInterval(() => {
    if (timeSecond.textContent <= 0) {
        if (timeMinute.textContent <= 0) {
            if (timeHour.textContent <= 0) {
                if (timeDay.textContent <= 0) {
                    clearInterval(timecountdown);
                } else {
                    timeSecond.textContent = 59;
                    timeMinute.textContent = 59;
                    timeHour.textContent = 23;
                    timeDay.textContent--;
                }
            } else {
                timeSecond.textContent = 59;
                timeMinute.textContent = 59;
                timeHour.textContent--;
            }
        } else {
            timeSecond.textContent = 59;
            timeMinute.textContent--;
        }
    } else {
        timeSecond.textContent--;
    }
}, 1000);
let elements = document.querySelectorAll(".stats .container .box h2");
let started = false;
window.addEventListener("scroll",() => {
    if (window.scrollY >= document.querySelector("div.stats").offsetTop-300) {
        if (!started) {
            elements.forEach((ele) => {
                let goal = ele.getAttribute("goal");
                let countincrease = setInterval(() => {
                    ele.textContent++;
                    if (ele.textContent == goal) {
                        clearInterval(countincrease);
                    }
                }, 2000 / goal);
            });
        }
        started = true;
    }
});
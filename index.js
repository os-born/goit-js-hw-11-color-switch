
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    body: document.querySelector("body"), 
    startBtn: document.querySelector("button[data-action=start]"),
    stopBtn: document.querySelector("button[data-action=stop]"),
};

let timerId = 0;

let isActive = false;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomBodyColor = () => {
    refs.body.setAttribute("style", `background-color: ${colors[randomIntegerFromInterval(0,colors.length-1)]}`)
}

const onClickButtonStart = () => {
    if(isActive){
        return;
    }
    isActive = true;
    refs.startBtn.setAttribute("disabled","true");
    timerId = setInterval(setRandomBodyColor, 1000);
};

const onClickButtonStop = () => {
    
    refs.startBtn.removeAttribute("disabled");
    refs.body.removeAttribute("style");
    isActive = false;
    clearInterval(timerId)
};

refs.startBtn.addEventListener("click", onClickButtonStart);
refs.stopBtn.addEventListener("click", onClickButtonStop);

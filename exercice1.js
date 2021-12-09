// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let a = 0;
let timeout = null;

let countUp = function () {
    timeout = setTimeout(() => {
        seconds.innerText = a.toString();
        a++;
        countUp()
    }, 1000)
};
countUp()

// How can you make it stop counting?
let stopCountUp = function () {
    clearTimeout(timeout);
    stopButton.removeEventListener("click", stopCountUp);
};

let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);


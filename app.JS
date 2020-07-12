var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
    msec++
    msecHeading.innerHTML = msec;
    if (msec >= 100) {
        sec++
        secHeading.innerHTML = sec;
        msec = 0
    } else if (sec >= 60) {
        min++
        minHeading.innerHTML = min
        sec = 0
    }
}

function start() {
    interval = setInterval(timer, 10)
    document.getElementById('start1').disabled = true;
    document.getElementById('start1').style.visibility = "hidden";
}


function pause() {
    clearInterval(interval)
    document.getElementById('start1').disabled = false;
    document.getElementById('start1').style.visibility = "visible";
}


function reset() {
    min = 0
    sec = 0
    msec = 0
    msecHeading.innerHTML = msec
    secHeading.innerHTML = sec
    minHeading.innerHTML = min
    pause()
    document.getElementById('start1').disabled = false
    document.getElementById('start1').style.visibility = "visible";
}
var currentTimer = 0
var interval = 0
var lastUpdateTime = new Date().getTime()
var mins = document.querySelector('span.minutes')
var secs = document.querySelector('span.seconds')
var cents = document.querySelector('span.centiseconds')

function pad (n) {
    return ('00' + n).substr(-2);
}

function update () {
    var now = new Date().getTime(),
        dt = now - lastUpdateTime;

    currentTimer += dt;

    var time = new Date(currentTimer);

    mins.innerHTML = pad(time.getMinutes());
    secs.innerHTML = pad(time.getSeconds());
    cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

    lastUpdateTime = now;
}

function startTimer () {
    if (!interval) {
        lastUpdateTime = new Date().getTime();
        interval = setInterval(update, 1);
    }
}

function stopTimer () {
    clearInterval(interval);
    interval = 0;
}


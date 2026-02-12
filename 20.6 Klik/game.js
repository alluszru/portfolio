let pressCount = 0;
const roundTime = 5000;
let running = false;
let start = Date.now();
let intervalId;

document.addEventListener("keyup", function (event) {
    if (event.key === "k") {

        if (pressCount == 0) {
            startGame();
        }

        if (!isGameInProgress()) {
            return;
        }

        pressCount++;
        $("#k").text(pressCount);
    }

    if (event.key === "r") {
        restartGame();
    }
});

function calcDelta() {
    return roundTime - (Date.now() - start);
}
function timer() {
    let delta = calcDelta();
    console.log("timer");

    if (delta >= 0) {
        $(".timer").text(formatRemaingTime(delta));
    } else {
        $("h2").text("press R to restart");
        clearTimer();
    }
}

function startGame() {
    start = Date.now();
    intervalId = setInterval(timer, 10);
    $("h1").text("BE FAST!");
}

function restartGame() {
    clearTimer();
    $("#k").text("0");
    pressCount = 0;
    $("h1").text("Press K to start");
    $("h2").text("");
    showDeafultTime();
}

function isGameInProgress() {
    return calcDelta() > 0;
}

function formatRemaingTime(delta) {
 return (delta / 1000).toFixed(1);
}

function showDeafultTime() {
    $(".timer").text(formatRemaingTime(roundTime));
}
function clearTimer() {
    clearInterval(intervalId);
    intervalId = undefined;
}


showDeafultTime();
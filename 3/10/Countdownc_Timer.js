const startingMinutes =10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('Countdown_Timer');

setInterval(updateCountdown_Timer,1000);

function updateCountdown_Timer(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = '${minutes}: ${seconds}';
    time--;

}

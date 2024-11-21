function updateClock(){
    const currentMoment = new Date();
    const hours = currentMoment.getHours().toString().padStart(2, '0');
    const minutes = currentMoment.getMinutes().toString().padStart(2, '0');
    const seconds = currentMoment.getSeconds().toString().padStart(2, '0');

    document.getElementById('digital-watch').innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();
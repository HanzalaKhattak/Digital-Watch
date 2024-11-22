function updateClock(){
    const currentMoment = new Date();
    const hours = currentMoment.getHours().toString().padStart(2, '0');
    const minutes = currentMoment.getMinutes().toString().padStart(2, '0');
    const seconds = currentMoment.getSeconds().toString().padStart(2, '0');

    document.getElementById('digital-watch').innerHTML = `${hours}:${minutes}:${seconds}`;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[currentMoment.getDate()];

    days.forEach(day => {
        const dayElement = document.getElementById('day');
        if(day === currentDay){
            dayElement.classList.add('current');
        }else{
            dayElement.classList.remove('current');
        }
    });
}

setInterval(updateClock, 1000);
updateClock();
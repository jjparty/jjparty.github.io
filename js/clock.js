const h2Clock = document.querySelector("#clock");

function clock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    h2Clock.innerText = `${hours}:${minutes}:${seconds}`;
}

clock();
setInterval(clock, 1000);
function updatingClock(){

    const present = new Date();

    let hour = present.getHours();
    let mins = present.getMinutes().toString().padStart(2,0);
    let secs = present.getSeconds().toString().padStart(2,0);
    let meridien = hour>=12 ? "PM":"AM";
    hour = hour % 12 || 12;
    hour = present.getHours().toString().padStart(2,0);
    let PresentTime = `${hour}:${mins}:${secs} ${meridien}`;

    document.getElementById("clock").textContent = PresentTime;
}
updatingClock();
setInterval(updatingClock,1000);
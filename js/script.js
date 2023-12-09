function showTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    document.getElementById("hour").
    innerHTML = hours;
    document.getElementById("minutes").
    innerHTML = minutes;
    document.getElementById("seconds").
    innerHTML = seconds;
}
setInterval(showTime,10);

function clock() {
    var today = new Date();
    var day = today.toString().split(' ')[0];;
    var month = today.toLocaleString('default', { month: 'long' });
    var date = today.getDate();
    var hourNow = today.getHours();
    var minNow = today.getMinutes();
    var amPm;
    if (hourNow > 12) {
        amPm = "PM"
    } else {
        amPm = "AM"
    }
    var greeting;
    var style;
    const slogan = document.getElementById('greeting');
    const time = document.getElementById('time');
    const whole = document.getElementById('day');

    time.innerHTML = `${hourNow} : ${minNow} ${amPm}`;
    whole.innerHTML = `${day} , ${month} ${date}`


    if (hourNow >= 22) {
        slogan.innerHTML = 'Good Night , ';
        const back = document.getElementById('background').style.backgroundImage = "url('/img/night.jpg')";
    } else if (hourNow >= 18) {
        slogan.innerHTML = 'Good Evening ,';
        const back = document.getElementById('background').style.backgroundImage = "url('/img/evening.jpeg')";
    } else if (hourNow >= 12) {
        slogan.innerHTML = 'Good Afternoon ,';
        const back = document.getElementById('background').style.backgroundImage = "url('/img/afternoon.jpg')";
    } else if (hourNow > 4) {
        slogan.innerHTML = 'Good Morning , ';
        const back = document.getElementById('background').style.backgroundImage = "url('/img/morning.jpg')";
    } else {
        slogan.innerHTML = 'Hello.';
        const back = document.getElementById('background').style.backgroundImage = "url('/img/evening.jpeg')";
    }
}
setInterval(clock, 1000);
clock();

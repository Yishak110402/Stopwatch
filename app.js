let startBtn = document.getElementsByTagName("button");
let resetBtn = document.getElementById("reset");
let startstopBtn = startBtn[0];

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

function stopWatch(){     
     seconds++
     if(seconds/60 === 1){
        minutes++;
        seconds = 0;
        if(minutes/60 === 1){
            hours++;
            minutes = 0;
        }
     }
     if(seconds < 10){
        leadingSeconds = "0" +seconds.toString();
     } else{
        leadingSeconds = seconds;
     }
     if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
     }else{
        leadingMinutes = minutes;
     }
     if (hours < 10){
        leadingHours = "0" + hours.toString();
     } else{
        leadingHours = hours;
     }
     let timer = document.getElementById("timer");

     timer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
      
}

let timeInterval = null;
let timerStatus = "stopped";
    startstopBtn.addEventListener("click", function(){
        if(timerStatus == "stopped"){
            timeInterval = window.setInterval(stopWatch, 1000);
            startstopBtn.textContent = "Pause";
            startstopBtn.setAttribute('id', 'pause');
            timerStatus = "started";
        }else{
            window.clearInterval(timeInterval);
            startstopBtn.textContent = "Play";
            startstopBtn.setAttribute('id', 'play');
            timerStatus = "stopped";
        }
    })

        
    resetBtn.addEventListener("click", function(){
        seconds = 0;
        minutes = 0;
        hours = 0;
        window.clearInterval(timeInterval);
        startstopBtn.textContent = "Play";
        startstopBtn.setAttribute('id', 'play');
        timerStatus = "stopped";
        timer.textContent = "00:00:00";
        
    })
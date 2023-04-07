var vid = document.getElementById("video");

function play(){
    vid.play();
}

function pause(){
    vid.pause();
}

function stop(){
    vid.pause();
    if(vid.currentTime) vid.currentTime = 0;
}

function volI(){
    if(vid.volume < 1) vid.volume = parseFloat(vid.volume + 0.1).toFixed(1);
}

function volD(){
    if(vid.volume > 0) vid.volume = parseFloat(vid.volume - 0.1).toFixed(1);
}

var vonglap = document.getElementById("loopbtn");
var check = true;

vonglap.addEventListener("click", () => {
    check = !check;
    if(check){
        vid.loop = true;
        vonglap.innerHTML = "Disable Loop";
    }else{
        vid.loop = false;
        vonglap.innerHTML = "Enable Loop";
    } 
});

function checkLoop() { 
    alert(vid.loop);
} 
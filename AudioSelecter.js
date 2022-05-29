let AudioLen = 0;
let AudioObj = document.createElement("audio");
AudioObj.id = 'audio-player';
AudioObj.controls = true;
AudioObj.preload = "auto";
AudioObj.type = 'audio/mpeg';

function playNew(){
    document.getElementById("debug").innerHTML = AudioObj.duration;
    if(AudioObj.duration != "NaN" && AudioLen < AudioObj.duration){
        AudioLen = AudioObj.duration;
        console.log(AudioLen);
    }
    if(AudioLen <= AudioObj.currentTime && AudioLen != 0){
        console.log(AudioLen + "/" + AudioObj.currentTime);
        AudioObj.src = "media/" + Math.floor(Math.random() * 49) + ".mp3";
        AudioObj.load();
        AudioObj.play();
        AudioLen = 0;
    }
}

function onClick(){
    document.getElementById("start").style.display = "none";
    document.getElementById("ref").appendChild(AudioObj);
    AudioObj.src = "media/" + Math.floor(Math.random() * 49) + ".mp3";
    AudioObj.load();
    AudioObj.play();
    console.log(AudioObj.duration);
    AudioObj.addEventListener("timeupdate", playNew);
};

function onLoad(){
    btn = document.getElementById("start");
    btn.addEventListener("click", onClick);
};


document.addEventListener("DOMContentLoaded", onLoad);


let AudioObj = document.createElement("audio");
AudioObj.id = 'audio-player';
AudioObj.controls = true;
AudioObj.preload = "auto";
AudioObj.type = 'audio/mpeg';

function playNew(){
    if(AudioObj.duration != NaN && AudioObj.duration <= AudioObj.currentTime){
        console.log(AudioLen + "/" + AudioObj.currentTime);
        AudioObj.src = "media/" + Math.floor(Math.random() * 49) + ".mp3";
        AudioObj.load();
        AudioObj.play();
    }
}

function onClick(){
    document.getElementById("start").style.display = "none";
    document.getElementById("ref").appendChild(AudioObj);
    AudioObj.src = "media/" + Math.floor(Math.random() * 49) + ".mp3";
    AudioObj.load();
    AudioObj.play();
    AudioObj.addEventListener("timeupdate", playNew);
};

function onLoad(){
    btn = document.getElementById("start");
    btn.addEventListener("click", onClick);
};


document.addEventListener("DOMContentLoaded", onLoad);


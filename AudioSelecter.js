let firstinteract = true;
let AudioObj = document.createElement("audio");
AudioObj.id = 'audio-player';
AudioObj.controls = 'controls';
AudioObj.type = 'audio/mpeg';

function playNew(){
    AudioObj.src = "media/" + Math.floor(Math.random() * 56) + ".mp3";
    AudioObj.play();
}

function onClick(){
    document.getElementById("start").style.display = "none";
    document.getElementById("ref").appendChild(AudioObj);
    AudioObj.src = "media/" + Math.floor(Math.random() * 56) + ".mp3";
    AudioObj.play();
    AudioObj.addEventListener("ended", playNew);
};

function onLoad(){
    btn = document.getElementById("start");
    btn.addEventListener("click", onClick);
};


document.addEventListener("DOMContentLoaded", onLoad);


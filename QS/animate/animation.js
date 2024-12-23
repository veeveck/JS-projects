let element=document.getElementById("box");
let animation=element.animate([{ transform: 'translateX(0px)' },{ transform: 'translateX(240px)' }], 
    { duration: 2500,iterations: Infinity, direction: 'alternate'});

document.getElementById("play").addEventListener("click",playAnimation)
document.getElementById("pause").addEventListener("click",pauseAnimation)
document.getElementById("reverse").addEventListener("click",reverseAnimation)
document.getElementById("incRate").addEventListener("click",incPlaybackRate)
document.getElementById("decRate").addEventListener("click",decPlaybackRate)

animation.pause();

function playAnimation(){
    console.log("Playing animation");
    animation.play();
}
function pauseAnimation(){
    console.log("Pause animation");
    animation.pause();
}
function reverseAnimation(){
    console.log("Reversing animation");
    animation.reverse();
}
function incPlaybackRate(){
    animation.playbackRate+=0.5;
    console.log(`Playbackrate increased to ${animation.playbackRate}`);
}
function decPlaybackRate(){
    if(animation.playbackRate > 0){
     animation.playbackRate-=0.5;
     console.log(`Playbackrate decreased to ${animation.playbackRate}`);
    }
}
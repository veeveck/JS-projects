let element=document.getElementById("theButton");
element.addEventListener("click",animateButton);

let direction=1;
let speed=1;
let id;
function animateButton(){
    clearInterval(id);
    let position=parseInt(window.getComputedStyle(element).left,10);
    id=setInterval(frame,10);
    function frame(){
        if(position >=500 && direction ==1){
            direction=-1;
        }
        else if(position <=0 && direction == -1){
            clearInterval(id);
            direction=1;
        }
        else{
            position+=direction*speed;
            element.style.left=position +"px";
        }
    }
}
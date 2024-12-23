function getColorCap(string){
    return string.charAt(0).toUpperCase()+ string.slice(1);
}
function chnageBgColor(element,color){
    element.style.backgroundColor=color;
}
const colorSelector={
    colors:{
       "red": "#FF0000",
       "orange": "#FFA500",
       "yellow": "#FFFF00",
       "green": "#008000",
       "blue": "#0000FF",
       "indigo": "#4B0082",
       "violet": "#EE82EE" 
    },
    render:(parent,id,stich,className="")=>{
        let select=document.createElement("select");
        select.id=id;
        if(className)select.className=className;
        for(let color in colorSelector.colors){
            let option=document.createElement("option");
            option.value=colorSelector.colors[color];
            option.innerHTML=getColorCap(color);
            select.append(option)
        }
        select.addEventListener("change",function(event){
            chnageBgColor(stich,event.target.value);
        })  
        parent.append(select);  
    }
}
let colorSwitch=document.getElementById("colorSwitch");
let colorSelection=document.getElementById("colorSelection");
colorSelector.render(colorSelection,"colorSelect",colorSwitch,"oye");
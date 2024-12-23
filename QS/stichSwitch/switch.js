let colorSelector=document.getElementById("colorSelector");
let colorSquare=document.getElementById("colorSquare");

colorSelector.addEventListener("change",function(){
    colorSquare.style.backgroundColor=colorSelector.value;
});
const greetingContainer=document.getElementById("greeting");
const sayHello=document.getElementById("sayHello");

function greeting(){
    greetingContainer.textContent="Hello Boy !";
    alert("Oye");
}
sayHello.addEventListener("click",greeting);

let expMonths={},expYears={};
expMonths[Symbol.iterator]=function(){
    let m=0;
    return {
        next(){
            m+=1;
            theValue = "<option value='" + m + "'>" + m + "</option>"
            if(m>12){
                return {value:theValue,done:true}
            }else{
                return {value:theValue,done:false}
            }
        }
    }
}
expYears[Symbol.iterator] = function() {
    let y = new Date().getFullYear() - 1;
    return {
      next() {
        y += 1;
        theValue = {html: "<option value='" + y + "'>" + y +"</option>", year: y}
        console.log(theValue);
        return {value:theValue, done:false}
      }
    }
}
for(let month of expMonths){
    document.getElementById("expMonth").innerHTML+=month
}
for(let year of expYears){
    document.getElementById("expYear").innerHTML+=year.html;
    if(year.year >= new Date().getFullYear()+10)break;
}
let width=document.getElementById("width");
let height=document.getElementById("height");

function displayWindowSize(){
    width.innerHTML=window.innerWidth;
    height.innerHTML=window.innerHeight;
}
displayWindowSize();
window.addEventListener("resize",displayWindowSize);
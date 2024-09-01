var text= document.getElementById("text");
var strtext="I hope you have the BEST BIRTHDAY EVER DADDY!"
var colorIndex=0;
var colors=["#ff0000","#ff6600","#ffff00","#00ff00","#0000ff","#4b0082","#880088"]
function colorChange(){
text.innerHTML="";
for (let index = 0; index < strtext.length; index++) {
    
    const element = strtext[index];
    text.innerHTML+="<div id="+"char"+index+">"+element+"</div>";
    divis=document.getElementById("char"+index);
    divis.style.color=colors[(colorIndex+index)%7]

}
colorIndex+=1;

}
setInterval(colorChange,750);


//btn for mood
const DayModeBtn=document.getElementById("daymode");
const NightModebtn=document.getElementById("nightmode");
const body=document.body;
let title=document.getElementById("title");

DayModeBtn.addEventListener("click",()=>{
    body.style.background=`white`;
    title.style.color=`black`;
    document.getElementById("btn1").style["boxShadow"]="0px 0px 7px 7px black";
    document.getElementById("btn2").style["boxShadow"]="0px 0px 7px 7px black";
    document.getElementById("btn3").style["boxShadow"]="0px 0px 7px 7px black";
    document.getElementById("btn4").style["boxShadow"]="0px 0px 7px 7px black";
    document.getElementById("btn5").style["boxShadow"]="0px 0px 7px 7px black";
    document.getElementById("btn6").style["boxShadow"]="0px 0px 7px 7px black";
    });
NightModebtn.addEventListener("click",()=>{
    body.style.background=`black`;
    title.style.color=`white`;
    document.getElementById("btn1").style["boxShadow"]="0px 0px 7px 7px white";
    document.getElementById("btn2").style["boxShadow"]="0px 0px 7px 7px white";
    document.getElementById("btn3").style["boxShadow"]="0px 0px 7px 7px white";
    document.getElementById("btn4").style["boxShadow"]="0px 0px 7px 7px white";
    document.getElementById("btn5").style["boxShadow"]="0px 0px 7px 7px white";
    document.getElementById("btn6").style["boxShadow"]="0px 0px 7px 7px white";
});

const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");
const btn6=document.getElementById("btn6");
btn1.addEventListener("click",function(){
    window.location.href="./branch.html";

});
btn2.addEventListener("click",function(){
    window.location.href="./branch2.html";
});btn3.addEventListener("click",function(){
    window.location.href="./branch3.html";
});btn4.addEventListener("click",function(){
    window.location.href="./branch4.html";
});btn5.addEventListener("click",function(){
    window.location.href="./branch5.html";
});btn6.addEventListener("click",function(){
    window.location.href="./branch6.html";
});


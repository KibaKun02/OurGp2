const comeback=document.getElementById("comeback");
comeback.addEventListener("click",function(){
    window.location.href="./index.html";
});
const display=document.getElementById("imagedisplay");
const forward=document.getElementById("forward");
const backward=document.getElementById("backward");
var images=["./imgs/kanae1.jpg","./imgs/kanae2.jpg","./imgs/kanae3.jpg","./imgs/kanae4.jpg","./imgs/kanae5.jpg"];
var currentindex=0;
forward.addEventListener("click",() =>{
    currentindex--;
    if(currentindex<0){

        currentindex=images.length-1;
    }
    display.src=images[currentindex];
})
backward.addEventListener("click",() =>{
    currentindex++;
    if(currentindex>=images.length){
        currentindex=0
    }
    display.src=images[currentindex];
})
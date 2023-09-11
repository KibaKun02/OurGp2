const comeback=document.getElementById("comeback");
comeback.addEventListener("click",function(){
    window.location.href="./index.html";
});
const display=document.getElementById("imagedisplay");
const forward=document.getElementById("forward");
const backward=document.getElementById("backward");
var images=["./imgs/mitsuri1.jpg","./imgs/mitsuri2.jpg","./imgs/mitsuri3.jpg","./imgs/mitsuri4.jpg","./imgs/mitsuri5.jpg"];
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
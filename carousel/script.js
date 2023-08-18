const imgs = document.getElementById('images');
const img = document.querySelectorAll('#images img')
let idx = 0;
function run(){
 idx ++;
 if(idx>img.length-1){
    idx = 0;
 }
 imgs.style.transform = `translateX(${-idx * 500}px)`;
 
}

setInterval(run,2000);
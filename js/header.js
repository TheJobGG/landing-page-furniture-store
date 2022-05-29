/* 
    Toggle background color 
    source: https://www.javascripttutorial.net/javascript-dom/javascript-scroll-events/
*/

const header = document.querySelector("#header");
header.style.backgroundColor = "#7de2d1";

let scrolling = false;

window.onscroll = function(){
    scrolling = true;
    if(window.scrollY != 0 && scrolling){
        header.classList.remove('bg-color');
        header.classList.add('bg-white');
    }else{
        header.classList.add('bg-color');
        header.classList.remove('bg-white');
    }
}
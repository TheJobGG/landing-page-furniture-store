/* 
    Toggle background color 
    source: https://www.javascripttutorial.net/javascript-dom/javascript-scroll-events/
*/

//Set del color de fondo del header
const header = document.querySelector("#header");
header.style.backgroundColor = "#7de2d1";

// Obtenemos la altura del primer contenido para saber cuando camiar de color
const mainContentBgColor = document.querySelector(".main-content-bg-color");
const heightBanner = mainContentBgColor.clientHeight

//Si el header esta en el principio, sera azul, de lo contrario sera blanca
window.onscroll = function () {
    if (window.scrollY < heightBanner) {
        header.classList.add('bg-color');
        header.classList.remove('bg-white');
    } else {
        header.classList.remove('bg-color');
        header.classList.add('bg-white');
    }
}
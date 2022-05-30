// Se selecciona el slider que coniene todas las imagenes
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
// ciclamos las imagenes y las colocamos una al lado de la otra
slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${i * 100}%)`;
  
  // Es deshabilitada la opción de arrastrar (drag) las imagenes
  slide.firstChild.setAttribute("draggable", "false");
});

// Seleccionamos el botón para la siguiente imagen
const nextSlide = document.querySelector(".btn-next");

// Creamos el contador para el slider actual
let curSlide = 0;
// Delimitamos el máximo de sliders
let maxSlide = slides.length - 1;

// Se añade el event listener para añadir la funcionalidad al botón de "siguiente"
nextSlide.addEventListener("click", function () {

  // Verificamos si el actual slider es el último, de ser asi, reseteamos el contador 
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  //  Establecemos la posición del slider para visualizar el slide correspondiente 
  //  de acuerdo a la variable "curSlide"
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// Seleccionamos el botón para la imagen anterior
const prevSlide = document.querySelector(".btn-prev");

// Añadimos la funcionalidad ahora para el botón de imagen "previa"
prevSlide.addEventListener("click", function () {

  // Verificamos si el actual slider es el primero, de ser asi reseteamos el contador hasta el último slide 
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //  Establecemos la posición del slider para visualizar el slide correspondiente 
  //  de acuerdo a la variable "curSlide"
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});




/* Date from bottom of page */
dt = new Date();
document.querySelector(".year").innerHTML = dt.getFullYear();
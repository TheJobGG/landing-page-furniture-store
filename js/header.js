/* 
Toggle background color 
source: https://www.javascripttutorial.net/javascript-dom/javascript-scroll-events/
*/

//Set del color de fondo del header
const header = document.querySelector("#header");
/* header.style.backgroundColor = "#7de2d1"; */


// Obtenemos la altura del primer contenido para saber cuando cambiar de color
const mainContentBgColor = document.querySelector(".main-content-bg-color");
const heightBanner = mainContentBgColor.clientHeight

let verified = true;
function isOnTop() {
    if (window.scrollY < heightBanner && verified) {
        console.log('En pantalla - window Scroll')
        header.classList.add('bg-color');
        header.classList.remove('bg-white');
        console.log("~~~~ Ya me ejecuté y cumplí mi deber, ya no me volverás a ver... :(")
    }

}

// Seleccionamos todos los elementos donde será el cambio de color por medio de la clase "observe"
const observeElements = document.querySelectorAll(".observe");

const observerHeader = new IntersectionObserver(
    // Para cada entrada estaremos observando si se esta en la pantalla o no
    // y dependiendo de eso se tomará cierta acción, en este caso cambiar de color el bg del header.
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('En pantalla - observer')
                header.classList.add('bg-color');
                header.classList.remove('bg-white');
                return;
            } else if (verified) {
                // Este código solo se ejeutará una vez al cargar la página para verificar que 
                // la navegación esté arriba o en top
                isOnTop()
                console.log('En pantalla por método, ya no debería volver a ejecutarse...')
                verified = false;
                console.log('return')
                return;
            } else {
                console.log('Fuera de pantalla')
                header.classList.remove('bg-color');
                header.classList.add('bg-white');
                return;
            }
        })
    },
    {
        // Condición del observer que marca que se ejecutará si al menos la mitad del elemento
        // es observado
        threshold: 0.5,
    }
)

// Metodo para añadir el observer a cada uno de los elementos seleccionados con la clase "observe"
observeElements.forEach(element => {
    observerHeader.observe(element)
}
)
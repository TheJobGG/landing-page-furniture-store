/* 
    ciclar  elementos seleccionados del DOM con forEach
    src: https://bobbyhadz.com/blog/javascript-typeerror-foreach-is-not-a-function

    Añadir un evento a varios elementos del DOM con la misma clase
    src: https://bobbyhadz.com/blog/javascript-add-event-listener-to-all-elements-with-class
*/

let imgSrc;
// Obtenemos todos los slides/imagenes
const images = document.querySelectorAll(".slide img");

// Le asignamos el evento a cada slide para que se abra un modal al ser clicada la imágen
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        AltText = e.target.alt
        imgModal(imgSrc, AltText, 250, 150);
    });
});


/* 
Function ImgModal(param1, param2):

    Función para crear el modal sobre la pantalla.
    Recibe 3 parámetros:
    1. El src o dirección de la imagen.
    2. El texto alternativo de la imágen. 
    3. Tiempo que tardará el modal en abrirse
    4. Tiempo que tardará el modal en cerrarse
 */
let imgModal = (src, alt, timeOpenModal, timeCloseModal) => {
    disableScroll()
    // Obtenemos el valor puesto de la animación de "Apertura del modal"
    getComputedStyle(document.documentElement).getPropertyValue("--time-open-modal")
    // Y establecemos el valor puesto de la animación de "Apertura del modal"
    document.documentElement.style.setProperty("--time-open-modal", `${timeOpenModal}ms`)

    // Obtenemos el valor puesto de la animación de "Cierre del modal"
    getComputedStyle(document.documentElement).getPropertyValue("--time-close-modal")
    // Y establecemos el valor puesto de la animación de "Cierre del modal"
    document.documentElement.style.setProperty("--time-close-modal", `${timeCloseModal}ms`)
    // Se crea el "modal" 
    const modal = document.createElement("div");

    // Se añade la clase "modal"
    modal.setAttribute("class", "modal");

    //Es añadido al appendice de elementos
    document.querySelector("#header").append(modal);

    //Añadiendo la imagen al modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    
    
    if(document.body.offsetWidth < 600) newImage.setAttribute("style", "width: 99vw;");
    // poniendo el texto alternativo como caption
    const caption = document.createElement("div");
    caption.innerText = alt;
    caption.classList.add("modal-alt-text");

    // Añadimos la imagen y el texto al modal
    modal.append(newImage, caption);

    // Agregamos el evento para cerrar el modal y poder seguir navegando.
    modal.onclick = () => {
        modal.classList.add("disappear");
        enableScroll();
        setTimeout(() => {
            modal.remove();
        }, timeCloseModal);
    };
};


//  Funciones para habilitar y desabilitar scroll cuando el modal est activo
function disableScroll() {
    // Obtenemos la posicion de la página en el eje X y Y
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Detectamos cuando se haga scroll, si esto sucede estableceremos los valores 
        // obtenidos anteriormente para mantener la vista en el mismo lugar
        window.onscroll = function () {
            window.scrollTo(LeftScroll, TopScroll);
        };
}

// Al ejecutar esta función solamente estaremos limpiando la propiedad "onscroll" 
// para que ya no establezca los valores obtenidos de "leftScroll" y "topScroll"
function enableScroll() {
    window.onscroll = function () { };
}
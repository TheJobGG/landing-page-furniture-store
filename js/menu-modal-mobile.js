

const icon = document.querySelector("#icon-hamburger");
console.log("icon selected")

icon.addEventListener("click", (e) => {
    clickHamburgerIcon();
})

function clickHamburgerIcon() {
    disableScroll();
    console.log("icon clicked")
    const menu = document.createElement("ul");

    // Se añade la clase "modal"
    menu.setAttribute("class", "modal mobile-menu");

    //Es añadido al appendice de elementos
    document.querySelector("#header").append(menu);


    const listFurnitures = document.createElement("li");
    const furnitures = document.createElement("a");
    furnitures.setAttribute("href", "#recommended-products")
    furnitures.innerText = "Furntiures"
    listFurnitures.append(furnitures);

    const listAboutUs = document.createElement("li");
    const aboutUs = document.createElement("a");
    aboutUs.setAttribute("href", "#about-us");
    aboutUs.innerText = "About Us";
    listAboutUs.append(aboutUs);

    const listContactUs = document.createElement("li");
    const contactUs = document.createElement("a");
    contactUs.setAttribute("href", "#contact")
    contactUs.innerText = "Contact Us";
    listContactUs.append(contactUs);

    menu.append(listFurnitures, listAboutUs, listContactUs);
    

    menu.onclick = () => {
        menu.classList.add("disappear");
        enableScroll();
        setTimeout(() => {
            menu.remove();
        }, 100);
    };
}




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
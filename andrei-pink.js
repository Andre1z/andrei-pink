// Variable para rastrear el estado del modo de ayuda
let ayudaActiva = false;

function activarModoAyuda() {
    const elementos = document.querySelectorAll("[title]");
    if (!ayudaActiva) {
        // Activar el modo de ayuda
        elementos.forEach(el => {
            el.style.outline = "2px solid pink"; // Resalta los elementos
            // Añadir clase para activar el pop-up
            el.classList.add("mostrar-tooltip");
        });
        console.log("Modo de ayuda activado");
    } else {
        // Desactivar el modo de ayuda
        elementos.forEach(el => {
            el.style.outline = ""; // Elimina el resaltado
            // Eliminar clase para desactivar el pop-up
            el.classList.remove("mostrar-tooltip");
        });
        console.log("Modo de ayuda desactivado");
    }
    // Alterna el estado
    ayudaActiva = !ayudaActiva;
}
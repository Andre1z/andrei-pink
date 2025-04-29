// Variable para rastrear el estado del modo de ayuda
let ayudaActiva = false;

// Historial de acciones
const historialAcciones = [];

// Activar/desactivar modo de ayuda
function activarModoAyuda() {
    const elementos = document.querySelectorAll("[title]");
    if (!ayudaActiva) {
        // Activar el modo de ayuda
        elementos.forEach(el => {
            el.style.outline = "2px solid pink"; // Resalta los elementos
            el.classList.add("mostrar-tooltip"); // Muestra el tooltip
        });
        console.log("Modo de ayuda activado");
        historialAcciones.push("Activado");
    } else {
        // Desactivar el modo de ayuda
        elementos.forEach(el => {
            el.style.outline = ""; // Elimina el resaltado
            el.classList.remove("mostrar-tooltip"); // Oculta el tooltip
        });
        console.log("Modo de ayuda desactivado");
        historialAcciones.push("Desactivado");
    }
    // Alterna el estado
    ayudaActiva = !ayudaActiva;
    console.log(`Historial de acciones: ${historialAcciones.join(", ")}`);
}

// Ajustar posición dinámica de tooltips para evitar superposición
function ajustarTooltips() {
    const elementos = document.querySelectorAll("[title]");
    elementos.forEach(el => {
        const rect = el.getBoundingClientRect();
        el.style.position = "relative"; // Asegura que el cálculo sea relativo al contenedor
        const tooltip = document.createElement("div");
        tooltip.textContent = el.getAttribute("title");
        tooltip.style.position = "absolute";
        tooltip.style.left = `${rect.right}px`; // Posición al lado del elemento
        tooltip.style.top = `${rect.top + window.scrollY}px`; // Ajusta con respecto al scroll
        tooltip.style.background = "pink";
        tooltip.style.padding = "5px";
        tooltip.style.borderRadius = "4px";
        tooltip.style.whiteSpace = "nowrap";
        tooltip.style.zIndex = "10";
        document.body.appendChild(tooltip);
        el.addEventListener("mouseout", () => document.body.removeChild(tooltip));
    });
}

// Resaltar elementos por palabra clave
function resaltarPorPalabraClave(keyword) {
    const elementos = document.querySelectorAll(`[data-keyword='${keyword}']`);
    elementos.forEach(el => {
        el.style.outline = "2px solid blue"; // Resalta con un color diferente
    });
    console.log(`Elementos con la palabra clave "${keyword}" resaltados.`);
}

// Activar animaciones dinámicas de ayuda
function activarAnimacionesDeAyuda() {
    const elementos = document.querySelectorAll("[title]");
    elementos.forEach(el => {
        el.style.transition = "outline 0.5s ease-in-out"; // Animación suave
        el.style.outline = "5px dashed green"; // Cambia el estilo dinámicamente
    });
    console.log("Animaciones de ayuda activadas");
}

// Contar elementos resaltados
function contarElementosResaltados() {
    const elementos = document.querySelectorAll("[title]");
    alert(`Hay ${elementos.length} elementos con atributos "title".`);
}

// Activar tooltips interactivos
function activarTooltipsInteractivos() {
    const elementos = document.querySelectorAll("[title]");
    elementos.forEach(el => {
        el.addEventListener("mouseover", () => {
            const tooltip = document.createElement("div");
            tooltip.innerHTML = `
                <div style="background: pink; padding: 10px; border-radius: 5px;">
                    <strong>${el.getAttribute("title")}</strong>
                    <p>Haz clic <a href="#">aquí</a> para más información</p>
                </div>
            `;
            tooltip.style.position = "absolute";
            tooltip.style.left = `${el.getBoundingClientRect().left}px`;
            tooltip.style.top = `${el.getBoundingClientRect().top - 50}px`;
            document.body.appendChild(tooltip);
            el.addEventListener("mouseout", () => document.body.removeChild(tooltip));
        });
    });
    console.log("Tooltips interactivos activados");
}

// Activar modo de ayuda con temporizador
function activarModoAyudaConTemporizador(duracion = 5000) {
    activarModoAyuda(); // Activa el modo de ayuda
    setTimeout(() => {
        activarModoAyuda(); // Lo desactiva automáticamente
    }, duracion);
    console.log(`Modo de ayuda activado por ${duracion / 1000} segundos.`);
}
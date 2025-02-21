document.addEventListener('DOMContentLoaded', function() {
    // Botones de cada servicio
    const botonHighFade = document.querySelector('.boton-high-fade');
    const botonMullet = document.querySelector('.boton-mullet');
    const botonTinte = document.querySelector('.boton-tinte');

    // Añadir evento de clic para el botón "High Fade"
    botonHighFade.addEventListener('click', function() {
        toggleInfo('.boton-high-fade');
    });

    // Añadir evento de clic para el botón "Mullet"
    botonMullet.addEventListener('click', function() {
        toggleInfo('.boton-mullet');
    });

    // Añadir evento de clic para el botón "Mundo del Tinte"
    botonTinte.addEventListener('click', function() {
        toggleInfo('.boton-tinte');
    });

    // Función para mostrar u ocultar la información
    function toggleInfo(botonSelector) {
        // Seleccionamos el div con la clase "info" correspondiente al botón
        const infoDiv = document.querySelector(botonSelector).parentElement.querySelector('.info');

        // Verificamos si el div está visible
        if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
            // Mostrar la información
            infoDiv.style.display = "block";
            infoDiv.style.color = "#ff4a1c";
            infoDiv.style.fontWeight = "bold";
            infoDiv.style.backgroundColor = "#f0f3f5";
            
        } else {
            // Ocultar la información
            infoDiv.style.display = "none";
        }
    }
});
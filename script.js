console.log('Hola Mundo');

document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});



// Opcional: Puedes agregar un evento para ocultar el menú flotante cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
    const floatingMenu = document.querySelector('.floating-menu');
    if (!floatingMenu.contains(event.target)) {
        floatingMenu.classList.remove('active');
    }
});

// Opcional: Puedes agregar un botón para mostrar u ocultar el menú flotante
const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', function() {
    const floatingMenu = document.querySelector('.floating-menu');
    floatingMenu.classList.toggle('active');
});



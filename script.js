// script.js
document.addEventListener('DOMContentLoaded', function () {
  console.log("El archivo script.js se ha cargado correctamente.");
});

// Obtiene los elementos del botón y del menú
const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');

// Función para alternar la visibilidad del menú
menuButton.addEventListener('click', function(event) {
    event.preventDefault(); // Previene que el enlace realice una acción de navegación
    dropdownMenu.classList.toggle('show');
});

// Cerrar el menú si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('#menuButton') && !event.target.matches('.dropdown-content') && !event.target.matches('.dropdown-content a')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', function () {
  console.log("El archivo script.js se ha cargado correctamente.");
});


const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');


menuButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    dropdownMenu.classList.toggle('show');
});


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

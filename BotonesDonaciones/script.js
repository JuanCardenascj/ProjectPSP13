// Validación del formulario de donación
document.getElementById('form-donacion').addEventListener('submit', function(event) {
    var monto = document.getElementById('monto').value;
    if (monto <= 0) {
        alert("Por favor, ingresa un monto válido.");
        event.preventDefault(); // Evitar que el formulario se envíe
    } else {
        alert("¡Gracias por tu generosa donación!");
    }
});

// Función para enviar el formulario
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email-contacto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        // Mostrar mensaje de éxito
        alert('¡Gracias por ponerte en contacto con nosotros! Te responderemos pronto.');
        
        // Limpiar el formulario
        document.getElementById('form-contacto').reset();
    } else {
        // Mostrar mensaje de error
        alert('Por favor, completa todos los campos del formulario.');
    }
});

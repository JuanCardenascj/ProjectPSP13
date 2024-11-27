// Función para enviar el formulario con animación de éxito
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email-contacto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        // Animación de éxito y mensaje
        document.querySelector('#formulario').classList.add('submitted');
        alert('¡Gracias por ponerte en contacto con nosotros! Te responderemos pronto.');
        
        // Limpiar el formulario
        document.getElementById('form-contacto').reset();
    } else {
        // Mostrar mensaje de error
        alert('Por favor, completa todos los campos del formulario.');
    }
});

// Agregar una clase CSS cuando el formulario sea enviado
document.getElementById('form-contacto').addEventListener('submit', () => {
    document.querySelector('#formulario').classList.add('form-submitted');
});


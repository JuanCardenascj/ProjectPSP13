
document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email-contacto').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
   
        document.querySelector('#formulario').classList.add('submitted');
        alert('¡Gracias por ponerte en contacto con nosotros! Te responderemos pronto.');
        
     
        document.getElementById('form-contacto').reset();
    } else {
     
        alert('Por favor, completa todos los campos del formulario.');
    }
});


document.getElementById('form-contacto').addEventListener('submit', () => {
    document.querySelector('#formulario').classList.add('form-submitted');
});


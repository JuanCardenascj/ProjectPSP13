document.getElementById('form-experiencia').addEventListener('submit', function (event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;

    if (titulo && descripcion) {
        const nuevaExperiencia = {
            titulo: titulo,
            descripcion: descripcion,
            comentarios: []
        };

        mostrarExperiencia(nuevaExperiencia);
        guardarExperiencia(nuevaExperiencia);


        document.getElementById('form-experiencia').reset();
    }
});

function mostrarExperiencia(experiencia) {
    const listaExperiencias = document.getElementById('lista-experiencias');
    
    const div = document.createElement('div');
    div.classList.add('experiencia');
    
    div.innerHTML = `
        <h3>${experiencia.titulo}</h3>
        <p>${experiencia.descripcion}</p>
        <button onclick="mostrarComentarioForm(this)">Comentar</button>
        <div class="comentarios">
            <!-- Los comentarios aparecerán aquí -->
        </div>
        <div class="form-comentario" style="display:none;">
            <textarea placeholder="Escribe tu comentario..." class="comentario-input"></textarea>
            <button onclick="agregarComentario(this)">Enviar Comentario</button>
        </div>
    `;
    
    listaExperiencias.appendChild(div);
}

function mostrarComentarioForm(button) {
    const formComentario = button.nextElementSibling.nextElementSibling;
    formComentario.style.display = 'block';
}

function agregarComentario(button) {
    const comentarioInput = button.previousElementSibling;
    const comentarioTexto = comentarioInput.value.trim();

    if (comentarioTexto) {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario');
        comentarioDiv.textContent = comentarioTexto;

        const experienciaDiv = button.closest('.experiencia');
        const comentariosDiv = experienciaDiv.querySelector('.comentarios');
        comentariosDiv.appendChild(comentarioDiv);


        comentarioInput.value = '';
        button.closest('.form-comentario').style.display = 'none';
    }
}

function guardarExperiencia(experiencia) {
   
}


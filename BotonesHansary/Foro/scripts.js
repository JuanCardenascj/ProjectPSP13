// Array para almacenar los temas y comentarios (simulando una base de datos)
let temas = [];

// Función para crear un tema
document.getElementById('form-tema').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo-tema').value;
    const descripcion = document.getElementById('descripcion-tema').value;

    // Crear objeto de tema
    const tema = {
        id: temas.length + 1,
        titulo: titulo,
        descripcion: descripcion,
        likes: 0,
        comentarios: []
    };

    // Añadir tema al array
    temas.push(tema);

    // Limpiar el formulario
    document.getElementById('form-tema').reset();

    // Renderizar temas nuevamente
    renderizarTemas();

    // Alerta que confirma el éxito de creación
    alert('¡Tema creado con éxito!');
});

// Función para renderizar los temas en la página
function renderizarTemas() {
    const listaTemas = document.getElementById('temas-lista');
    listaTemas.innerHTML = '';

    temas.forEach(tema => {
        const liTema = document.createElement('li');
        liTema.classList.add('tema');

        liTema.innerHTML = `
            <h3>${tema.titulo}</h3>
            <p>${tema.descripcion}</p>
            <button onclick="darLike(${tema.id})">Like (${tema.likes})</button>
            <div class="comentarios">
                <textarea id="comentario-${tema.id}" placeholder="Escribe un comentario..."></textarea>
                <button onclick="comentar(${tema.id})">Comentar</button>
                <div id="comentarios-${tema.id}">
                    ${tema.comentarios.map(comentario => `<p>${comentario}</p>`).join('')}
                </div>
            </div>
        `;

        listaTemas.appendChild(liTema);
    });
}

// Función para dar "like" a un tema
function darLike(temaId) {
    const tema = temas.find(t => t.id === temaId);
    tema.likes++;
    renderizarTemas();
}

// Función para comentar en un tema
function comentar(temaId) {
    const comentario = document.getElementById(`comentario-${temaId}`).value;
    if (comentario) {
        const tema = temas.find(t => t.id === temaId);
        tema.comentarios.push(comentario);

        // Limpiar el campo de comentario
        document.getElementById(`comentario-${temaId}`).value = '';

        // Renderizar los comentarios
        renderizarComentarios(temaId);
    } else {
        alert("No puedes enviar un comentario vacío.");
    }
}

// Función para renderizar los comentarios de un tema
function renderizarComentarios(temaId) {
    const tema = temas.find(t => t.id === temaId);
    const divComentarios = document.getElementById(`comentarios-${temaId}`);
    divComentarios.innerHTML = '';

    tema.comentarios.forEach(comentario => {
        const p = document.createElement('p');
        p.textContent = comentario;
        divComentarios.appendChild(p);
    });
}

// Inicializar el foro con los temas
renderizarTemas();


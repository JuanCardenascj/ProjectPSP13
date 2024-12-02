
function guardarTema(titulo, descripcion) {
    let temas = JSON.parse(localStorage.getItem('temas')) || [];

    let nuevoTema = {
        id: temas.length + 1, 
        titulo: titulo,
        descripcion: descripcion,
        likes: 0,
        comentarios: []
    };

    temas.push(nuevoTema);
    localStorage.setItem('temas', JSON.stringify(temas));

    
    mostrarTemas();
}


function mostrarTemas() {
    let temas = JSON.parse(localStorage.getItem('temas')) || [];
    const listaTemas = document.getElementById('temas-lista');
    listaTemas.innerHTML = ''; 

    temas.forEach(tema => {
        let temaElement = document.createElement('li');
        temaElement.classList.add('tema');
        
        temaElement.innerHTML = `
            <h3>${tema.titulo}</h3>
            <p>${tema.descripcion}</p>
            <button onclick="darLike(${tema.id})">Like (${tema.likes})</button>
            <button onclick="eliminarTema(${tema.id})">Eliminar</button>
            <div class="comentarios">
                <textarea id="comentario-${tema.id}" placeholder="Escribe un comentario..."></textarea>
                <button onclick="comentar(${tema.id})">Comentar</button>
                <div id="comentarios-${tema.id}">
                    ${tema.comentarios.map(c => `<p>${c}</p>`).join('')}
                </div>
            </div>
        `;

        listaTemas.appendChild(temaElement);
    });
}


function eliminarTema(id) {
    let temas = JSON.parse(localStorage.getItem('temas')) || [];
    temas = temas.filter(t => t.id !== id);

    localStorage.setItem('temas', JSON.stringify(temas));

  
    mostrarTemas();
}


function darLike(id) {
    let temas = JSON.parse(localStorage.getItem('temas')) || [];
    let tema = temas.find(t => t.id === id);
    if (tema) {
        tema.likes++;
        localStorage.setItem('temas', JSON.stringify(temas));
        mostrarTemas();
    }
}


function comentar(id) {
    let temas = JSON.parse(localStorage.getItem('temas')) || [];
    let tema = temas.find(t => t.id === id);
    let comentario = document.getElementById(`comentario-${id}`).value;
    if (tema && comentario) {
        tema.comentarios.push(comentario);
        localStorage.setItem('temas', JSON.stringify(temas));
        mostrarTemas();
    }
}


window.onload = function() {
    mostrarTemas();

    const formulario = document.getElementById('form-tema');
    formulario.onsubmit = function(e) {
        e.preventDefault();
        const titulo = document.getElementById('titulo-tema').value;
        const descripcion = document.getElementById('descripcion-tema').value;

        if (titulo && descripcion) {
            guardarTema(titulo, descripcion);
            formulario.reset();
        }
    };
};




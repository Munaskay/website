function mostrarMensaje(event) {
    event.preventDefault();
    var mensaje = document.getElementById('mensaje');
    var overlay = document.getElementById('overlay');
    mensaje.style.display = 'block';
    overlay.style.display = 'block';
}

function ocultarMensaje() {
    var mensaje = document.getElementById('mensaje');
    var overlay = document.getElementById('overlay');
    mensaje.style.display = 'none';
    overlay.style.display = 'none';
    window.location.href = 'suscripciones.html';
}

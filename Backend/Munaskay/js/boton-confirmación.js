const radios = document.querySelectorAll('input[name="payment"]');
const confirmButton = document.getElementById('confirmButton');

radios.forEach(radio => {
    radio.addEventListener('change', function () {
        confirmButton.style.display = 'block';
    });
});

// Evento click para el botón de confirmación que redirige a otra página
confirmButton.addEventListener('click', function () {
    // Aquí rediriges a la página deseada
    window.location.href = 'metodo-visa.html'; // Cambiar por la ruta de la página a la que quieres redirigir
});
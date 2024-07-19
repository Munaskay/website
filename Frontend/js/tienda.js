document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const botonCancelar = document.getElementById('cancelar-carrito');
    const botonPagar = document.getElementById('pagar-carrito');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            const nombreProducto = this.dataset.nombre;
            const precioProducto = parseFloat(this.dataset.precio);
            agregarAlCarrito(nombreProducto, precioProducto);
        });
    });

    botonCancelar.addEventListener('click', function(e) {
        e.preventDefault();
        const carrito = document.getElementById('carrito');
        carrito.classList.remove('carrito-visible');
    });

    botonPagar.addEventListener('click', function(e) {
        e.preventDefault();
        // Aquí puedes añadir la lógica para procesar el pago
        const totalElemento = document.getElementById('total');
        const total = parseFloat(totalElemento.textContent.replace('$', ''));
        alert(`Se procesará el pago por un total de $${total.toFixed(2)}`);
        vaciarCarrito(); // Opcional: limpia el carrito después de pagar
    });

    function agregarAlCarrito(nombre, precio) {
        // Crear elemento de lista para el producto
        const listaProductos = document.getElementById('lista-productos');
        const nuevoProducto = document.createElement('li');
        nuevoProducto.textContent = `${nombre} - $${precio.toFixed(2)}`;
    
        // Botón para eliminar producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('boton-eliminar');
        botonEliminar.addEventListener('click', function() {
            eliminarDelCarrito(nuevoProducto, precio);
        });
    
        nuevoProducto.appendChild(botonEliminar);
    
        // Agregar el producto a la lista
        listaProductos.appendChild(nuevoProducto);
    
        // Actualizar el total
        const totalElemento = document.getElementById('total');
        let total = parseFloat(totalElemento.textContent.replace('$', ''));
        total += precio;
        totalElemento.textContent = `$${total.toFixed(2)}`;
    
        // Mostrar el carrito (si no está visible)
        const carrito = document.getElementById('carrito');
        carrito.classList.add('carrito-visible');
    }
    });

    function eliminarDelCarrito(producto, precio) {
        const listaProductos = document.getElementById('lista-productos');
        listaProductos.removeChild(producto);
    
        // Actualizar el total
        const totalElemento = document.getElementById('total');
        let total = parseFloat(totalElemento.textContent.replace('$', ''));
        total -= precio;
        totalElemento.textContent = `$${total.toFixed(2)}`;
    
        // Si no quedan productos en el carrito, ocultarlo
        if (listaProductos.children.length === 0) {
            const carrito = document.getElementById('carrito');
            carrito.classList.remove('carrito-visible');
        }
    }

    botonCancelar.addEventListener('click', function(e) {
        e.preventDefault();
        vaciarCarrito();
    });
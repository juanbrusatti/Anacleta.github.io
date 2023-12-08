// Array de productos (simulado, puedes obtenerlo de una base de datos o una API)
const productos = [
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 1', categoria: 'remeras', precio: '$20.00', imagen: 'remera1.jpg' },
    { nombre: 'Remera Sublimada 2', categoria: 'remeras', precio: '$25.00', imagen: 'remera2.jpg' },
    { nombre: 'Buzo Sublimado 1', categoria: 'buzos', precio: '$35.00', imagen: 'buzo1.jpg' },
    { nombre: 'Gorra Sublimada 1', categoria: 'gorras', precio: '$15.00', imagen: 'gorra1.jpg' },
    { nombre: 'Taza Sublimada 1', categoria: 'tazas', precio: '$10.00', imagen: 'taza1.jpg' },
    // Agrega más productos según sea necesario
];

document.addEventListener('DOMContentLoaded', function () {
    // Al cargar la página, muestra todos los productos
    mostrarProductos(productos);
});

function filtrarProductos() {
    var categoriaSeleccionada = document.getElementById('categoria').value;

    // Filtra los productos según la categoría seleccionada
    var productosFiltrados = productos.filter(function (producto) {
        return categoriaSeleccionada === 'todos' || producto.categoria === categoriaSeleccionada;
    });

    // Muestra los productos filtrados
    mostrarProductos(productosFiltrados);
}





function mostrarProductos(productosMostrar) {
    var contenedorProductos = document.getElementById('productos');

    contenedorProductos.innerHTML = '';

    productosMostrar.forEach(function (producto) {
        var productoDiv = document.createElement('div');
        productoDiv.className = 'producto';

        var imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;

        var nombreProducto = document.createElement('p');
        nombreProducto.textContent = producto.nombre;

        var precioProducto = document.createElement('p');
        precioProducto.textContent = 'Precio: ' + producto.precio;

        var personalizarBtn = document.createElement('button');
        personalizarBtn.textContent = 'Personalizar';
        personalizarBtn.addEventListener('click', function () {
            // Al hacer clic en el botón, abrir enlace de WhatsApp
            var mensaje = encodeURIComponent('¡Hola! Estoy interesado en personalizar el producto: ' + producto.nombre);
            var whatsappLink = 'https://wa.me/3584178955?text=' + mensaje; // Reemplaza 123456789 con el número de WhatsApp real
            window.open(whatsappLink, '_blank');
        });

        productoDiv.appendChild(imagen);
        productoDiv.appendChild(nombreProducto);
        productoDiv.appendChild(precioProducto);
        productoDiv.appendChild(personalizarBtn);

        contenedorProductos.appendChild(productoDiv);
    });
}

function mostrarSeccion(idSeccion) {
    var secciones = document.getElementsByClassName('seccion');

    for (var i = 0; i < secciones.length; i++) {
        secciones[i].style.display = 'none';
    }

    document.getElementById(idSeccion).style.display = 'block';

    if (idSeccion === 'ventas') {
        // Al cambiar a la sección de ventas, muestra todos los productos por defecto
        mostrarProductos(productos);
    }
}

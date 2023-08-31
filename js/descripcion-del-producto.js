import { data } from './data.js';

function mostrarDescripcion(productID) {
    const product = data.find(item => item.ID === productID);

    const descripcionContainer = document.querySelector(".descripcion_del_producto");
    descripcionContainer.innerHTML = `
        <div class="descripcion-container">
            <div class="product-image">
                <img src="${product.img}" alt="Imagen del producto">
            </div>
            <div class="product-info">
                <h2>${product.titulo}</h2>
                <p class="product-description">${product.descripcion}</p>
                <p class="product-price">Precio: ${product.precio}</p>
            </div>
        </div>
    `;
}
  
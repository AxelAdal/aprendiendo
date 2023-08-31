import { data } from "./data.js";

const main_Dom = document.querySelector("#main");
const caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");

function caja_descripcion(product) {
    const hazloTuMismoButton = product.estado === "Disponible" ?
        '<button class="hazlo-tu-mismo">Hágalo usted mismo</button>' : '';

    return `
    <div class="Descript">
    <section class="img">
    <img class="imagen" src="${product.img}" alt="${product.titulo}">
          </section>
      
          <section class="middle">
            <h1 class="titulo_descri">${product.titulo}</h1>
            <h2 class="descripciones">${product.descripcion}</h2>
            <div class="precios">
        <div class="caja_btn">
              <button class="btn"><p>${product.Precio}</p></button>
              <button class="btn"><p>COMPRAR</p></button>

  <button class="cta">
    <span>Hacerlo solo</span>
    <svg viewBox="0 0 13 10" height="10px" width="15px">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </button>

        </div>
          </section>

</div>
    `;
}

function ver_descripcion(event) {
    const productID = event.currentTarget.getAttribute("data-id");
    const selectedProduct = data.find(item => item.ID === parseInt(productID));

    caja_descripcion_DOM.innerHTML = caja_descripcion(selectedProduct);

    main_Dom.style.display = "none"; // Ocultar el contenido principal al mostrar la descripción
    caja_descripcion_DOM.style.display = "block"; // Mostrar la caja de descripción

    // Si el producto no está disponible, ocultar el botón "Hazlo tú mismo"
    if (selectedProduct.estado !== "Disponible") {
        const hazloTuMismoButton = caja_descripcion_DOM.querySelector(".hazlo-tu-mismo");
        if (hazloTuMismoButton) {
            hazloTuMismoButton.style.display = "none";
        }
    }
}

data.forEach(cada_item => {
    const item = document.createElement("div");
    item.className = "item";
    item.setAttribute("data-id", cada_item.ID);
    item.innerHTML = `
    <div class="caja_img">
        <img src="${cada_item.img}" alt="${cada_item.titulo}">
    </div>
    <h2>${cada_item.titulo}</h2>
    <p>${cada_item.descripcion}</p> 
    <span>${cada_item.precio}</span>
    `;

    item.addEventListener("click", ver_descripcion);
    main_Dom.appendChild(item);
});
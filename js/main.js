import { data } from "./data.js";
import { caja_descripcion } from "./descripcion-del-producto.js";


data.forEach((cada_item) =>{

    let main_dom = document.querySelector("#main")

    let item = document.createElement("div")
    item.className = "item"
    
    item.innerHTML = 
    `
    <div class="caja_img">
        <img src="${cada_item.img}">
    </div>
        <h2>${cada_item.titulo}</h2>
        <p>${cada_item.descripcion}</p>
        <span>Q100.00</span>
    `;
    
    main_dom.appendChild(item)    

});

//evento ver detalles del producto

let productos = document.querySelectorAll(".item")


function mostrarDescripcion(event) {
    
    let caja_descripcion_DOM = document.querySelector(".descripcion_del_producto");
  
    let main = Array.from(productos).indexOf(event.currentTarget);
  
    let productDescriptionHTML = caja_descripcion(data, main);
    caja_descripcion_DOM.innerHTML = productDescriptionHTML;
  }
  
  productos.forEach((cada_elemento) => {
    cada_elemento.addEventListener("click", mostrarDescripcion);
  })
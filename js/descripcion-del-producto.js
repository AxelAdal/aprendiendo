import { data } from "./data.js";

export let caja_descripcion = 

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
;
caja_descripcion()
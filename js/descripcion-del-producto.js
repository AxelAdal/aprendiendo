export function caja_descripcion(data, main) {
    
    return `
      <div class="Descript">
  
        
          <section class="img">
            <img class="imagen" src="${data[main].img}" alt="${data[main].titulo}">
          </section>
      
          <section class="middle">
            <h1 class="titulo_principal">${data[main].titulo}</h1>
            <h2 class="descripciones">${data[main].descripcion}</h2>
            <div class="precios">
              <button class="precio-valor">${data[main].Precio}</button>
              <button class="Btn"></button>
                <div class="container">
                    <div class="btn"><a href="#">Hacerlo solo</a></div>
                </div>
            </div>
          </section>

        

      </div>
    `;
  }
  
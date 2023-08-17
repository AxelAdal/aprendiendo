export function caja_descripcion(data, main) {
    
    return `
      <div class="Descript">
  
        
          <section class="img">
            <img class="imagen" src="${data[main].img}" alt="${data[main].titulo}">
          </section>
      
          <section class="middle">
            <h1 class="titulo_descri">${data[main].titulo}</h1>
            <h2 class="descripciones">${data[main].descripcion}</h2>
            <div class="precios">
        <div class="caja_btn">
              <button class="btn"><p>${data[main].Precio}</p></button>
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
  
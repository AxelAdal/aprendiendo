export let data = [

    {
        titulo: "Cambio de pasta termina",
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/pasta-termica-procesador-2588109.jpg?tf=3840x",
        descripcion: "Como cambiar la pasta termina del procesador",
        Precio:"Q100.00",
        Herramientas:[
            "Destornillador de estrella",
            "Paño de micro fibra",
            "Pasta termica"
        ]
    },
    {
        "titulo": "Servicio de Limpieza Profunda de Computadoras",
        "img": "https://www.profesionalreview.com/wp-content/uploads/2019/12/service-428541_1280.jpg",
        "descripcion": "Ofrecemos un servicio especializado de limpieza profunda de computadoras para mejorar su rendimiento y prolongar su vida útil.",
        Precio:"Q150.00",
        "Herramientas": [
            "Aire comprimido",
            "Brocha antiestática",
            "Paño de microfibra",
            "Solución de limpieza no abrasiva",
            "Destornillador de punta plana",
            "Pulsera antiestática"
        ]
    },
    {
        "titulo": "Servicio de Reparación de Celulares",
        "img": "https://previews.123rf.com/images/milkos/milkos1705/milkos170501938/78697326-reparaci%C3%B3n-de-tel%C3%A9fonos-celulares-en-el-centro-de-servicio-disipaci%C3%B3n-de-tel%C3%A9fonos-inteligentes-y.jpg",
        "descripcion": "Ofrecemos servicio profesional de reparación de celulares para una amplia variedad de marcas y modelos.",
        Precio:"Q200.00",
        "Herramientas": [
            "Kit de herramientas para reparación de dispositivos móviles",
            "Piezas de repuesto originales",
            "Lupa de aumento",
            "Estación de soldadura",
            "Equipo de diagnóstico"
        ]
    },
    {
        "titulo": "Cómo Limpiar el CPU de tu Computadora",
        "img": "https://www.ngeeks.com/wp-content/uploads/2019/03/pasos-limpiar-cpu.jpg",
        "descripcion": "Sigue estos pasos para realizar una limpieza segura y efectiva del CPU de tu computadora, lo cual mejorará su rendimiento y evitará problemas de sobrecalentamiento.",
        Precio:"Q50.00",
        "Herramientas": [
            "Destornillador",
            "Aire comprimido",
            "Brocha antiestática",
            "Paño de microfibra",
            "Alcohol isopropílico",
            "Pulsera antiestática"
        ]
    },
    {
        "titulo": "Cómo Cambiar la Memoria RAM de tu PC",
        "img": "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2017/09/memoria-ram-pc.jpg?tf=3840x",
        "descripcion": "Aprende a reemplazar la memoria RAM de tu computadora para aumentar su rendimiento y capacidad de multitarea.",
        Precio:"Q125.00",
        "Herramientas": [
            "Destornillador",
            "Pulsera antiestática"
        ]
    },
    {
        "titulo": "Cómo Cambiar las Teclas de tu Teclado",
        "img": "https://i.ytimg.com/vi/Moeji7WeKQI/maxresdefault.jpg",
        "descripcion": "Aprende a reemplazar las teclas de tu teclado para solucionar problemas de teclas pegadas o desgastadas, y mejorar la apariencia estética.",
        Precio:"Q90.00",
        "Herramientas": [
            "Destornillador",
            "Pinzas"
        ]
    },
    {
        "titulo": "Actualización a Teclado Mecánico",
        "img": "https://d22k5h68hofcrd.cloudfront.net/magefan_blog/Teclados_mec_nicos_todo_lo_que_necesit_s_saber_1.jpg",
        "descripcion": "Mejora tu experiencia de escritura con la actualización a un teclado mecánico. Nuestro servicio incluye la instalación de un teclado mecánico de alta calidad para una mayor durabilidad y una sensación de pulsación táctil más satisfactoria.",
        Precio:"Q225.00",
        "Herramientas": [
            "Destornillador",
            "Pinzas",
            "Kit de Extracción de Teclas"
        ]
    },
    {
        "titulo": "Personalización de Teclas con Diseños Personalizados",
        "img": "https://i.ytimg.com/vi/kaV3_yLFEuU/maxresdefault.jpg",
        "descripcion": "Haz que tu teclado sea único con nuestro servicio de personalización. Ofrecemos diseños personalizados, colores vibrantes y materiales exclusivos para crear un teclado que refleje tu estilo y personalidad.",
        Precio:"Q130.00",
        "Herramientas": [
            "Kit de Extracción de Teclas",
            "Pintura Especializada"
        ]
    },
    {
        "titulo": "Instalación de Teclado Retroiluminado",
        "img": "https://d598hd2wips7r.cloudfront.net/magefan_blog/por_que_necesito_una_laptop_con_teclado_retroiluminado.jpg",
        "descripcion": "Mejora la visibilidad y el aspecto de tu teclado con nuestro servicio de instalación de teclado retroiluminado. Disfruta de la comodidad de escribir en entornos con poca luz y dale un toque moderno a tu equipo.",
        Precio:"Q300.00",
        "Herramientas": [
            "Destornillador",
            "Pinzas",
            "Iluminación LED para Teclado"
        ]
    }       
]

data = data.map((obj, index) => {
    return {
      ...obj,
      ID: index + 1,
    };
  });
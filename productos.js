/*
  CATÁLOGO — edita este archivo para cambiar precios, textos o estado.

  estado: "disponible" | "reservado" | "vendido"
  precio: número en pesos colombianos, sin puntos (ej. 850000)
  fotos: cantidad de fotos en la carpeta img/<id>/ (01.jpg, 02.jpg, ...)
*/
window.CONFIG = {
  whatsapp: "573153422371",
  ubicacion: "Cartago, Valle del Cauca",
  entrega: "Entregas del 5 al 10 de noviembre",
  pagos: ["Efectivo en euros (€)", "Efectivo en pesos colombianos", "Llave Bre-B"],
  condicionesPago: "Se paga el total al momento de recoger el artículo. El transporte corre por cuenta del comprador.",
  sitio: "https://arieljlj.github.io/venta_por_mudanza/"
};

window.PRODUCTOS = [
  {
    id: "nevera-samsung",
    titulo: "Nevera Samsung No Frost con dispensador de agua",
    categoria: "Electrodomésticos",
    precio: 2150000,
    precioNuevo: 2850000,
    estado: "disponible",
    condicion: "Usado - Como nuevo",
    fotos: 7,
    destacado: true,
    descripcion:
      "Nevera Samsung de congelador inferior, acabado negro inox, tecnología No Frost (no forma escarcha) y dispensador de agua en la puerta.\n\n" +
      "• Congelador inferior con cajones\n" +
      "• Bandejas de vidrio y amplios compartimientos en la puerta\n" +
      "• Funcionando perfectamente, se entrega limpia y vacía\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "lavadora-lg-13kg",
    titulo: "Lavadora LG 13 kg Smart Inverter TurboDrum",
    categoria: "Electrodomésticos",
    precio: 850000,
    precioNuevo: 1400000,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 5,
    destacado: true,
    descripcion:
      "Lavadora LG de carga superior, 13 kg (29 lb), motor Smart Inverter con 36 % de ahorro de energía y tecnología TurboDrum.\n\n" +
      "• Tapa de vidrio templado\n" +
      "• Varios programas de lavado, nivel de agua y temperatura\n" +
      "• Funcionando perfectamente\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "aire-acondicionado-kalley",
    titulo: "Aire acondicionado Kalley Inverter 12.000 BTU (K-A12D)",
    categoria: "Electrodomésticos",
    precio: 900000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Como nuevo",
    fotos: 2,
    destacado: false,
    descripcion:
      "Aire acondicionado Kalley modelo K-A12D, tipo split, 12.000 BTU, tecnología Inverter (ahorro de energía), 115 V. Incluye unidad interior y unidad exterior (condensadora) con sus soportes.\n\n" +
      "• Adecuado para habitaciones de aprox. 15 a 20 m²\n" +
      "• Poco uso, en excelente estado\n" +
      "• El desmonte y la instalación corren por cuenta del comprador\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "microondas-whirlpool",
    titulo: "Horno microondas Whirlpool plateado",
    categoria: "Electrodomésticos",
    precio: 185000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Buen estado",
    fotos: 2,
    destacado: false,
    descripcion:
      "Horno microondas Whirlpool color plateado con panel digital, menú de cocción automática (arroz, vegetales, pasta, palomitas, pescado) y descongelado rápido.\n\n" +
      "• Plato giratorio de vidrio\n" +
      "• Funcionando perfectamente\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "juego-de-sala",
    titulo: "Juego de sala: sofá + 2 poltronas + mesas de centro",
    categoria: "Sala y comedor",
    precio: 1800000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 9,
    destacado: true,
    descripcion:
      "Juego de sala moderno en tela tipo terciopelo con diseño de capitoné vertical.\n\n" +
      "• Sofá de 2 a 3 puestos color gris\n" +
      "• 2 poltronas color perla con patas de madera\n" +
      "• Juego de 2 mesas de centro nido (tapa blanca y base metálica)\n" +
      "• Muy buen estado\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "comedor-4-puestos",
    titulo: "Comedor de 4 puestos con vidrio y sillas tapizadas",
    categoria: "Sala y comedor",
    precio: 1100000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Comedor cuadrado de 4 puestos en color blanco con cubierta de vidrio.\n\n" +
      "• 4 sillas tapizadas color perla, espaldar redondeado y patas de madera\n" +
      "• Ideal para apartamento\n" +
      "• Muy buen estado\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "vitrina-blanca",
    titulo: "Vitrina blanca de madera con vidrio y cajones",
    categoria: "Sala y comedor",
    precio: 650000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 5,
    destacado: false,
    descripcion:
      "Vitrina vertical en madera lacada blanca, vidrio en la puerta y los costados, 3 entrepaños de vidrio y 2 cajones inferiores.\n\n" +
      "• Ideal para cristalería, vajilla o decoración\n" +
      "• Se entrega vacía (no incluye la cristalería de las fotos)\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "juego-de-alcoba-negro",
    titulo: "Juego de alcoba 1,60 m cabecero NEGRO: cama + colchón + 2 mesas de noche",
    categoria: "Alcoba",
    precio: 1500000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 5,
    destacado: true,
    descripcion:
      "Juego de alcoba con cabecero color NEGRO.\n\n" +
      "• Cama de 1,60 m (queen)\n" +
      "• Base cama con cabecero capitoné en cuerina negra con detalles tipo cristal\n" +
      "• Incluye el colchón\n" +
      "• 2 mesas de noche negras lacadas con 2 cajones y manijas de cristal\n" +
      "• Muy buen estado\n\n" +
      "Pregunta por las lámparas y la ropa de cama.\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "tocador-espejo-luces",
    titulo: "Tocador negro con espejo de luces tipo camerino",
    categoria: "Alcoba",
    precio: 900000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 1,
    destacado: false,
    descripcion:
      "Tocador tipo camerino en color negro brillante con espejo grande enmarcado en bombillos.\n\n" +
      "• Amplia superficie de trabajo\n" +
      "• Cajoneras a ambos lados\n" +
      "• Ideal para maquillaje o peinado\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "tv-lg-55-4k",
    titulo: "Televisor LG 55 pulgadas 4K UHD Smart TV",
    categoria: "Tecnología",
    precio: 1100000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 3,
    destacado: true,
    descripcion:
      "Smart TV LG de 55 pulgadas, resolución 4K UHD, modelo 55UN7100PDA (fabricado en 2021), con sistema webOS para apps como Netflix y YouTube.\n" +
      "\n" +
      "• Imagen 4K con HDR\n" +
      "• Control remoto incluido\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "sofacama",
    titulo: "Sofá cama gris oscuro con colchoneta extraíble",
    categoria: "Sala y comedor",
    precio: 950000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 7,
    destacado: true,
    descripcion:
      "Sofá cama en tela color gris oscuro, con colchoneta inferior que se extrae y se convierte en cama.\n" +
      "\n" +
      "• De día es sofá, de noche cama para visitas\n" +
      "• Brazos acolchados\n" +
      "• Cojines decorativos incluidos\n" +
      "• Muy buen estado\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "cama-160-cabecero-gris",
    titulo: "Cama 1,60 m con cabecero capitoné GRIS + colchón",
    categoria: "Alcoba",
    precio: 900000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 2,
    destacado: false,
    descripcion:
      "Base cama de 1,60 m (queen) con cabecero y laterales capitoné en cuerina color GRIS.\n" +
      "\n" +
      "• Incluye el colchón\n" +
      "• Diseño elegante y moderno\n" +
      "• Muy buen estado\n" +
      "• No incluye los peluches ni la ropa de cama de las fotos\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "impresora-epson-l5590",
    titulo: "Impresora multifuncional Epson EcoTank L5590",
    categoria: "Tecnología",
    precio: 800000,
    precioNuevo: 1249900,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 4,
    destacado: false,
    descripcion:
      "Impresora multifuncional Epson EcoTank L5590 con tanques de tinta recargables (sistema continuo original de fábrica).\n" +
      "\n" +
      "• Imprime, copia, escanea y envía fax\n" +
      "• Alimentador automático de documentos (ADF)\n" +
      "• Conexión Wi-Fi, USB y red (LAN)\n" +
      "• Muy bajo costo por página\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "monitor-kalley-24",
    titulo: "Monitor Kalley 24 pulgadas",
    categoria: "Tecnología",
    precio: 280000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Como nuevo",
    fotos: 5,
    destacado: false,
    descripcion:
      "Monitor Kalley de 24 pulgadas, modelo K-M24FP2, panel de bordes delgados.\n" +
      "\n" +
      "• Ideal para trabajo, estudio o como segunda pantalla\n" +
      "• Incluye base y adaptador de corriente\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "barra-sonido-lg",
    titulo: "Barra de sonido LG SK1D con Bluetooth",
    categoria: "Tecnología",
    precio: 200000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 6,
    destacado: false,
    descripcion:
      "Barra de sonido LG modelo SK1D con Dolby Audio y DTS Digital Surround.\n" +
      "\n" +
      "• Conexión Bluetooth, óptica y USB\n" +
      "• Se conecta fácil al televisor\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "tv-hyundai-32-curvo",
    titulo: "Televisor Hyundai 32 pulgadas curvo",
    categoria: "Tecnología",
    precio: 380000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Buen estado",
    fotos: 4,
    destacado: false,
    descripcion:
      "Televisor Hyundai de 32 pulgadas, pantalla curva LED, modelo HYLED3213INTC.\n" +
      "\n" +
      "• Entradas HDMI y USB\n" +
      "• Ideal para habitación o cocina\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "escritorio-marron-silla",
    titulo: "Escritorio madera con pata de vidrio + silla ergonómica",
    categoria: "Oficina",
    precio: 550000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 2,
    destacado: false,
    descripcion:
      "Escritorio con superficie en madera color marrón y pata lateral de vidrio templado, más silla de oficina ergonómica.\n" +
      "\n" +
      "• Silla giratoria con espaldar en malla, brazos abatibles y ruedas\n" +
      "• Ideal para teletrabajo o estudio\n" +
      "• Muy buen estado\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "escritorio-blanco-silla",
    titulo: "Escritorio blanco con vidrio y cajones + silla giratoria + organizador",
    categoria: "Oficina",
    precio: 450000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Escritorio color blanco con cubierta y pata lateral de vidrio templado, 2 cajones, más silla giratoria blanca con brazos y base cromada.\n" +
      "\n" +
      "• Incluye el organizador blanco de 2 cubos\n" +
      "• No incluye los libros ni la porcelana de las fotos\n" +
      "• Ideal para cuarto de estudio o habitación juvenil\n" +
      "• Muy buen estado\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "mueble-3-cajones",
    titulo: "Cómoda blanca de 3 cajones",
    categoria: "Alcoba",
    precio: 280000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Buen estado",
    fotos: 2,
    destacado: false,
    descripcion:
      "Cómoda o cajonero color blanco con 3 cajones amplios y manijas metálicas.\n" +
      "\n" +
      "• Ideal para ropa, juguetes o como mueble auxiliar\n" +
      "• Buen estado\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "cuadro-abstracto",
    titulo: "Cuadro grande pintura abstracta con marco negro",
    categoria: "Decoración",
    precio: 600000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 2,
    destacado: false,
    descripcion:
      "Cuadro de gran formato con pintura abstracta en tonos naranja, rojo y azul, con marco negro.\n" +
      "\n" +
      "• Pieza protagonista para sala, comedor u oficina\n" +
      "• Muy buen estado\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "lampara-de-pie",
    titulo: "Lámpara de pie para lectura negra",
    categoria: "Decoración",
    precio: 120000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Lámpara de pie color negro, ideal para lectura, con brazo flexible y pantalla metálica orientable.\n" +
      "\n" +
      "• Base redonda estable\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "ventilador-samurai",
    titulo: "Ventilador de pedestal Samurai",
    categoria: "Electrodomésticos",
    precio: 90000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Buen estado",
    fotos: 2,
    destacado: false,
    descripcion:
      "Ventilador de pie marca Samurai, color negro, con altura ajustable y oscilación.\n" +
      "\n" +
      "• Varias velocidades\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  }
];

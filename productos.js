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
  sitio: "https://arieljlj.github.io/venta_por_mudanza/"
};

window.PRODUCTOS = [
  {
    id: "nevera-samsung",
    titulo: "Nevera Samsung No Frost con dispensador de agua",
    categoria: "Electrodomésticos",
    precio: 1650000,
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
    titulo: "Aire acondicionado Kalley Inverter tipo split",
    categoria: "Electrodomésticos",
    precio: 900000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Como nuevo",
    fotos: 2,
    destacado: false,
    descripcion:
      "Aire acondicionado Kalley tipo split con tecnología Inverter (ahorro de energía). Incluye unidad interior y unidad exterior (condensadora) con sus soportes.\n\n" +
      "• Poco uso, en excelente estado\n" +
      "• El desmonte y la instalación corren por cuenta del comprador\n\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "microondas-whirlpool",
    titulo: "Horno microondas Whirlpool plateado",
    categoria: "Electrodomésticos",
    precio: 200000,
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
    id: "juego-de-alcoba",
    titulo: "Juego de alcoba: cama con cabecero capitoné + 2 mesas de noche",
    categoria: "Alcoba",
    precio: 1200000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 5,
    destacado: true,
    descripcion:
      "Juego de alcoba en color negro brillante.\n\n" +
      "• Base cama con cabecero capitoné en cuerina negra con detalles tipo cristal\n" +
      "• 2 mesas de noche negras lacadas con 2 cajones y manijas de cristal\n" +
      "• Muy buen estado\n\n" +
      "Pregunta por el colchón, las lámparas y la ropa de cama.\n" +
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
  }
];

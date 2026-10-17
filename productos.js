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
    precio: 1100000,
    precioNuevo: 1400000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 5,
    destacado: true,
    descripcion:
      "Lavadora LG de carga superior, 13 kg (29 lb), con motor Smart Inverter (36 % de ahorro de energía) y tecnología TurboDrum.\n" +
      "\n" +
      "• Tapa de vidrio templado con cierre suave (Soft Closing)\n" +
      "• Panel digital LoDecibel: programas de lavado, nivel de agua y temperatura\n" +
      "• Motor Inverter con garantía de 10 años de fábrica (adhesivo original)\n" +
      "• Cuerpo blanco con tapa en contraste gris oscuro\n" +
      "• Excelente estado estético, limpia y con sus etiquetas originales\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "aire-acondicionado-kalley",
    titulo: "Aire acondicionado Kalley Inverter 12.000 BTU mini split (K-A12D)",
    categoria: "Electrodomésticos",
    precio: 820000,
    precioNuevo: 1250000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Aire acondicionado mini split de pared Kalley, modelo K-A12D, tecnología Inverter, 115 V.\n" +
      "\n" +
      "• Capacidad de enfriamiento: 3.185 W (12.000 BTU/h), ideal para espacios de 16 a 20 m²\n" +
      "• Inverter: regula la temperatura de forma eficiente y consume menos que un equipo convencional\n" +
      "• Unidad interior (evaporador) y unidad exterior (condensador) limpias y en excelente estado\n" +
      "• Incluye control remoto original y la base metálica de la condensadora\n" +
      "• Kit de tubería de cobre: se entrega tal como está. El técnico que haga la nueva instalación define si se puede reutilizar; si no, el kit nuevo corre por cuenta del comprador\n" +
      "\n" +
      "El desmonte corre por cuenta del vendedor: se entrega desmontado. La instalación corre por cuenta del comprador.\n" +
      "\n" +
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
    titulo: "Juego de sala moderno acanalado en terciopelo: sofá + 2 poltronas + mesas nido",
    categoria: "Sala y comedor",
    precio: 2150000,
    precioNuevo: 3200000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 9,
    destacado: true,
    descripcion:
      "Juego de sala estilo Glam Moderno, con líneas curvas y tapizado acanalado vertical (channel tufting).\n" +
      "\n" +
      "• Sofá principal de 2 a 3 puestos en terciopelo color gris ratón, con espaldar y brazos envolventes acanalados\n" +
      "• 2 poltronas tipo concha con espaldar curvo acanalado, en terciopelo color crema/marfil y patas cónicas de madera estilo nórdico\n" +
      "• Juego de 2 mesas de centro nido circulares, cubierta blanca y base metálica\n" +
      "• Excelente estado: sin desgaste visible ni manchas en las telas\n" +
      "\n" +
      "Precio por el combo completo. También se vende por separado: sofá $950.000, par de poltronas $650.000, mesas nido $200.000.\n" +
      "\n" +
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
    titulo: "Juego de alcoba Glam 1,60 m cabecero NEGRO capitoné: cama + colchón + 2 mesas de noche",
    categoria: "Alcoba",
    precio: 1350000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Buen estado (detalle en cabecero)",
    fotos: 5,
    destacado: true,
    descripcion:
      "Juego de alcoba estilo Glam / Neoclásico contemporáneo en color NEGRO.\n" +
      "\n" +
      "• Cama queen de 1,60 m: cabecero tapizado en cuerotex negro, capitoné en rombos con botones tipo diamante/cristal, y base cama en el mismo material\n" +
      "• Incluye el colchón\n" +
      "• 2 mesas de noche lacadas en negro brillante, con 2 cajones cada una y perillas faceteadas tipo cristal que hacen juego con el cabecero\n" +
      "• Base cama y mesas de noche en excelente estado\n" +
      "\n" +
      "Detalle: el cabecero tiene un pequeño rasgado en el tapizado, reparable o fácil de disimular con las almohadas. Por eso se deja a un precio muy accesible.\n" +
      "\n" +
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
    titulo: "Televisor LG 55 pulgadas 4K UHD Smart TV (55UN7100PDA)",
    categoria: "Tecnología",
    precio: 1300000,
    precioNuevo: 1650000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 4,
    video: true,
    destacado: true,
    descripcion:
      "Smart TV LG de 55 pulgadas (139 cm), modelo 55UN7100PDA, fabricado en febrero de 2021.\n" +
      "\n" +
      "• Pantalla 4K UHD (3840 x 2160) con HDR10 Pro y HLG\n" +
      "• Procesador Quad Core 4K y sonido Ultra Surround\n" +
      "• webOS Smart TV con ThinQ AI: Netflix, Disney+, YouTube, Prime Video, Max y más\n" +
      "• Pantalla en perfecto estado: mira el video con el TV encendido\n" +
      "• Incluye control remoto estándar y soporte de pared (no incluye las patas de mesa originales)\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "sofacama",
    titulo: "Sofá cama desplegable gris oscuro (2 a 3 puestos) + 4 cojines",
    categoria: "Sala y comedor",
    precio: 620000,
    precioNuevo: 1400000,
    estado: "disponible",
    condicion: "Usado - Detalle en la tela (precio de remate)",
    fotos: 8,
    destacado: true,
    descripcion:
      "Sofá cama desplegable de sistema nido/carro frontal, tapizado en tela tipo jacquard color gris oscuro.\n" +
      "\n" +
      "• Mecanismo 100 % funcional: la base se desliza hacia adelante sobre ruedas y se convierte en cama semidoble/doble\n" +
      "• Apoyabrazos acolchados con soporte metálico cromado\n" +
      "• Incluye los 4 cojines decorativos en tonos grises\n" +
      "• Ideal para espacios pequeños o para recibir visitas\n" +
      "\n" +
      "Detalle: la tela del borde superior trasero del espaldar tiene rasgados por roce con la pared (ver última foto). Ideal para ubicar pegado a la pared o usar con una manta decorativa. Por eso se deja a precio de remate.\n" +
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
    precio: 135000,
    precioNuevo: 220000,
    estado: "disponible",
    condicion: "Usado - Aceptable (detalles estéticos)",
    fotos: 2,
    destacado: false,
    descripcion:
      "Cómoda o cajonero color blanco con 3 cajones amplios y manijas metálicas.\n" +
      "\n" +
      "• Ideal para ropa, juguetes o como mueble auxiliar\n" +
      "• Estructura y cajones en buen estado de funcionamiento\n" +
      "• Detalle estético: desgaste normal por uso en el borde superior, donde el recubrimiento blanco está levantado o despintado ligeramente (precio ajustado por esto)\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "cuadro-abstracto",
    titulo: "Cuadro de autor: \"Vastedad de tulipanes\" – Daniel Mauricio Córdoba (140 x 140 cm)",
    categoria: "Decoración",
    precio: 2800000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 4,
    destacado: true,
    descripcion:
      "OBRA ORIGINAL DE AUTOR, no es reproducción ni impresión. Pintura firmada por el artista Daniel Mauricio Córdoba (2007), con marco negro.\n" +
      "\n" +
      "• Serie: Línea y Matiz\n" +
      "• Título: Vastedad de tulipanes\n" +
      "• Técnica: mixta sobre lona\n" +
      "• Dimensiones: 140 x 140 cm\n" +
      "• Código de producción: 0307 (datos del autor al respaldo de la obra)\n" +
      "\n" +
      "Obra abstracta de gran formato en tonos naranja, rojo y azul. Pieza protagonista para sala, comedor, oficina o colección de arte.\n" +
      "\n" +
      "Precio especial por mudanza, por debajo de su valor comercial como obra de autor. Las fotos incluyen la firma en el frente y la ficha técnica de la obra al respaldo.\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "lampara-de-pie",
    titulo: "Lámpara de pie para lectura negra",
    categoria: "Decoración",
    precio: 95000,
    precioNuevo: 130000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Lámpara de pie color negro, ideal para lectura, con brazo flexible y pantalla metálica orientable.\n" +
      "\n" +
      "• Base redonda estable\n" +
      "• Diseño moderno y práctico, en excelente estado estético\n" +
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
  },
  {
    id: "cama-120-cabecero-negro",
    titulo: "Cama 1,20 m cabecero capitoné NEGRO + colchón + mesa de noche",
    categoria: "Alcoba",
    precio: 700000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Cama semidoble de 1,20 m con cabecero y piecero capitoné en tela tipo terciopelo color NEGRO, con marco de espejo en el cabecero.\n" +
      "\n" +
      "• Incluye el colchón\n" +
      "• Incluye la mesa de noche negra que aparece en las fotos\n" +
      "• Diseño elegante, ideal para habitación juvenil o de huéspedes\n" +
      "• Muy buen estado\n" +
      "• No incluye los cojines ni la ropa de cama de las fotos\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "air-fryer-haceb",
    titulo: "Freidora de aire (Air Fryer) Haceb",
    categoria: "Cocina",
    precio: 180000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Freidora de aire Haceb color negro con acabado cromado, perillas de tiempo y temperatura.\n" +
      "\n" +
      "• Cocina sin aceite: papas, pollo, empanadas y más\n" +
      "• Canasta antiadherente extraíble\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "olla-imusa-speedy-cook",
    titulo: "Olla multifuncional eléctrica Imusa Speedy Cook 5 L",
    categoria: "Cocina",
    precio: 250000,
    precioNuevo: 429900,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 6,
    destacado: false,
    descripcion:
      "Olla eléctrica multifuncional a presión Imusa Speedy Cook, 5 litros, 900 W (modelo CE222D56).\n" +
      "\n" +
      "• Programas: arroz/risotto, granos, pollo, carne, vapor, saltear, estofado/sopa, cocción lenta, hornear y yogurt\n" +
      "• Función mantener caliente y programación de tiempo\n" +
      "• Olla interna antiadherente\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "cafetera-capsulas-eva",
    titulo: "Cafetera de cápsulas EVA (Cápsulas Express) con caja",
    categoria: "Cocina",
    precio: 150000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 6,
    destacado: false,
    descripcion:
      "Cafetera de cápsulas EVA de Caffitaly, del sistema Cápsulas Express de Nutresa.\n" +
      "\n" +
      "• Prepara café, cappuccino, chocolate y más con cápsulas\n" +
      "• 3 botones de preparación\n" +
      "• Se entrega con su caja original\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "chocotera-haceb",
    titulo: "Chocotera multibebida Haceb Corona Inox",
    categoria: "Cocina",
    precio: 130000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 4,
    destacado: false,
    descripcion:
      "Chocotera eléctrica multibebida Haceb Corona Inox, modelo F280R, jarra en acero inoxidable de 600 ml, 600 W.\n" +
      "\n" +
      "• Prepara chocolate, café con leche y espuma de leche\n" +
      "• Jarra removible con tapa\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "licuadora-oster",
    titulo: "Licuadora Oster Osterizer clásica con vaso de vidrio",
    categoria: "Cocina",
    precio: 120000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 2,
    destacado: false,
    descripcion:
      "Licuadora Oster Osterizer clásica, base cromada, 3 velocidades, 600 W, con vaso de vidrio.\n" +
      "\n" +
      "• Motor potente y duradero\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "tv-samsung-40",
    titulo: "Samsung Smart TV 40 pulgadas Full HD (UN40J5200AK)",
    categoria: "Tecnología",
    precio: 700000,
    precioNuevo: 950000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 3,
    video: true,
    destacado: false,
    descripcion:
      "Samsung Smart TV de 40 pulgadas (101 cm) Full HD, modelo UN40J5200AK, hecho en México.\n" +
      "\n" +
      "• Resolución Full HD 1080p (1920 x 1080)\n" +
      "• Smart TV con Smart Hub: acceso a aplicaciones de streaming\n" +
      "• Wi-Fi integrado y puerto Ethernet\n" +
      "• 2 puertos HDMI, 1 USB, entrada de componente/AV y salida de audio óptica\n" +
      "• Perfecto estado funcional y estético: mira el video con el TV encendido\n" +
      "• Incluye control remoto original, cable de poder y soporte para colgar en la pared\n" +
      "\n" +
      "Se vende por viaje al exterior."
  }
];

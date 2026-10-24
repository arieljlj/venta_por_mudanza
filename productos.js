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
  condicionesPago: "Precio negociable con retiro en Cartago. Se paga el total al momento de recoger el artículo. El transporte corre por cuenta del comprador.",
  sitio: "https://arieljlj.github.io/venta_por_mudanza/"
};

window.PRODUCTOS = [
  {
    id: "nevera-samsung",
    titulo: "Nevera Samsung No Frost con dispensador de agua",
    categoria: "Electrodomésticos",
    precio: 1750000,
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
    titulo: "Horno microondas Whirlpool plateado (WMS07ZD)",
    categoria: "Electrodomésticos",
    precio: 175000,
    precioNuevo: null,
    estado: "disponible",
    condicion: "Usado - Buen estado",
    fotos: 5,
    destacado: false,
    descripcion:
      "Horno microondas Whirlpool color plateado, modelo WMS07ZD, 700 W, con panel digital.\n" +
      "\n" +
      "• Menú de cocción automática (arroz, vegetales, pasta, palomitas, pescado) y descongelado rápido\n" +
      "• Plato giratorio de vidrio\n" +
      "• Funcionando perfectamente\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "juego-de-sala",
    titulo: "Juego de sala moderno acanalado en terciopelo: sofá + 2 poltronas + mesas nido",
    categoria: "Sala y comedor",
    precio: 1400000,
    precioNuevo: 3200000,
    estado: "vendido",
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
      "Precio por el combo completo.\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "comedor-4-puestos",
    titulo: "Juego de comedor moderno 4 puestos con vidrio protector y sillas poltrona acanaladas",
    categoria: "Sala y comedor",
    precio: 1050000,
    precioNuevo: 2200000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Juego de comedor moderno de 4 puestos, estilo Glam contemporáneo, en excelente estado.\n" +
      "\n" +
      "• Mesa de madera lacada en blanco/marfil con cubierta de vidrio protector a la medida (protege de derrames, calor y rayones)\n" +
      "• 4 sillas tipo poltrona tapizadas en tela suave color crema, con espaldar alto acanalado\n" +
      "• Patas de madera en tono miel que dan estabilidad y contraste\n" +
      "• Hace juego con las poltronas del juego de sala (también a la venta)\n" +
      "• Limpio, vidrio intacto, muy cómodo y elegante\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "vitrina-blanca",
    titulo: "Vitrina blanca de madera con vidrio y cajones",
    categoria: "Sala y comedor",
    precio: 380000,
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
    precio: 1000000,
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
    precio: 550000,
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
    precio: 1200000,
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
    precio: 380000,
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
    precio: 1000000,
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
    precio: 380000,
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
    precio: 220000,
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
    titulo: "Smart TV Hyundai 32 pulgadas curvo (para repuestos o uso con detalle en pantalla)",
    categoria: "Tecnología",
    precio: 120000,
    precioNuevo: null,
    estado: "vendido",
    condicion: "Con falla en pantalla (repuestos)",
    fotos: 6,
    video: true,
    destacado: false,
    descripcion:
      "Smart TV Hyundai de 32 pulgadas, pantalla curva LED HD, modelo HYLED3213INTC. Fabricado en Colombia bajo licencia de Hyundai Corporation.\n" +
      "\n" +
      "• Enciende, da sonido y las tarjetas internas funcionan\n" +
      "• Presenta líneas horizontales en la pantalla, como se ve en las fotos y el video\n" +
      "• Wi-Fi, 2 HDMI, USB, ranura microSD y entrada de antena/cable\n" +
      "• Incluye sus patas originales\n" +
      "\n" +
      "Ideal para técnicos (repuestos: tarjeta principal, fuente, tiras LED, carcasa, control) o como monitor de cámaras de seguridad o para taller. Precio negociable.\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "escritorio-marron-silla",
    titulo: "Escritorio madera con pata de vidrio + silla ergonómica",
    categoria: "Oficina",
    precio: 420000,
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
    precio: 400000,
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
    precio: 1600000,
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
    precio: 140000,
    precioNuevo: null,
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
    precio: 150000,
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
    precio: 420000,
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
    precio: 220000,
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
    precio: 230000,
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
    precio: 180000,
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
    precio: 120000,
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
    precio: 180000,
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
    precio: 750000,
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
  },
  {
    id: "tv-samsung-49",
    titulo: "Samsung Smart TV 49 pulgadas Full HD (UN49J5290AK)",
    categoria: "Tecnología",
    precio: 800000,
    precioNuevo: 1300000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 4,
    video: true,
    destacado: false,
    descripcion:
      "Samsung Smart TV de 49 pulgadas (123 cm) Full HD, modelo UN49J5290AK, hecho en México.\n" +
      "\n" +
      "• Resolución Full HD 1080p (1920 x 1080)\n" +
      "• Smart Hub con Wi-Fi, puerto Ethernet y acceso a plataformas de streaming\n" +
      "• Puertos HDMI y USB, entrada de componente/AV y salida de audio óptica\n" +
      "• Pantalla impecable, sin líneas ni manchas: mira el video con el TV encendido\n" +
      "• Incluye control remoto original, cable de poder y soporte de pared\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "bicicleta-700c",
    titulo: "Bicicleta urbana/híbrida GW aluminio rin 700c, frenos de disco, 21 velocidades",
    categoria: "Juguetes y deporte",
    precio: 650000,
    precioNuevo: 800000,
    estado: "disponible",
    condicion: "Usado - Muy buen estado",
    fotos: 10,
    destacado: false,
    descripcion:
      "Bicicleta urbana/híbrida GW en aluminio, rin 700c, negro mate con detalles fucsia. Muy liviana, cómoda y lista para rodar.\n" +
      "\n" +
      "• Llantas Kenda Kolonizer 700x38C: más ligera y rápida que una bicicleta de montaña tradicional, sirve en pavimento y destapado suave\n" +
      "• Frenos de disco mecánicos OnTrail (discos de 160 mm)\n" +
      "• 21 velocidades (3x7)\n" +
      "• Potencia Venzo y espaciadores anodizados en morado\n" +
      "• Suspensión delantera\n" +
      "• Limpia, bien ajustada y con las llantas en muy buen estado\n" +
      "\n" +
      "Se vende por viaje al exterior."
  },
  {
    id: "pista-hot-wheels",
    titulo: "Pista Hot Wheels City Ultimate Garage original con dragón (GJL14)",
    categoria: "Juguetes y deporte",
    precio: 480000,
    precioNuevo: 850000,
    estado: "disponible",
    condicion: "Usado - Excelente estado",
    fotos: 3,
    destacado: false,
    descripcion:
      "Pista Hot Wheels City Ultimate Garage original (referencia GJL14), el mega garaje con dragón.\n" +
      "\n" +
      "• Gran tamaño: casi 1 metro de alto\n" +
      "• Torre de 4 niveles con espacio para más de 100 carros\n" +
      "• Looping doble, pistas en espiral y elevador manual con palanca\n" +
      "• Dragón robot en la cima que \"devora\" los carros\n" +
      "• Estructura sólida, en perfecto estado estético y mecánico\n" +
      "• Ideal para regalo\n" +
      "\n" +
      "Precio negociable.\n" +
      "Se vende por viaje al exterior."
  }
];

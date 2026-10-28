# Venta por mudanza

Catálogo de muebles y electrodomésticos en venta por mudanza a España.
Sitio publicado: https://arieljlj.github.io/venta_por_mudanza/

## Cómo editar

Todo el contenido está en **`productos.js`**. Desde GitHub: abre el archivo, toca el lápiz (✏️), edita y guarda con "Commit changes". En 1–2 minutos el sitio se actualiza solo.

- **Cambiar un precio:** edita `precio: 850000` (sin puntos).
- **Marcar reservado o vendido:** cambia `estado: "disponible"` por `"reservado"` o `"vendido"`.
- **Agregar un artículo:** copia un bloque `{ ... }`, cambia el `id`, y sube sus fotos a `img/<id>/` como `01.jpg`, `02.jpg`… más una `thumb.jpg` cuadrada.

## Enlace directo a un artículo

Cada artículo tiene su propio enlace para compartir en grupos de WhatsApp:
`https://arieljlj.github.io/venta_por_mudanza/#lavadora-lg-13kg`

## Medios de pago

Efectivo en euros (€), efectivo en pesos colombianos o llave Bre-B. Se paga el total al recoger; transporte a cargo del comprador.

## Vista previa en WhatsApp

Al publicar, `scripts/generar-paginas.js` crea una página por artículo en `p/<id>/` con su propia foto, título, precio y datos estructurados. También genera `sitemap.xml` con la portada y los artículos disponibles o reservados; los vendidos no se incluyen en el sitemap. Así, buscadores y redes pueden descubrir páginas específicas y al compartir un artículo por WhatsApp o Facebook se ve la foto correcta. Esto pasa solo; no hay que hacer nada.

## SEO y Facebook Marketplace

El sitio incluye metadatos para compartir, páginas indexables por producto, datos estructurados y un sitemap. Esto ayuda a que los buscadores web entiendan el catálogo, pero no permite controlar ni mejorar directamente la posición de los artículos en las búsquedas internas de Facebook Marketplace.

El remarketing requiere configurar campañas en Meta Ads y una audiencia permitida, por ejemplo, de personas que visitaron este sitio. No permite identificar desde aquí a quienes buscaron productos similares en Marketplace ni garantiza que un anuncio aparezca allí. No se instala un píxel de seguimiento sin la configuración de Meta y los avisos/consentimientos de privacidad correspondientes.

## Videos

Un artículo puede tener un video corto: se guarda como `img/<id>/video.mp4` (comprimido a 720p, sin audio, ~1 MB) junto con `video-poster.jpg`, y en `productos.js` se agrega `video: true`. El video aparece como segunda diapositiva de la galería.

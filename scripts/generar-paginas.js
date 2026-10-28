// Genera una página por artículo en p/<id>/index.html con su propia
// vista previa (foto, título y precio) para WhatsApp y Facebook.
// Se ejecuta automáticamente al publicar (ver .github/workflows/pages.yml).
const fs = require("fs");
const path = require("path");
global.window = {};
require(path.join(__dirname, "..", "productos.js"));
const C = window.CONFIG, P = window.PRODUCTOS;
const esc = s => String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const money = n => "$ " + n.toLocaleString("es-CO");
const root = path.join(__dirname, "..");
fs.rmSync(path.join(root, "p"), { recursive: true, force: true });
const availability = {
  disponible: "https://schema.org/InStock",
  reservado: "https://schema.org/LimitedAvailability",
  vendido: "https://schema.org/OutOfStock"
};
const xmlEsc = s => String(s).replace(/[&<>"]/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
const sitemapUrls = [`  <url><loc>${xmlEsc(C.sitio)}</loc></url>`];
for (const p of P) {
  const url = C.sitio + "p/" + p.id + "/";
  const img = C.sitio + "img/" + p.id + "/" + (fs.existsSync(path.join(root, "img", p.id, "og.jpg")) ? "og.jpg" : "01.jpg");
  const precio = p.estado === "vendido" ? "VENDIDO" : money(p.precio) + (p.estado === "reservado" ? " (reservado)" : "");
  const title = p.titulo + " · " + precio;
  const desc = p.descripcion.split("\n").find(Boolean) + " En " + C.ubicacion + ". " + C.entrega + ".";
  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.titulo,
    description: p.descripcion,
    image: [img],
    category: p.categoria,
    itemCondition: "https://schema.org/UsedCondition"
  };
  if (p.estado !== "vendido") {
    product.offers = {
      "@type": "Offer",
      url,
      price: String(p.precio),
      priceCurrency: "COP",
      availability: availability[p.estado],
      itemCondition: "https://schema.org/UsedCondition",
      availableAtOrFrom: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cartago",
          addressRegion: "Valle del Cauca",
          addressCountry: "CO"
        }
      }
    };
  }
  const structuredData = JSON.stringify(product).replace(/</g, "\\u003c");
  const whatsappText = encodeURIComponent("Hola Jorge, me interesa " + p.titulo + " (" + money(p.precio) + "). ¿Sigue disponible? " + url);
  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index,follow">
<meta property="og:type" content="product">
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="Venta por mudanza · Cartago">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:alt" content="${esc(p.titulo)} en venta en ${esc(C.ubicacion)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${esc(url)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="${esc(url)}">
<script type="application/ld+json">${structuredData}</script>
</head>
<body style="font-family:system-ui,sans-serif;text-align:center;padding:40px 16px">
<main style="max-width:720px;margin:auto;text-align:left">
<article>
<h1>${esc(p.titulo)}</h1>
<p><strong>${esc(precio)}</strong> · ${esc(p.condicion)} · ${esc(C.ubicacion)}</p>
<img src="${esc(img)}" alt="${esc(p.titulo)} en venta en ${esc(C.ubicacion)}" style="display:block;width:100%;height:auto">
<p>${esc(p.descripcion).replace(/\n/g, "<br>")}</p>
<p>${esc(C.entrega)}. ${esc(C.condicionesPago)}</p>
${p.estado === "vendido" ? "<p>Este artículo ya fue vendido.</p>" : `<p><a href="https://wa.me/${esc(C.whatsapp)}?text=${whatsappText}">Consultar por WhatsApp</a></p>`}
<p><a href="../../#${esc(p.id)}">Ver artículo y galería completa</a> · <a href="../../">Ver todos los artículos en venta en Cartago</a></p>
</article>
</main>
</body>
</html>
`;
  fs.mkdirSync(path.join(root, "p", p.id), { recursive: true });
  fs.writeFileSync(path.join(root, "p", p.id, "index.html"), html);
  if (p.estado !== "vendido") {
    sitemapUrls.push(`  <url><loc>${xmlEsc(url)}</loc><image:image><image:loc>${xmlEsc(img)}</image:loc><image:title>${xmlEsc(p.titulo)}</image:title></image:image></url>`);
  }
}
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${sitemapUrls.join("\n")}\n</urlset>\n`);
console.log("Páginas generadas:", P.length);

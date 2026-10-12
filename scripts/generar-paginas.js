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
for (const p of P) {
  const url = C.sitio + "p/" + p.id + "/";
  const img = C.sitio + "img/" + p.id + "/" + (fs.existsSync(path.join(root, "img", p.id, "og.jpg")) ? "og.jpg" : "01.jpg");
  const precio = p.estado === "vendido" ? "VENDIDO" : money(p.precio) + (p.estado === "reservado" ? " (reservado)" : "");
  const title = p.titulo + " · " + precio;
  const desc = p.descripcion.split("\n")[0] + " Entregas del 5 al 10 de noviembre en Cartago. Pago en euros, pesos o Bre-B.";
  const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:type" content="product">
<meta property="og:site_name" content="Venta por mudanza · Cartago">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="${esc(url)}">
<meta name="twitter:card" content="summary_large_image">
<link rel="canonical" href="${esc(url)}">
<script>location.replace("../../#${p.id}");</script>
</head>
<body style="font-family:system-ui,sans-serif;text-align:center;padding:40px 16px">
<p><a href="../../#${p.id}">Ver ${esc(p.titulo)}</a></p>
</body>
</html>
`;
  fs.mkdirSync(path.join(root, "p", p.id), { recursive: true });
  fs.writeFileSync(path.join(root, "p", p.id, "index.html"), html);
}
console.log("Páginas generadas:", P.length);

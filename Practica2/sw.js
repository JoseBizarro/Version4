// Define el nombre de la caché
const CACHE_NAME = "Boveda1";
// Archivos requeridos para que la aplicación funcione fuera de línea
self.addEventListener("install", (event) => {

  const recursos = caches.open(CACHE_NAME).then((cache) => {
    console.log("Caching files");
    cache.add("/");
    cache.add("/sw.js");
    cache.add("/manifest.json");
    cache.add("/personajes.html");
    cache.add("/css/style.css");
    cache.add("/img/32x32.png");
    cache.add("/img/48x48.png");
    cache.add("/img/128x128.png");
    cache.add("/img/AgenteM.png");
    cache.add("/img/Aquaman_FlashPoint.png");
    cache.add("/img/Aquaman_Tierra0.png");
    cache.add("/img/Aquaman_Tierra2.png");
    cache.add("/img/Aquaman.png");
    cache.add("/img/Batman_Tierra1.png");
    cache.add("/img/Batman_Tierra2.png");
    cache.add("/img/Batman_Tierra10.png");
    cache.add("/img/Batman.png");
    cache.add("/img/Cyborg_FlashPoint.png");
    cache.add("/img/Cyborg_Tierra0.png");
    cache.add("/img/Cyborg_Tierra42.png");
    cache.add("/img/Cyborg.png");
    cache.add("/img/default.png");
    cache.add("/img/Flash_FlashPoint.png");
    cache.add("/img/Flash_Tierra2.png");
    cache.add("/img/Flash_Tierra50.png");
    cache.add("/img/Flash.png");
    cache.add("/img/FlechaV.png");
    cache.add("/img/fondo1.png");
    cache.add("/img/icono.ico");
    cache.add("/img/Linterna.png");
    cache.add("/img/Shazam.png");
    cache.add("/img/Superman_FlashPoint.png");
    cache.add("/img/Superman_Tierra1.png");
    cache.add("/img/Superman_Tierra29.png");
    cache.add("/img/Superman.png");
    cache.add("/img/Wonderwoman_FlashPoint.png");
    cache.add("/img/Wonderwoman_Tierra0.png");
    cache.add("/img/Wonderwoman_Tierra22.png");
    cache.add("/img/WW.png");
    cache.add("/js/app.js");
    cache.add("/index.html");
    cache.add("/version.html");
  });
  event.waitUntil(recursos);
});

self.addEventListener("fetch", (event) => {
  const respuesta = fetch(event.request).then((newResp) => {
    caches.open("recursos").then((cache) => {
      cache.put(event.request, newResp);
    });
    return newResp.clone();
  }).catch(err=>{
    return caches.match(event.request); 
  })
  event.respondWith(respuesta);
});
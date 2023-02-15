// This code executes in its own worker or thread
self.addEventListener("install", event => {
  console.log("¡Service worker instalado!");
});

self.addEventListener("activate", event => {
  console.log("¡Service worker activado y actualizado!");
});
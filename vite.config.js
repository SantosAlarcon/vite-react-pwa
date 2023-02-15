import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'script',
    lang: "es",
    scope: "/",
    workbox: [{
      clientsClaim: true,
      skipWaiting: true
    }],
    devOptions: {
      enabled: true
    },
    manifest: {
      name: 'Vite + React + PWA',
      short_name: 'ViteReactPWA',
      description: 'Plantilla de Vite + React + PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: './vite-logo.png',
          sizes: '640x640',
          type: 'image/png'
        }
      ]
    }
  })
  ],
  server: {
    host: '0.0.0.0',
  }
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  root: "src",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: { skipWaiting: true, globPatterns: ["assets/Inter-*"] },
      manifest: {
        id: "/",
        short_name: "VRLSNGCNTDN",
        name: "Vorlesungscountdown",
        lang: "de",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/maskable1024.png",
            purpose: "maskable",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "/maskable512.png",
            purpose: "maskable",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icon256.png",
            purpose: "any",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icon128.png",
            purpose: "any",
            sizes: "128x128",
            type: "image/png",
          },
        ],
        orientation: "any",
        background_color: "#353535",
        theme_color: "#353535",
      },
    }),
  ],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});

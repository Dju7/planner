import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ['vite.svg', "grandicon.png", "peticon.png"],
  manifest: {
    name: "Planner",
    short_name: "Plan_",
    description: "application serving as personal organizer",
    icons: [
      {
        src: "./peticon.png",
        sizes: "124x124",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "./grandicon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon"
      },
      {
        src: "./grandicon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "./grandicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ],
    theme_color: "#181818",
    background_color: "#e8eac2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
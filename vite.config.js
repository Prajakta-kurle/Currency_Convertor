
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base:'/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Currency Convertor App',
        short_name: 'currency convertor',
        description: 'currency convertor app',
        theme_color: '#704b31',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/public/image192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/public/image512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import packageJson from './package.json'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(packageJson.version),
  },
  plugins: [
    react(), 
    viteCompression({ algorithm: 'brotliCompress' }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Smart Campus',
        short_name: 'Smart Campus',
        description: 'Aplikacja Smart Campus',
        theme_color: '#183447',
        background_color: '#183447',
        display_override: ['window-controls-overlay', 'standalone'],
        categories: ["education", "productivity"],
        shortcuts: [
          {
            name: "Plan Lekcji",
            short_name: "Plan",
            description: "Otwórz plan lekcji",
            url: "/PlanLekcji",
            icons: [{ src: "/shortcut-plan.png", sizes: "96x96", type: "image/png" }]
          },
          {
            name: "Mapa Kampusu",
            short_name: "Mapa",
            description: "Otwórz mapę kampusu",
            url: "/MapaKampusu",
            icons: [{ src: "/shortcut-map.png", sizes: "96x96", type: "image/png" }]
          }
        ],
        share_target: {
          action: "/Share",
          method: "GET",
          params: {
            title: "title",
            text: "text",
            url: "url"
          }
        },
        file_handlers: [
          {
            action: "/Open",
            accept: {
              "application/vnd.smartcampus": [".campus"]
            }
          }
        ],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        screenshots: [
          {
            src: 'pwa-banner-mobile.png',
            sizes: '1080x1920',
            type: 'image/png',
            form_factor: 'narrow'
          },
          {
            src: 'pwa-banner-desktop.png',
            sizes: '1920x1080',
            type: 'image/png',
            form_factor: 'wide'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
      '@features': path.resolve(__dirname, './src/features'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
    },
  },
  build: {
    cssTarget: 'chrome123'
  }
})

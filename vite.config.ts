import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginSitemap from 'vite-plugin-sitemap'

const vercelUrl = process.env.VERCEL_URL
const siteUrl = vercelUrl
  ? `https://${vercelUrl}`
  : (process.env.VITE_SITE_URL || 'https://diegoherrerasilvadev.vercel.app')

export default defineConfig({
  define: {
    __SITE_URL__: JSON.stringify(siteUrl),
  },
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: siteUrl,
      dynamicRoutes: ['/sobre', '/projetos', '/contato'],
      generateRobotsTxt: true,
    }),
  ],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // o el plugin que uses

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite conexiones externas
    allowedHosts: [
      'localhost',
      '.ngrok-free.app', // Permite todos los subdominios de ngrok
      'c25e-185-177-125-181.ngrok-free.app' // O específicamente tu dominio actual
    ]
  }
})
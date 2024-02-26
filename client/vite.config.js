import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}
  const PORT = process.env.VITE_CLIENT || 5173

  return defineConfig({
    plugins: [react()],
    server: { port: PORT}
  })
}
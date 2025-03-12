import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/ai-photo-studio/',  // 确保使用仓库名作为基础路径
  plugins: [vue()]
})
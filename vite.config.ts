import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'

const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const viteEnv = loadEnv(mode, process.cwd())
  const { VITE_BASE_PATH } = viteEnv
  return {
    base: VITE_BASE_PATH,
    plugins: [
      vue(),
      WindiCSS(),
      Icons({
        autoInstall: true,
      }),
    ],
    resolve: {
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve('src')}/`,
        },
      ],
    },
  }
})

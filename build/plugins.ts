import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import vueJsx from '@vitejs/plugin-vue-jsx'
import removeConsole from 'vite-plugin-remove-console'
import DefineOptions from 'unplugin-vue-define-options/vite'

export function getPluginsList() {
    return [
        vue(),
        // jsx、tsx语法支持
        vueJsx(),
        DefineOptions(),
        // 线上环境删除console
        removeConsole({ external: ['src/assets/iconfont/iconfont.js'] }),
        // svg组件化支持
        svgLoader(),
    ]
}

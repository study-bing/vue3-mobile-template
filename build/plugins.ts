import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import removeConsole from 'vite-plugin-remove-console'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'

export function getPluginsList() {
    return [
        vue(),
        // jsx、tsx语法支持
        vueJsx(),
        DefineOptions(),
        // 线上环境删除console
        removeConsole(),
        // 自动按需引入element
        AutoImport({
            imports: ['vue'],
        }),
        Components({
            dts: true,
            types: [
                {
                    from: 'vue-router',
                    names: ['RouterLink', 'RouterView'],
                },
            ],
        }),
        createSvgIconsPlugin({
            // Specify the icon folder to be cached
            iconDirs: [
                resolve(process.cwd(), 'src/assets/svg'),
                resolve(process.cwd(), 'src/assets/menu'),
            ],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]',
        }),
        // svg组件化支持
        svgLoader(),
    ]
}

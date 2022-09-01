import { createApp, Directive } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'
import { getServerConfig } from './config'
// 引入重置样式
import './style/reset.scss'
// 导入公共样式
import './style/index.scss'
import 'virtual:svg-icons-register'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
const app = createApp(App)

// 自定义指令
import * as directives from '@/directives'
Object.keys(directives).forEach(key => {
    app.directive(key, (directives as { [key: string]: Directive })[key])
})

getServerConfig(app).then(async () => {
    app.use(router)
    await router.isReady()
    setupStore(app)
    app.mount('#app')
})

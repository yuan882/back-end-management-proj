import Vue from 'vue'
import App from './App.vue'
// 加载全局样式
import './styles/index.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 一般基于vue的插件， 都要Vue.use一下 =》会进行插件的初始化，并注册组件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

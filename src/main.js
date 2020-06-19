import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';



Vue.use(VueI18n)
Vue.use(Element)
const i18n = new VueI18n({
  locale: 'zh', // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh': require('./assets/lang/zh'),   // 中文语言包
    'en': require('./assets/lang/en')    // 英文语言包
  }
})
//  Vue.component('chart', ECharts);
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')

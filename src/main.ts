import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
// 模拟进度条
import 'nprogress/nprogress.css'
import '@/style/reset.css'

// 不显示启动信息
Vue.config.productionTip = false;


Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

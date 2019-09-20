import Vue from 'vue'
import App from 'src/App.vue'
import router from 'src/routers/router'
import store from 'src/store/store'
import * as ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
// 模拟进度条
import 'nprogress/nprogress.css'
import 'webapp/style/reset.css'
import 'webapp/style/style.scss'

// 不显示启动信息
Vue.config.productionTip = false;


Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
// 引入路由
import action from 'src/routers/action/router'

Vue.use(Router)
const VRouter = new Router({
  mode: 'hash',
  // base: '',
  routes: action
})
VRouter.beforeEach((to, from, next) => {

  // let token = getStorageToken();
  // let isAuth = to.meta.requireAuth;

  // if(!token && isAuth){
  //   next('/login')
  // }

  // 加载开始
  NProgress.start();
  
  next();

})

VRouter.afterEach((to, from) => {
  NProgress.done();
})

export default VRouter
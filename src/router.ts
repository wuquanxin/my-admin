import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

const VRouter = new Router({
  mode: 'hash',
  base: '',
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import(/* webpackChunkName: "index" */ './views/Index/index.vue')
    }
  ]
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
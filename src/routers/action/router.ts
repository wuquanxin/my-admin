
// layout
let Layout = () => import( /* webpackChunkName: "layout" */ 'webapp/components/layout/index');
// 首页
let Index = () => import(/* webpackChunkName: "index" */ 'webapp/views/Index/index');

export default [
    {
        path: '/',
        redirect: '/index',
        name: 'HOME',
        component: Layout,
        children: [
            {
                path: 'index',
                name: '首页',
                component: Index,
                meta: {
                    requireAuth: false,
                    title: 'index'
                }
            }
        ]
    }
]
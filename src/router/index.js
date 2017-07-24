import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',//history 打包需要使用hash
    routes: [
        { name: '/', path: '/', redirect: '/home'  },
        { name: 'home', path: '/home', component: require('../pages/home'), meta: {  } },
        { name: 'encrypt', path: '/encrypt', component: require('../pages/encrypt'), meta: {  } },
        { name: 'encode', path: '/encode', component: require('../pages/encode'), meta: {  } },
        { name: 'tobase64', path: '/tobase64', component: require('../pages/tobase64'), meta: {  } },
        { name: 'strsplit', path: '/strsplit', component: require('../pages/strsplit'), meta: {  } },
        { name: 'rmbconvert', path: '/rmbconvert', component: require('../pages/rmbconvert'), meta: {  } },
        { name: 'mdconvert', path: '/mdconvert', component: require('../pages/mdconvert'), meta: {  } },
        { name: 'qrcode', path: '/qrcode', component: require('../pages/qrcode'),meta:{} },
        { name: 'fanyi', path: '/fanyi', component: require('../pages/fanyi'),meta:{} },
        { name: '404', path: '*',  redirect: '/home'  }
    ]
})

router.beforeEach((to, from, next) => {
    console.log(`路由开始：${from.path}`)
    // console.log(from)
    next();
});

router.afterEach(route => {
    // console.log(route);
    console.log(`路由结束：${route.path}`)
})
export default router
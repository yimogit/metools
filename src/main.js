import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';
import directives from './directives';
import filters from './filters';
import components from './components';

// 自定义样式
import 'assets/css/app.css'

//注册指令，过滤器，组件
Object.keys(directives).forEach(e => Vue.directive(e, directives[e]));
Object.keys(filters).forEach(e => Vue.filter(e, filters[e]))
Object.keys(components).forEach(e => Vue.component(e, components[e]));

initVue();

function initVue() {
  return new Vue({
    router,
    render: h => h(App)
  }).$mount('#app');
}
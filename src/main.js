import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/en-US'
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
require('./assets/css/global.css');

Vue.use(VueRouter);
Vue.use(iView, { locale });

const RouterConfig = {
 mode: 'history',
 routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
 iView.LoadingBar.start();
 Util.title(to.meta.title);
 next();
});

router.afterEach((to, from, next) => {
 iView.LoadingBar.finish();
 window.scrollTo(0, 0);
});

new Vue({
 el: '#app',
 router: router,
 render: h => h(App)
});

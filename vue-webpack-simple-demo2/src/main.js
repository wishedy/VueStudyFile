import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import routerConfig from "./router.config.js"
import  ElementUi from "element-ui"
Vue.use(VueRouter);

const router = new VueRouter(routerConfig);
new Vue({
    router,
    el: '#app',

    render: h => h(App)
});

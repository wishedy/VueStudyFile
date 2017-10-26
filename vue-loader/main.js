import Vue from "vue";
import  VueRouter from "vue-router"
import App from "./App.vue";
import routerConfig from './router.config.js'
Vue.use(VueRouter);
const router = new VueRouter();
router.map(routerConfig);
router.redirect({
    "/":"/home"
});
//5、启动路由
router.start(App,"#box");
new Vue({
    "el":"#box",
    components:{
        app:App

    }
});
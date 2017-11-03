import Vue from 'vue'
import App from './App.vue'
import Router from "vue-router"
import routes from "./router/router.config"
import store from "./store/store.js"
Vue.use(Router);
const router  = new Router(routes);
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});

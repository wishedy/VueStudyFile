import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import Loading from "./components/Loading"
Vue.use(MintUI);
Vue.use(Loading);
new Vue({
    el: '#app',
    render: h => h(App)
})

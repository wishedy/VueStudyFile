<template>
  <div id="app" class="container">
    <HeaderBar v-show="headerOnOff"></HeaderBar>
    <router-view></router-view>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import Footer from "./components/Footer.vue"
  import  Header from "./components/Header.vue"
  import {mapGetters,mapActions} from "vuex"
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    components:{
        FooterBar:Footer,
        HeaderBar:Header
    },
  computed:mapGetters([
      "headerOnOff"
  ]),
    watch:{
        $route(to){
            var path=to.path.substring(1);
            /*this.headerChange(path);
            this.footerChange(path);*/
            /*console.log(path);
            if(path==="discover"){
                this.headerOnOff = false;
            }*/
        }
    },
    methods: mapActions(["changeHeader"])
}
</script>

<style>

</style>

<template>
    <div>
        欢迎进入vue,welcome{{msg}}
        <div @click="change()">{{msg}}</div>
        <cd></cd>
        <ul>
            <li>
                <a v-link="{path:'/home'}">首页</a>
                <a v-link="{path:'/news'}">新闻</a>
            </li>
            <router-view></router-view>
        </ul>
    </div>
</template>
<script>
    //import vue form "vue";
    import myApp from "./component/myApp.vue";

    export default{
        props:[],
        data(){
            return {
                msg:"aaaa"
            }
        },
        methods:{
          change(){
             this.msg ="改变的数据";
          }
        },
        components:{
            'cd':myApp
        }
    } 

</script>
<style>
    .v-link-active{
        font-size: 20px;
        color: #ff0000;
    }
</style>
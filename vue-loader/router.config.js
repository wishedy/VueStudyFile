import home from './component/home.vue';
import news from './component/news.vue';
import login from './region/login.vue';
import reg from './region/reg.vue';
import newList from './news/newdemo.vue';
export default {
            "home":{
                component:home,
                subRoutes:{
                    login:{
                        component:login
                    },
                    reg:{
                        component:reg
                    }
                }
            },
            news:{
                component:news,
                subRoutes:{
                    "detail/:id":{
                        component:newList
                    }

                }
            }
}
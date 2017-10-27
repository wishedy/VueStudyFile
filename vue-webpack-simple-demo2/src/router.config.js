import  Home from "./Home.vue"
import  News from "./News.vue"
import  Age from "./Age.vue"
export default {
    routes: [
        {
            path:"/home",
            component:Home
        },
        {
            path:"/news",
            component:News,
            children:[
                {
                    path:"/news/:name/age/:ageNum",
                    component:Age
                }
            ]
        }
    ]
};
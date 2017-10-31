import  Hot from "../components/Hot.vue"
import  Case from "../components/Case.vue"
import  Video from "../components/Video.vue"
export default {
    routes: [
        {
            path:"/hot",
            component:Hot
        },
        {
            path:"/case",
            component:Case
        },
        {
            path:"/video",
            component:Video
        },
        {
            path:"*",
            redirect:"/hot"
        }
    ]
};
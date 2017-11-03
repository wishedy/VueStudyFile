import  Hot from "../components/Hot.vue"
import  Case from "../components/Case.vue"
import  Video from "../components/Video.vue"
import  Discover from "../components/Discover.vue"
import  Message from "../components/Message.vue"
import  My from "../components/My.vue"
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
        },
        {
            path: "/discover",
            component: Discover
        },
        {
            path: "/message",
            component: Message
        },
        {
            path: "/my",
            component: My
        }
    ]
};
<template>
    <div>
        这是一个组件
    </div>
    <ul>
        <li v-for="item in arr">{{item}}{{$index}}</li>
    </ul>
</template>
<script>
    export default {
        data(){
            return {
                arr:['apple',"banner","orange","juice","tea"]
            }
        }
    }
</script>
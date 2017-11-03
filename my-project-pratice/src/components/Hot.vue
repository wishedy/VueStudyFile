<template>
    <section class="content">
            <section class="banner swiper-container">
                <section class="banner-list swiper-wrapper">
                    <div class="swiper-slide">
                        <figure class="slide-img">
                            <img src="../assets/juyhrtgfeedsw.jpg" alt="">
                        </figure>
                    </div>
                    <div class="swiper-slide">
                        <figure class="slide-img">
                            <img src="../assets/oilkuyjrfdcxsderftgyhjukiyjtgrf.jpg" alt="">
                        </figure>
                    </div>
                    <div class="swiper-slide">
                        <figure class="slide-img">
                            <img src="../assets/3b292df5e0fe9925279aa8433ea85edf8db1710b.jpg" alt="">
                        </figure>
                    </div>
                    <div class="swiper-slide">
                        <figure class="slide-img">
                            <img src="../assets/mhjbgvfcdghnmjk.jpg" alt="">
                        </figure>
                    </div>
                </section>
                <div class="swiper-pagination"></div>
            </section>
            <section class="content-list">
                <section class="content-item">
                    <h1 class="title">骨科规范化手术视频征集评选活动</h1>
                    <p class="des">X线透视下的腰骶椎解剖结构人工膝关节初次置换手术</p>
                </section>
            </section>
        </section>
</template>
<script>
    import HeaderBar from './Header.vue'
    export default {
        methods:{
            slider(){
                var mySwiper = new Swiper('.swiper-container', {
                    autoplay: 1000,//可选选项，自动滑动
                    pagination : '.swiper-pagination'
                })
            }
        },
        mounted(){
            this.slider();
        },
        components:{
            HeaderBar:HeaderBar
        }
    }
</script>
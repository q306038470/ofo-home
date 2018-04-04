<template>
    <div class="main-desc">
        <div class="desc">
            <img :src="picUrl" alt="">
            <p class="title">{{title}}</p>
            <p class="detail">{{detail}}</p>
            <a :href="anotherPage" class="access" v-show="isOpen">{{context}}</a>
            <p class="line" v-show="!isLast"></p>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'main-desc',
        data() {
            return{

            }
        },
        props: ['picUrl', 'title','detail', 'isLast','isOpen','context','anotherPage']
    }
</script>

<style lang="scss" scoped>
    @import '../../style/rem.scss';

    .main-desc{
        margin-top: rem(24);
        .access{
            display: block;
            width: rem(339);
            height: rem(45);
            line-height: rem(45);
            margin: rem(18) auto;
            border-radius: rem(3);
            background: #4F93EA;
            color: #FFFFFF;
            font-size: rem(18);
            font-weight: 700;
            font-family: PingFangSC-Semibold;
            text-align: center;
        }
    }
    .main-desc .desc{
        img{
            width: rem(339);
            // height: rem(210.4);            
            display: block;
            margin: 0 auto;
        }
        .title{
            font-family: PingFangSC-Semibold;
            font-size: rem(18);
            width: rem(339);
            color: #3E3A39;
            height: rem(15);
            line-height: rem(15);
            margin: rem(24) auto rem(20) auto;
            font-weight: 700;
        }
        .detail{
            font-family: PingFangSC-Regulart;
            font-size: rem(15);
            width: rem(339);
            color: #3E3A39;
            line-height: rem(30);
            margin-top: rem(5);
            margin: rem(5) auto 0 auto;
            text-align: justify;
        }
        .line{
            margin: rem(20) auto 0 auto;
            height: 1px;
            width: rem(339);
            background: #D8D8D8;
        }
    }
</style>

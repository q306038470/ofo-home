<template>
    <div class="mobile-about-team">
        <div class="imgs">
            <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/team5.png" alt="">
        </div>
        <p>戴威，ofo小黄车创始人兼CEO。出于对自行车的热爱，2014年与4名合伙人薛鼎、张巳丁、于信、杨品杰共同创立ofo小黄车，全球首创“无桩单车共享”模式，致力于用“共享、信任、开放”的理念解决用户最后一公里出行难题。ofo以“让世界没有陌生的角落”为愿景，做影响世界的共享出行平台。</p>
    </div>
</template>

<script>


export default {
    name: 'aboutTeam',
    data() {
        return {
            
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../../../style/rem.scss";
    .mobile-about-team {
        margin-bottom: rem(50);
        height: rem(340);
    }
    .mobile-about-team .imgs {
        width: rem(339);
        height: rem(181);
    }
    .mobile-about-team img {
        width: rem(339);
        margin-top: rem(18);
    }
    .mobile-about-team p {
        font-family: PingFangSC-Regular;
        font-size: rem(15);
        color: #3E3A39;
        line-height: rem(21);
        margin-top: rem(18);
    }
</style>

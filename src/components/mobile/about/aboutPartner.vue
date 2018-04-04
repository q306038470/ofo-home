<template>
    <div class="partners">
        <div class="partners-wrap">
            <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/partnerLogo.png" alt="">
            <p>欢迎合作伙伴与我们一起用科技重新定义共享</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'aboutPartner'
}
</script>


<style lang="scss" scoped>
@import '../../../style/rem.scss';

.partners{
    *{
        margin: 0;
        padding: 0;
    }
    margin-bottom: rem(50);
    width: 100%;
    .partners-wrap{
        width: rem(342);
        height: rem(327);
        margin:0 auto;
        display: block;
        overflow: hidden;
        // margin-left: rem(-3);
        margin-top: rem(18);
        img{
            width: rem(342);
            height: rem(276);
        }
        p{
            margin-left: rem(22.5);
            margin-top: rem(30);
            height: rem(21);
            line-height: rem(21);
            font-family: PingFangSC-Semibold;
            font-size: rem(15);
            font-weight: 700;
            color: #3E3A39;
        }
    }
    
}
</style>

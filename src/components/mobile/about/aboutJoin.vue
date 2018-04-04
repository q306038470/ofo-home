<template>
    <div class="about-wrap">
        <div class="row row1">
            <div class="top">
                <div class="center">
                    <h2>加入ofo</h2>
                    <p>和我们一起打造影响世界的共享出行平台！</p>
                    <div class="img">
                        <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/img1.png" alt="">
                        <a href="https://www.lagou.com/gongsi/j44749.html" class="button">查看职位<span></span></a>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="center">
                    <p>
                        作为全球共享单车的原创者和领骑者，ofo已在全球<br />
                        连接了超过1000万辆共享单车，日订单超320万，<br />
                        为全球2亿用户提供了超60亿次高效便捷、<br />
                        绿色低碳的出行服务。ofo也已成为全球最大的、<br />
                        估值最高的共享单车平台。
                    </p>
                </div>
            </div>
        </div>
        <div class="row row2">
            <div class="left">
                <div class="text">
                    <h3>超大平台</h3>
                    <p>共享单车的原创者&领骑者，</p>
                    <p>立足中国、放眼全球的国际化平台。</p>
                </div>
            </div>
            <div class="right"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/img2.png" alt=""></div>
        </div>
        <div class="row row3">
            <div class="bg"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/bg_element.svg" alt=""></div>
            <div class="img"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/img3.png" alt=""></div>
            <div class="text">
                <h3>超快成长</h3>
                <p>扁平化管理，配备强有力的导师制度。群英荟萃，还有接轨世界的工作体验。ofo学院，为你助力职场成长。你，会是其中的佼佼者吗？</p>
            </div>
        </div>
        <div class="row row4">
            <div class="right">
                <div class="text">
                    <h3>超多改变</h3>
                    <p>一些人等着被世界改变，而我们，已经在改变世界。从0到∞，我们改变一代人的出行方式，改变了一个时代。</p>
                </div>
            </div>
            <div class="img"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/img4.png" alt=""></div>
        </div>
        <div class="row row5">
            <div class="text">
                <h3>超好待遇</h3>
                <p>弹性工作制；完善的薪酬福利制度，五险一金、商业保险、绩效奖金、免费私教、节日礼物应有尽有；现代化的办公环境，咖啡厅、游戏室、休眠仓、健身房，一应俱全。</p>
            </div>
            <div class="img"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/img5.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'aboutOFO'

}
</script>


<style lang="scss" scoped>
@import '../../../style/normalize.scss';
@import '../../../style/reset.scss';
@import '../../../style/rem.scss';

*{
    margin: 0;
    padding: 0;
}
img {
    width: 100%;
    vertical-align: middle;
}
.row {
    width: 100%;
    max-width: rem(400);
    margin: 0 auto;
    height: rem(310);
    position: relative;
    .center {
        width: 100%;
        height: 100%;
        padding: 0 rem(18);
        position: relative;
    }
}
.row1 {
    height: rem(479);
    color: #3E3A39;
    .top {
        width: 100%;
        height: rem(230);
        background: #FFD900;
        color: #3E3A39;
        text-align: center;
        h2 {
            font-size: rem(24);
            font-family: PingFangSC-Semibold;
            padding: rem(45) 0 rem(7);
        }
        p {
            font-size: rem(14);
            font-family: PingFangSC-Regular;
        }
        .img {
            height: rem(150);
            position: absolute;
            left: rem(18);
            right: rem(18);
            top: rem(136);
            z-index: 1;
            .button {
                width: rem(130);
                height: rem(58);
                position: absolute;
                bottom: rem(-32);
                left: 50%;
                margin-left: rem(-65);
                font-size: rem(14);
                line-height: rem(48);
                text-align: center;
                background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/btn_jobs.svg) no-repeat left top;
                background-size: contain;
                font-family: PingFangSC-Semibold;
                color: #3E3A39;
                span {
                    display: inline-block;
                    width: rem(12);
                    height: rem(14);
                    background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/aboutJoin/ic_jobs_arrows.svg) no-repeat left top;
                    background-size: contain;
                    vertical-align: middle;
                    margin-left: rem(6);
                }
            }
        }
    }
    .bottom {
        width: 100%;
        height: rem(249);
        background: #FFFFFF;
        p {
            padding-top: rem(109);
            text-align: center;
            font-size: rem(14);
            color: #3E3A39;
            font-family: PingFangSC-Regular;
            line-height: rem(24);
        }
    }
}
.row2 {
    background: #FBFBFB;
    position: relative;
    .left {
        position: absolute;
        left: rem(18);
        right: rem(18);
        bottom: rem(24);
        height: rem(166);
        background: #FFD900;
        color: #3E3A39;
        .text {
            padding-left: rem(18);
            padding-top: rem(74);
            h3 {
                font-size: rem(20);
                padding-bottom: rem(7);
            }
            p {
                font-size: rem(15);
            }
        }
    }
    .right {
        position: absolute;
        top: rem(24);
        right: rem(42.5);
        left: rem(42.5);
    }
}
.row3 {
    background: #FFFFFF;
    color: #3E3A39;
    .bg {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
    }
    .img {
        position: absolute;
        top: rem(24);
        left: rem(18);
        right: rem(18);
    }
    .text {
        position: absolute;
        bottom: 0;
        left: rem(33);
        right: rem(33);
        background: #FFFFFF;
        padding: rem(12);
        h3 {
            font-size: rem(20);
            padding-bottom: rem(7);
        }
        p {
            font-size: rem(15);
        }
    }
}
.row4 {
    background: #FBFBFB;
    .img {
        position: absolute;
        top: rem(36);
        left: 0;
        width: rem(185);
        height: rem(250);
    }
    .right {
        position: absolute;
        right: 0;
        top: 0;
        width: rem(283);
        height: rem(255);
        background: #3D3D42;
        .text {
            position: absolute;
            left: rem(116);
            top: rem(36);
            color: #ffffff;
            padding-right: rem(24);
            h3 {
                font-size: rem(20);
                padding-bottom: rem(7);
            }
            p {
                font-size: rem(15);
            }
        }

    }
}
.row5 {
    background: #FFFFFF;
    position: relative;
    .img {
        position: absolute;
        right: 0;
        top: rem(43);
        width: rem(185);
        height: rem(250);
    }
    .text {
        position: absolute;
        left: 0;
        top: 0;
        width: rem(283);
        height: rem(269);
        padding-left: rem(24);
        padding-top: rem(24);
        color: #3E3A39;
        background: #FFD900;
        h3 {
            font-size: rem(20);
            padding-bottom: rem(7);
        }
        p {
            font-size: rem(15);
            width: rem(143);
            text-align: justify;
        }
    }
}
</style>

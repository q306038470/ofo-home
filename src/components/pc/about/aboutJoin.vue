<template>
    <div class="con">
        <div class="row row1">
            <div class="top">
                <div class="center">
                    <h2>加入ofo</h2>
                    <p>和我们一起打造影响世界的共享出行平台！</p>
                    <div class="img">
                        <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/aboutJoin/img1.png" alt="">
                        <a href="https://www.lagou.com/gongsi/j44749.html" target="blank" class="button">查看职位<span></span></a>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="center">
                    <div class="text">
                        <p>作为全球共享单车的原创者和领骑者，ofo已在全球连接了超过1000万辆共享单车，日订单超3200万，</p>
                        <p>为全球2亿用户提供了超60亿次高效便捷、绿色低碳的出行服务。</p>
                        <p>ofo也已成为全球最大的、估值最高的共享单车平台。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row2">
            <div class="center">
                <div class="left">
                    <div class="text">
                        <h3>超大平台</h3>
                        <p>共享单车的原创者&领骑者，</p>
                        <p>立足中国、放眼全球的国际化平台。</p>
                    </div>
                </div>
                <div class="right"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/aboutJoin/img2.png" alt=""></div>
            </div>
        </div>
        <div class="row row3">
            <div class="center">
                <div class="bg"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/aboutJoin/bg_jobs_element.svg" alt=""></div>
                <div class="img"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/aboutJoin/img3.png" alt=""></div>
                <div class="text">
                    <h3>超快成长</h3>
                    <p>扁平化管理，配备强有力的导师制度。群英荟萃，还有接轨世界的工作体验。ofo学院，为你助力职场成长。你，会是其中的佼佼者吗？</p>
                </div>
            </div>
        </div>
        <div class="row row4">
            <div class="center">
                <div class="right">
                    <div class="text">
                        <h3>超多改变</h3>
                        <p>一些人等着被世界改变，而我们，已经在改变世界。从0到∞，我们改变一代人的出行方式，改变了一个时代。</p>
                    </div>
                </div>
                <div class="img"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/aboutJoin/img4.png" alt=""></div>
            </div>
        </div>
        <div class="row row5">
            <div class="left"></div>
            <div class="center">
                <div class="text">
                    <h3>超好待遇</h3>
                    <p>弹性工作制；完善的薪酬福利制度，五险一金、商业保险、绩效奖金、免费私教、节日礼物应有尽有；现代化的办公环境，咖啡厅、游戏室、休眠仓、健身房，一应俱全。</p>
                </div>
                <div class="img"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/aboutJoin/img5.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'aboutJoin',
}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    vertical-align: middle;
}
.con {
    width: 100vw;
    // padding-top: 11.2vw;
    min-width: 1080px;
    overflow: hidden;
}
.row {
    width: 100%;
    height: 560px;
    .center {
        width: 1080px;
        height: 100%;
        margin: 0 auto;
        position: relative;
    }
}
.row1 {
    height: 1026px;
    .top {
        width: 100%;
        height: 600px;
        background: #FFD900;
        color: #3E3A39;
        text-align: center;
        h2 {
            font-size: 36px;
            font-family: PingFangSC-Semibold;
            padding: 90px 0 14px;
        }
        p {
            font-size: 20px;
        }
        .img {
            width: 100%;
            height: 480px;
            position: absolute;
            left: 0;
            top: 274px;
            z-index: 1;
            img {
                width: 1080px;
                height: 480px;
            }
            .button {
                width: 224px;
                height: 95px;
                position: absolute;
                bottom: -52px;
                left: 50%;
                font-size: 18px;
                line-height: 76px;
                text-align: center;
                margin-left: -112px;
                background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/btn_jobs_nor.png) no-repeat left top;
                background-size: contain;
                font-family: PingFangSC-Semibold;
                color: #3E3A39;
                &:hover {
                    background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/btn_jobs_prs.png) no-repeat left top;
                    background-size: contain;
                }
                span {
                    display: inline-block;
                    width: 18px;
                    height: 20px;
                    background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/aboutJoin/ic_jobs_arrows.svg) no-repeat left top;
                    background-size: contain;
                    vertical-align: middle;
                    margin-left: 6px;
                }
            }
        }
    }
    .bottom {
        width: 100%;
        height: 426px;
        background: #FFFFFF;
        .text {
            width: 1000px;
            position: absolute;
            top: 270px;
            left: 50%;
            margin-left: -500px;
            text-align: center;
            font-size: 18px;
            color: #3E3A39;
        }
    }
}
.row2 {
    background: #FBFBFB;
    .left {
        position: absolute;
        left: 0;
        top: 112px;
        width: 950px;
        height: 378px;
        background: #FFD900;
        color: #3E3A39;
        .text {
            position: absolute;
            left: 90px;
            top: 116px;
            h3 {
                font-size: 20px;
                padding-bottom: 14px;
            }
            p {
                font-size: 15px;
            }
        }
    }
    .right {
        position: absolute;
        top: 80px;
        right: 0;
        width: 616px;
        height: 360px;
        img {
            width: 616px;
            height: 360px;
        }
    }
}
.row3 {
    background: #FFFFFF;
    .bg {
        position: absolute;
        right: 0;
        top: 100px;
        width: 594px;
        height: 367px;
        color: #3E3A39;
        img {
            width: 594px;
            height: 367px;
        }
    }
    .img {
        position: absolute;
        top: 50px;
        left: 0;
        width: 1000px;
        height: 360px;
        img {
            width: 1000px;
            height: 360px;
        }
    }
    .text {
        position: absolute;
        left: 40px;
        bottom: 0;
        width: 456px;
        height: 221px;
        background: #FFFFFF;
        padding: 30px;
        h3 {
            font-size: 20px;
            padding-bottom: 14px;
        }
        p {
            font-size: 15px;
            text-align: justify;
        }
    }
}
.row4 {
    background: #FBFBFB;
    .img {
        position: absolute;
        top: 64px;
        left: 0;
        width: 580px;
        height: 456px;
        img {
            width: 580px;
            height: 456px;
        }
    }
    .right {
        position: absolute;
        left: 272px;
        top: 0;
        width: 100vw;
        height: 456px;
        background: #3D3D42;
        .text {
            position: absolute;
            left: 392px;
            top: 167px;
            width: 415px;
            color: #ffffff;
            h3 {
                font-size: 20px;
                padding-bottom: 14px;
            }
            p {
                font-size: 15px;
                text-align: justify;
            }
        }

    }
}
.row5 {
    background: #FFFFFF;
    position: relative;
    height: 500px;
    .img {
        position: absolute;
        right: 60px;
        top: 140px;
        width: 560px;
        height: 360px;
        img {
            width: 560px;
            height: 360px;
        }
    }
    .text {
        position: absolute;
        left: 0;
        top: 142px;
        width: 415px;
        color: #3E3A39;
        h3 {
            font-size: 20px;
            padding-bottom: 14px;
        }
        p {
            font-size: 15px;
            text-align: justify;
        }
    }
    .left {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 430px;
        background: #FFD900;
    }
}
</style>


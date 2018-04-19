<template>
    <div class="contain">
        <nav-bar class="navbar" :arr="arr" :imgSrc="imgSrc" :flag="flag"></nav-bar>
        <div class="main">
            <div class="row row1">
                <div class="center">
                    <h2>平台规模</h2>
                    <ul>
                        <li>
                            <span><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_platform_user.svg" alt=""></span>
                            <b>2亿+</b>
                            <p>实名认证真实用户</p>
                        </li>
                        <li>
                            <span><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_platform_city.svg" alt=""></span>
                            <b>250+</b>
                            <p>海内外城市</p>
                        </li>
                        <li>
                            
                            <span><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_platform_data.svg" alt=""></span>
                            <b>40亿+</b>
                            <p>短途出行大数据</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row row2">
                <div class="center">
                    <h2>用户画像</h2>
                    <p></p>
                </div>
            </div>
            <div class="row row3">
                <div class="center">
                    <div class="left">
                        <div class="imgs-wrap">
                            <swiper :data="swiperData1"></swiper>
                        </div>
                    </div>
                    <div class="right">
                        <h2><b>品牌推广</b><span></span></h2>
                        <p>标准化品牌资源+定制化创意营销<br/>资源整合，打造品效合一</p>
                    </div>
                </div>
            </div>
            <div class="row row4">
                <div class="center">
                    <div class="left">
                        <div class="imgs-wrap">
                            <swiper :data="swiperData2"></swiper>
                        </div>
                    </div>
                    <div class="right">
                        <h2><b>人群 x LBS 精准投放</b><span></span></h2>
                        <p>内容原生、奖励金、优惠券等多种形式</p>
                        <p>精准曝光+引流到店，持续提升广告效率和产出</p>
                        <p class="red">1000元起投，限时充返福利进行中！</p>
                    </div>
                </div>
            </div>
            <div class="row row5">
                <div class="center">
                    <div class="left">
                        <div class="card">
                            
                            <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_annualcard_custom.svg" alt="">
                            <div class="text">
                                <h3>专属定制</h3>
                                <p>企业登录专属UI</p>
                                <p>专属运营配套支持</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_annualcard_welfare.svg" alt="">
                            <div class="text">
                                <h3>员工福利</h3>
                                <p>全年不限次数免押金骑行</p>
                                <p>骑行里程兑换专属福利</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_annualcard_media.svg" alt="">
                            <div class="text">
                                <h3>媒体支持</h3>
                                <p>ofo小黄车APP及微博</p>
                                <p>微信媒体支持</p>
                            </div>
                        </div>
                        <div class="card">
                            <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_annualcard_publicwelfare.svg" alt="">
                            <div class="text">
                                <h3>公益行动</h3>
                                <p>用每一次骑行真正地为</p>
                                <p>环保公益的事业助力</p>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <h2>微风行动·企业年卡</h2>
                    </div>
                </div>
            </div>
            <div class="row row6">
                <div class="center">
                    <div class="left">
                        <h2>了解更多商业化合作资源及案例</h2>
                        <div class="form-wrap">
                            <div class="form">
                                <div class="input"><span class="bg1"></span><input type="text" v-model="companyName" placeholder="企业名称（必填）"></div>
                                <div class="checkbox"><span :class="{'active':isSingleUser}"><input type="checkbox" v-model="isSingleUser" id="checkbox"></span><label for="checkbox">我是个人广告主</label></div>
                                <div class="input"><span class="bg2"></span><input type="text" v-model="name" placeholder="姓名（必填）"></div>
                                <div class="input"><span class="bg3"></span><input type="text" v-model="tel" placeholder="手机（必填）"></div>
                                <div class="input"><span class="bg4"></span><input type="text" v-model="email" placeholder="邮箱"></div>
                                <div class="button" @click="handleClick">预约顾问咨询</div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <h2>发送邮件立即联系营销顾问</h2>
                        <p><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_contact_email_2.svg" /></p>
                        <h3>ads@ofo.com</h3>
                        <span>我们的工作时间是周一至周五 9:00-18:00</span>
                    </div>
                </div>
            </div>
        </div>
        <foot class="footer"></foot>
    </div>

</template>

<script>
    import NavBar from '../../../components/pc/NavBar';
    import foot from '../../../components/pc/footer';
    import swiper from '../../../components/mobile/swiper';
    import ajax from '../../../service/fetch';

    export default {
        name: 'About',
        data: function () {
            return {
                items: [{text: "关于ofo小黄车",checked:true,index:0},
                        {text: "发展历程",checked:false,index:1},
                        {text: "创始团队",checked:false,index:2},
                        {text: "融资情况",checked:false,index:3},
                        {text: "政府合作",checked:false,index:4},
                        {text: "合作伙伴",checked:false,index:5},
                        {text: "获奖情况",checked:false,index:6}],
                arr: [{title:'首页',checked:false,index:0},{title:'新闻',checked:false,index:1},{title:'关于',checked:false,index:2},{title:'商业合作',checked:true,index:3}],
                imgSrc: 2,
                flag:true,
                videoUrl: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/about.mp4',
                title: '关于我们',
                text: 'ofo小黄车，全球最大的无桩共享单车平台',
                swiperData1: [
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/swiper/imgs1/slide1.jpg',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/swiper/imgs1/slide2.jpg',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/swiper/imgs1/slide3.png'
                ],
                swiperData2: [
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/swiper/imgs2/slide1.png',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/swiper/imgs2/slide2.png',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/swiper/imgs2/slide3.png',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/swiper/imgs2/slide4.png'
                ],
                companyName: '', //      
                isSingleUser: false, //          
                name: '', //   
                tel: '', //    
                email: '', //   
            }
        },
        components: {
            'nav-bar': NavBar,
            'foot': foot,
            'swiper': swiper
        },
        methods: {
            handleClick(){
                ajax({
                    companyName: this.companyName,
                    isSingleUser: false, //          
                    name: this.name, //   
                    tel: this.tel, //    
                    email: this.email, //   
                })
            }
        },
        created() {
            window.scrollTo(0, 0);
            
        }
    }
</script>

<style lang="scss" scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    .contain {
		position: relative;
		width: 100vw;
        min-width: 1080px;
        overflow: hidden;
	}
    .main {
        padding-top: 5vw;
    }
    .row {
        width: 100%;
        height: 560px;
        .center {
            width: 1080px;
            height: 100%;
            margin: 0 auto;
            overflow: hidden;
            position: relative;
        }
    }
    .row1 {
        background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/bg_platform.svg) no-repeat center;
        background-size: cover;
        h2 {
            text-align: center;
            padding-top: 90px;
            font-size: 26px;
            color: #3E3A39;
        }
        ul {
            overflow: hidden;
            padding-top: 120px;
            li {
                float: left;
                width: 33%;
                text-align: center;
                color: #3E3A39;
                span {
                    display: block;
                    width: 100px;
                    height: 100px;
                    margin: 0 auto;
                }
                b {
                    display: block;
                    font-family: PingFangSC-Semibold;
                    font-size: 20px;
                    padding-top: 20px;
                }
                p {
                    font-size: 16px;
                }
            }
        }
    }
    .row2 {
        background-color: #FFD900;
        background-image: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/bg_user.svg);
        background-repeat: no-repeat;
        background-position: center;
        h2 {
            font-family: PingFangSC-Semibold;
            font-size: 30px;
            color: #3E3A39;
            position: absolute;
            top: 255px;
            left: 40px;
        }
        p {
            position: absolute;
            right: 40px;
            top: 0;
            height: 560px;
            width: 590px;
            background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_user_portrait.svg) no-repeat center;
            background-size: contain;
        }
    }
    .row3 {
        background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/bg_brand.svg) no-repeat center;
        background-color: #FBFBFB;
        .left {
            width: 284px;
            height: 512px;
            background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_phone.svg) no-repeat center;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            left: 180px;
            .imgs-wrap {
                width: 244px;
                height: 434px;
                position: absolute;
                bottom: 0;
                left: 20px;
                overflow: hidden;
            }
        }
        .right {
            position: absolute;
            right: 40px;
            top: 206px;
            width: 363px;
            h2 {
                font-size: 32px;
                color: #3E3A39;
                position: relative;
                padding-bottom: 5px;
                margin-bottom: 30px;
                b {
                    position: relative;
                    z-index: 1;
                }
                span {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 180px;
                    height: 30px;
                    background: #FFD900; 
                }
            }
            p {
                width: 230px;
                font-size: 14px;
                color: #3E3A39;
            }
        }
    }
    .row4 {
        background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/bg_lbs.svg) no-repeat center;
        background-color: #fff;
        .left {
            width: 284px;
            height: 512px;
            background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_phone.svg) no-repeat center;
            background-color: #fff;
            position: absolute;
            bottom: 0;
            right: 100px;
            .imgs-wrap {
                width: 244px;
                height: 434px;
                position: absolute;
                bottom: 0;
                left: 20px;
                overflow: hidden;
            }
        }
        .right {
            position: absolute;
            left: 100px;
            top: 206px;
            width: 420px;
            h2 {
                font-size: 32px;
                color: #3E3A39;
                position: relative;
                padding-bottom: 5px;
                margin-bottom: 30px;
                b {
                    position: relative;
                    z-index: 1;
                }
                span {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 380px;
                    height: 30px;
                    background: #FFD900; 
                }
            }
            p {
                width: 390px;
                font-size: 14px;
                color: #3E3A39;
                &.red {
                    color: #ff7372;
                    font-weight: bold;
                }
            }
        }
    }
    .row5 {
        background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/bg_annualcard.svg) no-repeat center;
        .center {
            padding: 0 5px;
        }
        .left {
            float: left;
            overflow: hidden;
            width: 712px;
            padding-top: 99px;
            .card {
                float: left;
                width: 348px;
                height: 178px;
                background: #FCF9E6;
                border-radius: 10px;
                margin-right: 8px;
                margin-bottom: 8px;
                padding: 45px 30px;
                overflow: hidden;
                img {
                    float: left;
                }
                .text {
                    float: left;
                    color: #3E3A39;
                    padding-left: 20px;
                    h3 {
                        font-size: 20px;
                        padding-bottom: 8px;
                    }
                    p {
                        font-size: 14px;
                    }
                }
            }
        }
        .right {
            float: right;
            h2 {
                font-size: 32px;
                line-height: 560px;
                color: #3E3A39;
            }
        }
    }
    .row6 {
        background: #FBFBFB;
        height: 718px;
        .center {
            padding: 105px 5px;
            h2 {
                font-size: 32px;
                color: #3E3A39;
            }
        }
        .left {
            float: left;
            h2 {
                padding-bottom: 48px;
            }
            .form-wrap {
                width: 400px;
            }
            .form {
                width: 100%;
                .checkbox {
                    text-align: right;
                    margin: -10px 0 24px;
                    font-size: 16px;
                    color: #3E3A39;
                    span {
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        vertical-align: middle;
                        overflow: hidden;
                        border-radius: 3px;
                        background: #ccc url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_checkbox_nor.svg) no-repeat center;
                        background-size: 20px;
                        &.active{
                            background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_checkbox_sel.svg) no-repeat center;
                            background-size: 20px;
                        }
                    }
                    input {
                        width: 20px;
                        height: 20px;
                        display: inline-block;
                        opacity: 0;
                    }
                    label {
                        padding-left: 8px;
                        vertical-align: middle;
                        display: inline-block;
                    }
                }
                .input {
                    width: 100%;
                    height: 50px;
                    position: relative;
                    overflow: hidden;
                    border-radius: 6px;
                    margin-bottom: 24px;
                    span {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 60px;
                        height: 50px;
                        &.bg1 {
                            background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_contact_enterprise.svg) no-repeat center;
                        }
                        &.bg2 {
                            background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_contact_user.svg) no-repeat center;
                        }
                        &.bg3 {
                            background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_contact_phone.svg) no-repeat center;
                        }
                        &.bg4 {
                            background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/pc/cooperation/ic_contact_email.svg) no-repeat center;
                        }
                    }
                    input {
                        width: 100%;
                        height: 100%;
                        border: none;
                        padding-left: 78px;
                        font-size: 16px;
                        color: #3E3A39;
                        appearance: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        outline: none;
                        background: #fff;
                        border-radius: 6px;
                        border: 1px solid #E5E5E5;
                    }
                }
                .button {
                    background: #FFD900;
                    border-radius: 6px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 18px;
                    color: #3E3A39;
                    font-weight: bold;
                    margin-top: 48px;
                    cursor: pointer;
                    &:hover {
                        background: #FFCC00;
                    }
                }
            }
        }
        .right {
            float: right;
            width: 432px;
            p {
                width: 100px;
                height: 100px;
                margin-top: 140px;
                img {
                    width: 100%;
                }
            }
            h3 {
                font-size: 26px;
                color: #3E3A39;
                padding:30px 0 8px;
            }
            span {
                display: block;
                font-size: 15px;
            }
        }
    }
</style>

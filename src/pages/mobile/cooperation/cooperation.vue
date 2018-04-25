<template>
    <div class="about_wrapper" v-title data-title="ofo-关于">
        <nav-bar :values="values"></nav-bar>
        <div class="row row1">
            <h2>平台规模</h2>
            <ul>
                <li>
                    <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_platform_user.svg" alt="">
                    <h3>2亿+</h3>
                    <p>实名认证真实用户</p>
                </li>
                <li>
                    <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_platform_data.svg" alt="">
                    <h3>40亿+</h3>
                    <p>短途出行大数据</p>
                </li>
                <li>
                    <img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_platform_city.svg" alt="">
                    <h3>250+</h3>
                    <p>海内外城市</p>
                </li>
            </ul>
        </div>
        <div class="row row2">
            <h2>用户画像</h2>
            <p><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_user_portrait.svg" alt=""></p>
        </div>
        <div class="row row3">
            <div class="text">
                <h2>品牌推广</h2>
                <p>标准化品牌资源+定制化创意营销</p>
                <p>资源整合，打造品效合一</p>
            </div>
            <div class="bottom">
                <div class="images-wrap">
                    <swiper :data="swiperData1"></swiper>
                </div>
            </div>
        </div>
        <div class="row row4">
            <div class="text">
                <h2>人群 x LBS 精准投放</h2>
                <p>内容原生、奖励金、优惠券等多种形式</p>
                <p>精准曝光+引流到店，持续提升广告效率和产出</p>
                <p class="red">1000元起投，限时充返福利进行中！</p>
            </div>
            <div class="bottom">
                <div class="images-wrap">
                    <swiper :data="swiperData2"></swiper>
                </div>
            </div>
        </div>
        <div class="row row5">
            <h2>微风行动·企业年卡</h2>
            <div class="bottom">
                <div class="card">
                    <div class="icon"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_annualcard_custom.svg" alt=""></div>
                    <h3>专属定制</h3>
                    <p>企业登录</p>
                    <p>专属UI专属运营</p>
                    <p>配套支持</p>
                </div>
                <div class="card">
                    <div class="icon"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_annualcard_welfare.svg" alt=""></div>
                    <h3>员工福利</h3>
                    <p>全年不限次数</p>
                    <p>免押金骑行</p>
                    <p>骑行里程兑换</p>
                    <p>专属福利</p>
                </div>
                <div class="card">
                    <div class="icon"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_annualcard_media.svg" alt=""></div>
                    <h3>媒体支持</h3>
                    <p>ofo小黄车APP</p>
                    <p>及微博微信</p>
                    <p>媒体支持</p>
                </div>
                <div class="card">
                    <div class="icon"><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_annualcard_publicwelfare.svg" alt=""></div>
                    <h3>公益行动</h3>
                    <p>用每一次骑行</p>
                    <p>真正地为环保</p>
                    <p>公益的事业助力</p>
                </div>
            </div>
        </div>
        <div class="row row6">
            <div class="top">
                <h2>了解更多商业化合作<br/>资源及案例</h2>
                <div class="form-wrap">
                    <div class="form">
                        <div class="item">
                            <div class="input"><span class="bg1"></span><input type="text" placeholder="企业名称（必填）" v-model="companyName"></div>
                            <p class="warn" v-if="btnClick && !companyName"><span><img src="~/assets/ic_warning.svg" alt=""></span>请填写公司名称</p>
                        </div>
                        <div class="checkbox"><span :class="{'active': isSingleUser}"><input type="checkbox" id="checkbox" v-model="isSingleUser"></span><label for="checkbox">我是个人广告主</label></div>
                        <div class="item">
                            <div class="input"><span class="bg2"></span><input type="text" placeholder="姓名（必填）" v-model="name"></div>
                            <p class="warn" v-if="btnClick && !name"><span><img src="~/assets/ic_warning.svg" alt=""></span>请填写姓名</p>
                        </div>
                        <div class="item">
                            <div class="input"><span class="bg3"></span><input type="text" placeholder="手机（必填）" v-model="tel"></div>
                            <p class="warn" v-if="btnClick && !checkMobile(tel)"><span><img src="~/assets/ic_warning.svg" alt=""></span>手机号格式错误</p>
                        </div>
                        <div class="item">
                            <div class="input"><span class="bg4"></span><input type="text" placeholder="邮箱" v-model="email"></div>
                            <p class="warn" v-if="emailError"><span><img src="~/assets/ic_warning.svg" alt=""></span>邮箱格式错误</p>
                        </div>
                        <div class="button" @click="handleClick">预约顾问咨询</div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <h2>发送邮件立即联系<br/>营销顾问</h2>
                <p><img src="https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_email_2.svg" /></p>
                <h3>ads@ofo.com</h3>
                <span>我们的工作时间是周一至周五 9:00-18:00</span>
            </div>
        </div>
        <foot class="footer"></foot>
        <toast v-if="showTip" :success="success"></toast>
    </div>
</template>

<script>
    import navBar from '../../../components/mobile/nav-bar';
    import foot from '../../../components/mobile/foot';
    import swiper from '../../../components/mobile/swiper';
    import toast from '../../../components/mobile/toast';
    import ajax from '../../../service/fetch';

    export default {
        name: 'MobileAbout',
        data() {
            return{
                values: [{text: "首页", index: 0, checked: false, flag: true},
                        {text: "新闻", index: 1, checked: false, flag: true},
                        {text: "关于", index: 2, checked: false, flag: true},
                        {text: "商业合作", index: 3, checked: true, flag: false}],
                swiperData1: [
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/swiper/imgs1/slide1.jpg',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/swiper/imgs1/slide2.jpg',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/swiper/imgs1/slide3.png'
                ],
                swiperData2: [
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/swiper/imgs2/slide1.png',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/swiper/imgs2/slide2.png',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/swiper/imgs2/slide3.png',
                    'https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/swiper/imgs2/slide4.png'
                ],
                companyName: '',
                isSingleUser: false,
                name: '',
                tel: '',
                email: '',
                btnClick: false,
                emailError: false,
                success: true,
                showTip: false
            }
        },
        methods: {
            checkMobile(tel){
                if(/^[1|9][3|4|5|6|7|8|9][0-9]\d{8}$/.test(tel)){ 
                    return true; 
                } 
                return false;
            },
            checkEmail(email){
                var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
                return reg.test(email);
            },
            handleClick(){
                this.btnClick = true;
                var params = {
                    companyName: this.companyName,
                    isSingleUser: this.isSingleUser,
                    name: this.name,
                    tel: this.tel
                };
                var _this = this;
                if (!this.companyName || !this.name || !this.checkMobile(this.tel)) {
                    return false;
                }
                if (this.email) {
                    if (this.checkEmail(this.email)) {
                        params.email = this.email;
                        this.emailError = false;
                    } else {
                        this.emailError = true;
                        return false;
                    }
                }
                ajax(params,function(){
                    _this.showTip = true;
                    _this.success = true;
                    setTimeout(function(){
                        _this.showTip = false;
                    },2000)
                },function(){
                    _this.success = false;
                    _this.showTip = true;
                    setTimeout(function(){
                        _this.showTip = false;
                    },2000)
                })
            }
        },
        components: {
            'nav-bar': navBar,
            'foot': foot,
            'swiper': swiper,
            'toast': toast
        }
    }
</script>


<style lang="scss" scoped>
@import "../../../style/rem.scss";
@import "../../../style/normalize.scss";
@import "../../../style/reset.scss";
    
.row {
    height: rem(611);
    position: relative;
}
.row1 {
    background: #fff url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/bg_platform.svg) no-repeat top left;
    background-size: 100% auto;
    h2 {
        padding: rem(60) 0 rem(57);
        text-align: center;
        font-size: rem(24);
        color: #3E3A39;
    }
    li {
        color: #3E3A39;
        text-align: center;
        padding-bottom: rem(35);
        img {
            width: rem(50);
        }
        h3 {
            font-size: rem(16);
            padding: rem(10) 0 rem(4);
        }
        p {
            font-size: rem(14);
        }
    }
}
.row2 {
    background: #FFD900;
    h2 {
        padding: rem(114) 0 rem(75);
        text-align: center;
        font-size: rem(24);
        color: #3E3A39;
    }
    p {
        padding: 0 rem(15);
        img {
            width: 100%;
        }
    }
}
.row3, .row4 {
    background: #FBFBFB url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/bg_brand.svg) no-repeat center;
    background-size: 100% auto;
    position: relative;
    .text {
        text-align: center;
        color: #3E3A39;
        padding-top: rem(35);
        h2 {
            font-size: rem(24);
            padding-bottom: rem(10);
        }
        p {
            font-size: rem(14);
            &.red{
                color: #ff5555;
                font-weight: bold;
            }
        }
    }
    .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: rem(247);
        height: rem(445);
        background: url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_phone.svg) no-repeat center 1px;
        background-size: contain;
    }
    .images-wrap {
        width: rem(212);
        height: rem(377);
        margin: rem(68) auto 0;
        overflow: hidden;
    }
}
.row4 {
    background: #ffffff url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/bg_lbs.svg) no-repeat center;
    background-size: 100% auto;
}
.row5 {
    background: #FFD900;
    h2 {
        font-size: rem(24);
        color: #3E3A39;
        padding: rem(70) 0 rem(32);
        text-align: center;
    }
    .bottom {
        padding: rem(30) rem(25) rem(15);
        overflow: hidden;
        .card {
            float: left;
            width: rem(145);
            height: rem(200);
            background: #FCF9E6;
            border-radius: 10px; 
            margin-bottom: rem(15);
            text-align: center;
            color: #3E3A39;
            &:nth-of-type(odd) {
                margin-right: rem(15);
            }
            h3 {
                font-size: rem(18);
                padding-bottom: rem(5);
            }
            p {
                font-size: rem(14);
            }
            img {
                width: 100%;
                vertical-align: middle;
            }
            .icon {
                width: rem(35);
                height: rem(74);
                margin: 0 auto;
                padding: rem(15) 0;
            }
        }
    }
}
.row6 {
    height: rem(800);
    background: #FBFBFB;
    color: #3E3A39;
    padding: 0 rem(24);
    h2 {
        font-size: rem(24);
        color: #3E3A39;
        padding: rem(35) 0;
        text-align: center;
    }
    .form-wrap {
        width: 100%;
        padding-top: rem(10);
    }
    .form {
        width: 100%;
        .checkbox {
            text-align: right;
            margin: rem(-10) 0 rem(16);
            font-size: rem(12);
            color: #3E3A39;
            span {
                display: inline-block;
                width: rem(18);
                height: rem(18);
                background: #ccc url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_checkbox_nor.svg);
                background-size: contain;
                border-radius: rem(3);
                &.active {
                    background: #ccc url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_checkbox_sel.svg);
                    background-size: contain;
                }
            }
            input {
                vertical-align: middle;
                width: rem(18);
                height: rem(18);
                opacity: 0;
                outline: none;
            }
            label {
                padding-left: 8px;
                vertical-align: middle;
                position: relative;
            }
        }
        .input {
            width: 100%;
            height: rem(36);
            position: relative;
            overflow: hidden;
            border-radius: rem(4);
            span {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: rem(41);
                &.bg1 {
                    background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_enterprise.svg) no-repeat center;
                    background-size: rem(16) auto;
                }
                &.bg2 {
                    background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_user.svg) no-repeat center;
                    background-size: rem(16) auto;
                }
                &.bg3 {
                    background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_phone.svg) no-repeat center;
                    background-size: rem(12) auto;
                }
                &.bg4 {
                    background: #FFD900 url(https://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/news_2018_04_02/mobile/cooperation/ic_contact_email.svg) no-repeat center;
                    background-size: rem(16) auto;
                }
            }
            input {
                width: 99%;
                height: rem(36);
                border: none;
                padding-left: rem(53);
                font-size: rem(15);
                color: #3E3A39;
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                outline: none;
                background: #fff;
                border-radius: rem(4);
                border: 1px solid #E5E5E5;
            }
        }
        .button {
            background: #FFD900;
            border-radius: rem(4);
            height: rem(45);
            line-height: rem(45);
            text-align: center;
            font-size: rem(15);
            color: #3E3A39;
            font-weight: bold;
            margin-top: rem(10);
        }
        .item {
            position: relative;
            padding-bottom: rem(33);
            .warn {
                font-size: rem(12);
                position: absolute;
                right: 0;
                top: rem(36);
                color: #FF5555;
                padding: rem(5) 0;
                span {
                    display: block;
                    width: rem(16);
                    height: rem(16);
                    padding: rem(2);
                    padding-right: rem(4);
                    float: left;
                    text-align: center;
                } 
                img {
                    height: 100%;
                }
            }
        }
    }
    .bottom {
        text-align: center;
        padding-top: rem(10);
        p {
            width: rem(50);
            height: rem(50);
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
        h3 {
            font-size: rem(18);
            color: #3E3A39;
            padding: rem(15) 0 rem(4);
        }
        span {
            display: block;
            font-size: rem(12);
        }
    }
}
.footer {
    margin-top: rem(-20);
}
</style>

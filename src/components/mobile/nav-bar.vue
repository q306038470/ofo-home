<template>
    <div class="navBar">
        <div class="navButton" @click="showNav">
            <!-- <img class="bg" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/element.png" alt=""> -->
            <svg class="bg" width="61px" height="42px" viewBox="0 0 122 88" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
                <title>Oval 2</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="首页" transform="translate(0.000000, -117.000000)" fill="#FFD900">
                        <g id="nav" transform="translate(0.000000, 117.000000)">
                            <g id="Group-4">
                                <circle id="Oval-2" cx="47" cy="44" r="75"></circle>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            <div class="combine" v-if="!combined">
                <!-- <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/menu.png" alt=""> -->
                <svg width="18px" height="9px" viewBox="0 0 36 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
                    <title>Group 5</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="新闻" transform="translate(-30.000000, -152.000000)" fill="#3E3A39">
                            <g id="nav" transform="translate(0.000000, 117.000000)">
                                <g id="Group-5" transform="translate(30.000000, 35.000000)">
                                    <rect id="Rectangle-4" x="0" y="0" width="36" height="5" rx="2.5"></rect>
                                    <rect id="Rectangle-4-Copy" x="0" y="13" width="36" height="5" rx="2.5"></rect>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div class="combined" v-else>
                <!-- <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/closed.png" alt=""> -->
                <svg width="14.5px" height="14.5px" viewBox="0 0 27 27" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
                    <title>Combined Shape</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="首页（菜单）-copy" transform="translate(-35.000000, -147.000000)" fill="#3E3A39">
                            <g id="nav" transform="translate(0.000000, 117.000000)">
                                <g id="Group-4">
                                    <path d="M48.495689,39.9644661 L39.3033009,30.7720779 L39.3033009,30.7720779 C38.3269901,29.7957672 36.7440777,29.7957672 35.767767,30.7720779 L35.767767,30.7720779 L35.767767,30.7720779 C34.7914562,31.7483887 34.7914562,33.3313011 35.767767,34.3076118 L44.9601551,43.5 L35.767767,52.6923882 L35.767767,52.6923882 C34.7914562,53.6686989 34.7914562,55.2516113 35.767767,56.2279221 L35.767767,56.2279221 L35.767767,56.2279221 C36.7440777,57.2042328 38.3269901,57.2042328 39.3033009,56.2279221 L48.495689,47.0355339 L57.6880772,56.2279221 C58.6643879,57.2042328 60.2473003,57.2042328 61.2236111,56.2279221 C62.1999218,55.2516113 62.1999218,53.6686989 61.2236111,52.6923882 L52.0312229,43.5 L61.2236111,34.3076118 C62.1999218,33.3313011 62.1999218,31.7483887 61.2236111,30.7720779 C60.2473003,29.7957672 58.6643879,29.7957672 57.6880772,30.7720779 L48.495689,39.9644661 Z" id="Combined-Shape"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <img @click="goMain" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo.svg" alt="" class="logo">
        <div v-show="flag" id="mask" @click="maskClick"></div>
        <ul v-show="flag" class="navList">
            <li v-for="(value, index) of values"  :key="index" :class="[value.checked ? 'curDemo' : '']" class="navBottom" @click="changePage(value, values)">{{ value.text }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'navBar',
    data() {
        return{
            value: [{text: "首页", index: 0, checked: true, flag: true},
                    {text: "新闻", index: 1, checked: false, flag: true},
                    {text: "关于", index: 2, checked: false, flag: false}],
            combined: false,
            flag: false
        }
    },
    props: ['values','isClicked'],
    methods: {
        showNav() {
            this.combined = !this.combined;
            this.flag = !this.flag;
            if (this.flag) {
                document.body.style.overflow = 'hidden';
                document.getElementsByClassName('navBar')[0].style.position = 'fixed';
            }
            else {
                document.body.style.overflow = 'auto';
                document.getElementsByClassName('navBar')[0].style.position = 'relative';
            }
            this.$emit("clicked");
        },
        changePage(value,values) {
            window.current.a = 1;
            window.checkItem.a = 0;
            for (var i = 0; i < values.length; i++) {
                values[i].checked = false;
            }
            values[value.index].checked = true;

            if (value.text == '首页') {
                this.$router.push('/');
            }else if (value.text == '新闻') {
                this.$router.push('/news');
            }else if (value.text == '关于') {
                this.$router.push('/about');
            }else if (value.text == '商业合作') {
                this.$router.push('/cooperation');
            }
            document.body.style.overflow = 'auto';
        },
        maskClick() {
            this.showNav();
        },
        goMain() {
            this.$router.push('/');
        }

    },
    mounted () {
        let mask = document.getElementById('mask');
        mask.style.height = (window.innerHeight - this.$el.clientHeight + 100) + 'px';
    }

}
</script>


<style lang="scss" scoped>
@import '../../style/rem.scss';

    .navBar{
        position: relative;
        height: rem(44);
        width: 100vw;
        background-color: #ffffff;
        left: 0;
        top: 0;
        z-index: 9999;
    }
    .navBar .navButton .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: rem(61);
        height: rem(44);
    }
    .navBar .navButton .combine{
        position: absolute;
        left: rem(15);
        top: 50%;
        transform: translateY(-50%);
    }
    .navBar .navButton .combine svg{
        width: rem(18);
        height: rem(9);
    }
    .navBar .navButton .combined{
        position: absolute;
        left: rem(17.5);
        top: rem(15);
    }
    .navBar .navButton .combined svg{
        width: rem(14.5);
        height: rem(14.5);
    }
    .navBar .logo{
        position: absolute;
        left: 50%;
        top: 50%;
        width: rem(90);
        height: rem(19);
        transform: translateX(-50%) translateY(-50%);;
    }
    .navBar .navList{
        display: block;
        background-color: #fff;
        opacity: 0.9;
        position: fixed;
        z-index: 100;
        left: 0;
        top: rem(43.5);
    }
    .navBar .navList li{
        display: block;
        width: 100vw;
        height: rem(57);
        line-height: rem(57);
        padding-left: rem(50.5);
        font-family: PingFangSC-Regular;
        font-size: rem(15);
        z-index: 100;
        color: #3E3A39;
    }
    .navBar .navList .curDemo{
        font-family: PingFangSC-Semibold;
        font-weight: 700;
        font-size: rem(15);
        color: #3E3A39;
        background-image: url('http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/menu_select.svg');
        background-size: rem(17) rem(12);
        background-position: 82% rem(24);
        background-repeat: no-repeat;
    }
    .navBar .navList .navBottom::after,{
        content: '';
        display: block;
        margin-right: rem(18);
        opacity: 0.1;
        width: 86%;
        height: 1px;
        background: #000;
    }
    .navBar .navList .navBottom:last-of-type::after{
        height: 0;
    }

    .navBar #mask {
        position: fixed;
        left: 0;
        top: rem(43.5);
        z-index: 99;
        width: 100%;
        background-color: rgba(0,0,0, .6);
    }
</style>


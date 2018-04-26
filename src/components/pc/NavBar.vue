<template>
    <div :class="[(flag||scroll) ? 'con' : 'con2']">
        <img v-if="(flag||scroll)" @click="goMain" class="pic" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_black.svg" alt="">
        <img v-else @click="goMain" class="pic" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_white.svg" alt="">
        <div :class="[(flag||scroll) ? 'nav' : 'nav2']">
            <li v-for="(item,index) in arr" @click="check(item,arr)" :class="[item.checked ? 'active' : 'inact']" :key="index">{{ item.title }}</li>
        </div>
        <div :class="[(flag||scroll) ? 'line' : 'line2']"></div>
    </div>
</template>

<script>
    export default {
        name: 'NavBar',
        props: ['arr','imgSrc','flag'],
        data: function () {
            return {
            scroll: '',
            img: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/logo_black.svg',
            }
        },
        methods: {
            check (item,items) {
                sessionStorage['savedWhichKind'] = '';
                sessionStorage['savedCurrentPage'] = '';
                if (item.title == '首页') {
                    this.$router.push('/');
                }else if (item.title == '新闻') {
                    this.$router.push('/news');
                }else if (item.title == '关于') {
                    this.$router.push('/about');
                }else if (item.title == '商业合作') {
                    this.$router.push('/cooperation');
                }

            },
            menu() {
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            },
            goMain() {
                this.$router.push('/');
            }
        },
        mounted() {
            window.addEventListener('scroll', this.menu);
        }

    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
        list-style: none;
    }
    li {
        cursor: pointer;
    }
    .con {
        width: 100vw;
        height: 5vw;
        line-height: 5vw;
        position: fixed;
        z-index: 250;
        background: #ffffff;
        transition: background-color 1s;
    }
    .con2 {
        width: 100vw;
        height: 5vw;
        line-height: 5vw;
        position: fixed;
        z-index: 250;
        background: none;
        transition: background-color 1s;   
    }
    .anima {
        animation: headchange 2s linear 1s 1 normal forwards;
    }
    .line {
        width: 100vw;
        height: 1px;
        background: #000000;
        opacity: 0.1;
        position: absolute;
        top: 5vw;
    }
    .line2 {
        width: 95vw;
        height: 1px;
        background: #fff;
        opacity: 0.3;
        position: absolute;
        top: 5vw;
        left: 50%;
        margin-left: -47.5vw;
    }
    .pic {
        position: absolute;
        cursor: pointer;
        width: 10vw;
        height: 2.1vw;
        display: inline-block;
        left:50%;
        top: 50%;
        margin-left: -5vw;
        margin-top: -1.05vw;
    }
    .nav {
        margin-left: 2.5vw;
        position: absolute;
        display: inline-block;
        top: 0px;
        color: #000;
    }
    .nav2 {
        margin-left: 2.5vw;
        position: absolute;
        display: inline-block;
        top: 0px;
        color: #fff;
    }
    .inact {
        float:left;
        margin-right: 2.1vw;
        font-family: PingFangSC-Regular;
        font-size: 1vw;
        opacity: 0.5;
    }
    .active {
        float:left;
        margin-right: 2.1vw;
        font-family: PingFangSC-Regular;
        font-size: 1vw;
        opacity: 1;
    }
</style>

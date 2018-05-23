<template>
    <div>
        <nav-bar class="navbar" :arr="arr" :imgSrc="imgSrc" :flag="flag"></nav-bar>
        <text-head :imgUrl="videoUrl" :text="text" :title="title"></text-head>
        <text-bar :items="items"></text-bar>
        <about-ofo v-if="items[0].checked"></about-ofo>
        <about-develop v-if="items[1].checked"></about-develop>
        <!-- <about-team v-if="items[2].checked"></about-team> -->
        <!-- <about-money v-if="items[3].checked"></about-money> -->
        <about-gov v-if="items[2].checked"></about-gov>
        <about-partner v-if="items[3].checked"></about-partner>
        <about-prize v-if="items[4].checked"></about-prize>
        <about-join v-if="items[5].checked"></about-join>
        <foot class="footer"></foot>
    </div>

</template>

<script>
    import NavBar from '../../../components/pc/NavBar';
    import textBar from '../../../components/pc/textBar';
    import foot from '../../../components/pc/footer';
    import aboutCity from '../../../components/pc/about/aboutCity';
    import aboutOFO from '../../../components/pc/about/aboutOFO';
    import aboutDevelop from '../../../components/pc/about/aboutDevelop';
    import aboutGov from '../../../components/pc/about/aboutGov';
    // import aboutMoney from '../../../components/pc/about/aboutMoney';
    import aboutPartner from '../../../components/pc/about/aboutPartner';
    import aboutPrize from '../../../components/pc/about/aboutPrize';
    import aboutJoin from '../../../components/pc/about/aboutJoin';
    // import aboutTeam from '../../../components/pc/about/aboutTeam';
    import textHead from '../../../components/pc/textHead';

    export default {
        name: 'About',
        data: function () {
            return {
                items: [{text: "关于ofo小黄车",checked:true,index:0},
                        {text: "发展历程",checked:false,index:1},
                        // {text: "创始团队",checked:false,index:2},
                        // {text: "融资情况",checked:false,index:3},
                        {text: "政府合作",checked:false,index:2},
                        {text: "合作伙伴",checked:false,index:3},
                        {text: "获奖情况",checked:false,index:4},
                        {text: "加入我们",checked:false,index:5}],
                arr: [{title:'首页',checked:false,index:0},{title:'新闻',checked:false,index:1},{title:'关于',checked:true,index:2},{title:'商业合作',checked:false,index:3}],
                imgSrc: 2,
                flag:true,
                videoUrl: 'http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/about.png',
                title: '关于我们',
                text: 'ofo小黄车，全球最大的无桩共享单车平台'
            }
        },
        components: {
            'nav-bar': NavBar,
            'text-bar': textBar,
            'foot': foot,
            'about-ofo': aboutOFO,
            'about-develop': aboutDevelop,
            // 'about-team': aboutTeam,
            // 'about-money': aboutMoney,
            'about-city': aboutCity,
            'about-gov': aboutGov,
            'about-partner': aboutPartner,
            'about-prize': aboutPrize,
            'text-head': textHead,
            'about-join': aboutJoin
        },
        created() {
            window.scrollTo(0, 0);
        }
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;

    }
    .header {
        width: 100vw;
    }
    .header .about-video {
        width: 100vw;
        height: 430px;
        position: absolute;
        display: block;
        top: 0;
    }
    .textTitle {
        width: 100vw;
        text-align: center;
        font-size: 42px;
        font-weight: bold;
        color: #FFFFFF;
    }
    .text {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #FFFFFF;
    }
    .footer{
        margin-top:40px;
    }
</style>

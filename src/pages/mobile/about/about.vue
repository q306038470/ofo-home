<template>
    <div class="about_wrapper" v-title data-title="ofo-关于">
        <nav-bar :values="values"></nav-bar>
        <nav-head :items="items" :page="page"></nav-head>
        <div class="up-about-text">
            <div class="about_text">
            <about-ofo v-if="this.items[0].checked"></about-ofo>
            <about-develop v-if="this.items[1].checked"></about-develop>
            <!-- <about-team v-if="this.items[2].checked"></about-team> -->
            <!-- <about-money v-if="this.items[3].checked"></about-money> -->
            <about-gov v-if="this.items[2].checked"></about-gov>
            <about-partner v-if="this.items[3].checked"></about-partner>
            <about-prize v-if="this.items[4].checked"></about-prize>
            <about-join v-if="this.items[5].checked"></about-join>
            </div>
        </div>
        <foot class="foot-mar"></foot>
    </div>
</template>

<script>
    import utils from '@/util/utils';
    import navBar from '../../../components/mobile/nav-bar';
    import navHead from '../../../components/mobile/nav-head';
    import foot from '../../../components/mobile/foot';
    import aboutOFO from '../../../components/mobile/about/aboutOFO';
    import aboutDevelop from '../../../components/mobile/about/aboutDevelop';
    import aboutGov from '../../../components/mobile/about/aboutGov';
    // import aboutMoney from '../../../components/mobile/about/aboutMoney';
    import aboutPartner from '../../../components/mobile/about/aboutPartner';
    import aboutPrize from '../../../components/mobile/about/aboutPrize';
    import aboutJoin from '../../../components/mobile/about/aboutJoin';
    // import aboutTeam from '../../../components/mobile/about/aboutTeam';

    export default {
        name: 'MobileAbout',
        data() {
            return{
                values: [{text: "首页", index: 0, checked: false, flag: true},
                        {text: "新闻", index: 1, checked: false, flag: true},
                        {text: "关于", index: 2, checked: true, flag: false},
                        {text: "商业合作", index: 3, checked: false, flag: false}],
                items:[ {text: "关于ofo小黄车",checked:true,index:0},
                        {text: "发展历程",checked:false,index:1},
                        // {text: "创始团队",checked:false,index:2},
                        // {text: "融资情况",checked:false,index:3},
                        {text: "政府合作",checked:false,index:2},
                        {text: "合作伙伴",checked:false,index:3},
                        {text: "获奖情况",checked:false,index:4},
                        {text: "加入我们",checked:false,index:5}],
                page: 1
            }
        },
        methods: {},
        components: {
            'nav-bar': navBar,
            'nav-head': navHead,
            'foot': foot,
            'about-ofo': aboutOFO,
            'about-develop': aboutDevelop,
            // 'about-team': aboutTeam,
            // 'about-money': aboutMoney,
            'about-gov': aboutGov,
            'about-partner': aboutPartner,
            'about-prize': aboutPrize,
            'about-join': aboutJoin,
        },
    }
</script>


<style lang="scss" scoped>
    @import "../../../style/rem.scss";
        .up-about-text {
            width: 100vw;
            height: auto;
            display: block;
            overflow: hidden;
        }
        .about_text {
            width: 100vw;
            // margin: 0 auto;
        }
        .about-foot {
            width: 100vw;
        }
        .foot-mar{
            margin-top:rem(-20);
        }
</style>

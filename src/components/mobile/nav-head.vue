<template>
    <div class="mobile-nav-wrapper">
        <div class="nav-wrapper" id="nav-wrapper">
            <div class="nav-head" id="nav-head">
                <ul class="wrapper" :class="[(page==1) ? 'wrapper2' : 'wrapper1']">
                    <li v-for="item in items" :class="[item.checked ? 'check' : '']" @click="goCoupons(item,items)">
                        <p> {{ item.text }} </p>
                    </li>
                    <li><p class="useless">|</p></li>
                </ul>
            </div>
            <div class="nav-bottom"></div>
        </div>
    </div>
   
</template>

<script>
    window.checkItem = {a: 0};
    export default {
        name: 'nav-head',
        data() {
            return{
                scroll: 0
            }
        },
        props: ['items','date','page'],
        methods: {
            goCoupons (item,items) {
                for (var i = 0; i < items.length; i++) {
                    items[i].checked = false;
                }
                window.current.a = 1;
                window.checkItem.a = item.index;
                items[item.index].checked = true;
                this.$emit('selectPgs', item.index);
                this.setScrollCenter(item.index);
                document.body.scrollTop = 0 + 'px';
                document.documentElement.scrollTop = 0 + 'px';
                window.pageYOffset = 0;
            },
            setScrollCenter(idx) {
                var navHead = document.getElementById('nav-head');
                var aLi = navHead.getElementsByTagName('li');
                var screenWidth = navHead.offsetWidth;
                var oUl = navHead.getElementsByTagName('ul');
                for(var i=0; i<aLi.length; i++) {
                    aLi[i].tmpLeft = aLi[i].offsetLeft + aLi[i].offsetWidth/2;
                    aLi[i].tmpRight = oUl[0].offsetWidth - aLi[i].tmpLeft;
                }
                if(aLi[idx].tmpLeft>screenWidth/2 && aLi[idx].tmpRight>screenWidth/2) {
                    var shouldLeft = -(aLi[idx].tmpLeft-screenWidth/2);
                    navHead.scrollLeft = -shouldLeft;
                } else {
                    if(aLi[idx].tmpLeft>screenWidth/2) {
                        navHead.scrollLeft = oUl[0].offsetWidth;
                    } else {
                        navHead.scrollLeft = 0;
                    }
                }
            },
            menu() {
                var navHead = document.getElementById('nav-head');
                var oNavWrapper = document.getElementById('nav-wrapper');
                this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if(this.scroll > 42) {
                    oNavWrapper.style.position = 'fixed';
                    oNavWrapper.style.top = 0;
                } else {
                    oNavWrapper.style.position = 'relative';
                }
            },
            steBarCenter() {
                
            }
        },
        created() {
            for (var i = 0; i < this.items.length; i++) {
                    this.items[i].checked = false;
            }
            this.items[window.checkItem.a].checked = true; 
        },
        mounted() {
            window.addEventListener('scroll', this.menu);
            this.setScrollCenter(window.checkItem.a);
        },
        destroyed() {
            window.removeEventListener('scroll', this.menu);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/rem.scss';

    * {
        margin: 0;
        padding: 0;
    }
    .mobile-nav-wrapper {
        // height: rem(62);
        height: rem(57);
    }
    .nav-wrapper {
        position: relative;
        width: 100vw;
        z-index: 100;
        // height: rem(62);
        height: rem(57);
        overflow: hidden;
        ::-webkit-scrollbar {
            display: none;
        }
        .nav-bottom {
            left: 0;
            bottom: 0;
            z-index: 100;
            width: 100vw;
            height: rem(4);
            position: absolute;
            background-color: #ffffff;
        }
        .nav-head {
            position: relative;
            width: 100vw;
            height: rem(69);
            background-color:#fff;
            overflow: hidden;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
            ::-webkit-scrollbar {
                display: none;
            }
            z-index: 200;
            .wrapper1 {
                width: rem(500);
            }
            .wrapper2 {
                width: rem(650);
            }
            .wrapper {
                // position: absolute;
                // height: rem(62);
                height: rem(57);
                // overflow:hidden;
                overflow-x: scroll;
                -webkit-overflow-x: scroll;
                display: flex;
                justify-content: flex-start;
                flex-flow:row nowrap;  
                justify-content:space-between; 
                -webkit-overflow-scrolling: touch;
                ::-webkit-scrollbar {
                    display: none;
                }
                li {
                    height: rem(57);
                    margin-left: rem(18);
                    word-break: keep-all;
                    text-align: center;
                    p {
                        margin-top: rem(18);
                        height: rem(21);
                        display: inline-block;
                        word-break: keep-all;
                        line-height: rem(21);
                        font-family: PingFangSC-Regular;
                        font-size: rem(15);
                        color: #3E3A39;
                        flex-flow:row nowrap;  
                        justify-content:space-between; 
                    }
                }
                .useless {
                    opacity: 0;
                }
                .check{
                    border-bottom: rem(2) solid #FFD900;
                    p{
                        font-family: PingFangSC-Semibold;
                        font-weight: 700;
                    }
                }
            }
        }
    }
</style>

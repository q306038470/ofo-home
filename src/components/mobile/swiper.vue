<template>
    <div class="swiper-wrap">
        <div class="swiper-container" :class="transition ? 'transition' : ''" :style="containerStyle">
            <div class="swiper-slide" v-for="(v, i) in dataArr" :style="slideStyle" :key="i">
                <img :src="v" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import utils from '@/util/utils';


export default {
    name: 'navBar',
    data() {
        return{
           translateX: 0,
           left: 0,
           transition: true,
           count: 0
        }
    },
    props: ['data'],
    computed: {
        containerStyle(){
            return {
                transform: `translateX(${this.translateX}%)`,
                left: `${this.left}%`,
                width: `${this.dataArr.length * 100}%`
            }
        },
        slideStyle(){
            return {
                width: `${100 / this.dataArr.length}%`
            }
        },
        dataArr(){
            let arr = [].concat(this.$props.data);
            arr.push(arr[0]);
            return arr;
        }
    },
    methods: {
        mTnit() {
            let timer = setInterval(() => {
                if (this.translateX >  -(100 - 100 / this.dataArr.length)) {
                    this.translateX = this.translateX - 100 / this.dataArr.length;
                    this.transition = true;
                    if(this.translateX <= -(100 - 100 / this.dataArr.length)){
                        setTimeout(() => {
                            this.translateX = 0;
                            this.transition = false;
                        },1000)
                    }
                }
            }, 2000)
            
        },
        pcInit(){
            let timer = setInterval(() => {
                if (this.left <= (-100 * (this.dataArr.length - 1))) {
                    this.left = 0;
                }
                this.left -= 1;
                if (this.left % 100 == 0) {
                    clearInterval(timer);
                    setTimeout(() => {
                        this.pcInit();
                        this.count ++;
                    },2000)
                }
            }, 10)
        }
    },
    mounted () {
        let dev = utils.devicetype();
        let isPC = (!dev.isAndroid && !dev.isIOS) ? true : false;
        if (isPC) {
            this.pcInit();
        } else {
            this.mTnit();
        }
    }

}
</script>


<style lang="scss" scoped>
@import "../../style/rem.scss";
@import "../../style/normalize.scss";
@import "../../style/reset.scss";

img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.swiper-wrap {
    width: 100%;
    height: 100%;
    position: relative;
}
.swiper-container {
    overflow: hidden;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transition: transform 0s linear;
    -moz-transition: transform 0s linear;
    -ms-transition: transform 0s linear;
    -o-transition: transform 0s linear;
}
.transition {
    transition: transform 1s linear;
    -moz-transition: transform 1s linear;
    -ms-transition: transform 1s linear;
    -o-transition: transform 1s linear;
}
.swiper-slide {
    height: 100%;
    float: left;
}
</style>


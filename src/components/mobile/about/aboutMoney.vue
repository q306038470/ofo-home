<template>
    <div class="earn">
        <div class="context">
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2015年3月17日</span><span class="number">天使轮 数百万元</span></p>
                <div class="line"></div>
            </div>
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2016年4月28日</span><span class="number">pre-A  900万元</span></p>
                <div class="line"></div>
            </div>                
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2016年9月2日</span><span class="number">A轮  2500万元</span></p>
                <div class="line"></div>
            </div>                
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2016年9月2日</span><span class="number">B轮  数千万美元</span></p>
                <div class="line"></div>
            </div>                
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2016年9月26日</span><span class="number">B+轮 数千万美元</span></p>
                <div class="line"></div>
            </div>                
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2016年10月10日</span><span class="number">C轮  1.3亿美元</span></p>
                <div class="line"></div>
            </div>                
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2017年3月1日</span><span class="number">D轮  4.5亿美元</span></p>
                <div class="line"></div>
            </div>                
            <div class="time">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/mobile/aboutTimeLine.png" alt="">
                <p><span class="date">2017年7月1日</span><span class="number">E轮   7亿美元</span></p>
            </div>                
        </div>
        <div class="clear"></div>
    </div>
</template>


<script>
export default {
    name: 'aboutMoney'
}
</script>


<style lang="scss" scoped>
@import '../../../style/rem.scss';

*{
    padding: 0;
    margin: 0;
}
.clear{
    content: "";
    clear: both;
}
.earn{
    margin-bottom: rem(50);
    width: rem(339);
    margin-top: rem(18);
}
.time{
    img {
        float: left;
        margin-right: rem(14);
        margin-top: rem(6);
        width: rem(11);
        height: rem(11);
    }
    .line{
        margin-left: rem(4.25);
        width: rem(2);
        opacity: 0.1;
        background: #000000;
        border-radius: rem(50);
        height: rem(43);
    }
}

.context{
    margin-top: rem(10);
    margin-left: rem(19);
    .date{
        font-family: PingFangSC-Semibold;
        font-weight: 700;
        font-size: rem(15);
        color: #3E3A39;
        height: rem(21);
        line-height: rem(21);
        font-weight:700;
    }
    .number{
        height: rem(21);
        line-height: rem(21);
        font-family: PingFangSC-Regular;
        font-size: rem(15);
        color: #3E3A39;
        margin-left: rem(15);
    }
}
</style>

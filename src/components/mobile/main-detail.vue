<template>
    <div class="main-detail">
        <div v-if="flag" class="demoLeft">
            <div class="left">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/wulianwang.png" alt="">
            </div>
            <div class="right">
                <span class="demo-title">{{title}}</span>
                <p class="demo-detail">{{detail}}</p>
            </div>
            <div style="clear=both"></div>
        </div>
        <div v-else class="demoRight">
            <div class="right">
                <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/allWorld.png" alt="">
            </div>
            <div class="left">
                <span class="demo-title">{{title}}</span>
                <p class="demo-detail">{{detail}}</p>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "main-detail",
        data() {
            return {  
            }
        },
        props:['flag','url','title','detail']
    }
</script>

<style>

    *{
        margin : 0;
        padding : 0;
    }
    .main-detail{
        margin-top: 20px;
        width: 100vw;
    }
    
    .demoLeft .left{
        margin-left: 82px;
        float: left;
    }
    .demoLeft .left img{
        width: 678px;
        height: 360px;
    }
    .demoLeft .right{
        margin-top: 120px;
        margin-left: 50px;
        float: left;
    }
    .demoLeft .right .demo-title{
        display: block;
        height: 28px;
        line-height: 28px;
        font-family: PingFangSC-Semibold;
        font-weight: 700;
        font-size: 20px;
        color: #3E3A39;
    }
    .demoLeft .right .demo-detail{
        width: 400px;
        margin-top: 8px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #3E3A39;
        line-height: 20px;
    }
    
    .demoRight .right{
        margin-right: 85px;
        float: right;
    }
    .demoRight .right img{
        width: 585px;
        height: 390px;
    }
    .demoRight .left{
        float: right;
        margin-top: 100px;
        margin-right: 50px;
    }
    .demoRight .left .demo-title{
        display: block;
        height: 28px;
        line-height: 28px;
        font-family: PingFangSC-Semibold;
        font-weight: 700;
        font-size: 20px;
        color: #3E3A39;
    }
    .demoRight .left .demo-detail{
        width: 400px;
        margin-top: 8px;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #3E3A39;
        line-height: 20px;
    }
    .clear{
        clear: both;
        content: "";
    }
</style>

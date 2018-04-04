<template>
    <div class="header">
        <div class="mc"></div>
        <video :src="video" autoplay loop></video>
        <p class="textTitle">{{ title }}</p>
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'textHead',
        props:['video','title','text'],
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    ul li {
        cursor: pointer;
    }
    .header {
        width: 100vw;
        height: 29.9vw;
        position: relative;
    }
    .header .mc {
        position: absolute;
        width: 100%;
        height: 29.9vw;
        opacity: 0.3;
        background: #000000;
        z-index: 222;
        top: 5vw;
    }
    .header video {
        position: absolute;
        width: 100%;
        top: 5vw;
        z-index: 0;
    }
    .textTitle {
        position: absolute;
        margin-top: 17.2vw;
        width: 100vw;
        text-align: center;
        font-size: 2.9vw;
        font-weight: bold;
        color: #FFFFFF;
        z-index: 230;
    }
    .text {
        position: absolute;
        text-align: center;
        width: 100vw;
        margin-top: 21.3vw;
        font-family: PingFangSC-Regular;
        font-size: 1.25vw;
        color: #FFFFFF;
        z-index: 230;
    }
</style>

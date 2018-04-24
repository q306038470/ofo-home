<template>
  <div class="contain">
    <div class="wrapper">
      <img class="circle1" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_title_round_1.svg" alt="">
      <img class="title" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_title.svg" alt="">
      <!-- <img class="text" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_subtitle.svg" alt=""> -->
      <p class="text">我们已服务于全球21个国家，超过250座城市，2亿用户</p>
      <img class="circle2" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_title_round_2.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'iconPic'
  }
</script>
<style scoped>
  @keyframes demotitle {
    0%{opacity: 0;}
    25%{opacity: 1;}
    100%{opacity: 1;}
  }
  @keyframes demotext {
    0%{opacity: 0;}
    25%{opacity: 0;}
    50%{opacity: 1;}
    100%{opacity: 1;}
  }
  @keyframes democircle {
    0%{opacity: 0;}
    50%{opacity: 0;}
    75%{opacity: 1;}
    100%{opacity: 1;}
  }
  .contain {
    position: relative;
    width: 48.7vw;
    min-height: 50vw;
    /* background-color: #000000; */
  }
  .wrapper {
    position: absolute;
    width: 43.8vw;
    height: 13.5vw;
    left: 50%;
    margin-left: -24.35vw;
    /* background-color: #000000; */
  }
  .circle1 {
    position: absolute;
    width: 13.3vw;
    top: 0;
    left: 0;
    opacity: 0;
    opacity: 1\9;
    animation: democircle 4s linear 1s 1 normal forwards;
  }
 
  .title {
    position: absolute;
    width: 37.3vw;
    top: 6.1vw;
    left: 4vw;
    opacity: 0;
    opacity: 1\9;
    animation: demotitle 4s linear 1s 1 normal forwards;
  }
  .text {
    position: absolute;
    width: 30vw;
    top: 11.5vw;
    left: 8.5vw;
    opacity: 0;
    opacity: 1\9;
    animation: demotext 4s linear 1s 1 normal forwards;
    color:#fff;
    font-size:1.2vw;
    text-align:center;
    font-weight: bold;
  }
  .circle2 {
    position: absolute;
    width: 6vw;
    bottom: 0;
    right: 0;
    opacity: 0;
    opacity: 1\9;
    animation: democircle 4s linear 1s 1 normal forwards;
  }
</style>

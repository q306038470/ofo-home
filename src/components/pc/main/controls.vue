<template>
  <div class="wrap">
    <div class="mc">
      <div class="play">
        <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/pause.png" alt="">
      </div>
      <div class="vol-top-control">
        <span class="vol-point"></span>
        <div class="vol-pro-bottom">
          <div class="vol-pro-top">
          </div>
        </div>
      </div>
      <div class="vol-bottom-control">
        <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/voice.png" alt="">
        <div class="cur-time">00:00</div>
        <div class="video-pro">
          <span class="video-point"></span>
          <div class="video-pro-bottom">
            <div class="video-pro-top"></div>
          </div>
        </div>
        <div class="total-time">05:20</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'control'
  }
</script>

<style scoped>
  .wrap {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .mc {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
  }
  .mc .play {
    position: absolute;
    left: 48.7vw;
    top: 29.17vw;
  }
  .mc .play img {
    width: 2.64vw;
    height: 4.17vw;
  }
  .vol-top-control {
    position: absolute;
    width: 1.39vw;
    height: 4.17vw;
    left: 27.22vw;
    top: 42.8vw;
  }
  .vol-pro-top {
    position: absolute;
    width: 0.278vw;
    height: 4.17vw;
    border-radius: 100px;
    left: 0vw;
    top: 2.17vw;
    /* 0到4.17vw */
    background-color: rgba(255, 255, 255, 1);
  }
  .vol-point {
    position: absolute;
    width: 0.6vw;
    height: 0.6vw;
    top: 2.17vw;
    /* 0到4.17vw */
    left: 0.21vw;
    background-color: #fff;
    border-radius: 50%;
  }
  .vol-pro-bottom {
    position: absolute;
    height: 4.17vw;
    width: 0.278vw;
    border-radius: 100px;
    left: 0.4vw;
    top: 0;
    background-color: rgba(255, 255, 255, 0.35);
    overflow: hidden;
  }
  .vol-bottom-control {
    position: absolute;
    width: 45vw;
    height: 0.972vw;
    left: 27.22vw;
    top: 47.3vw;
    /* background: deeppink; */
  }
  .vol-bottom-control img {
    display: inline-block;
    width: 1.11vw;
    height: 0.972vw;
  }
  .vol-bottom-control .cur-time {
    position: absolute;
    top: 0;
    width: 2.36vw;
    height: 0.972vw;
    line-height: 0.972vw;
    display: inline-block;
    font-family: SFCompactText-Semibold;
    margin-left: 0.694vw;
    font-size: 0.833vw;
    color: #FFFFFF;
  }
  .vol-bottom-control .video-pro {
    position: absolute;
    width: 36.1vw;
    height: 0.278vw;
    top: 0.347vw;
    left: 4.9vw;
  }
  .video-point {
    position: absolute;
    width: 0.5vw;
    height: 0.5vw;
    background-color: #fff;
    border-radius: 50%;
    left: 10vw;
    /* 从0 到36.1vw */
    top: -1px;
  }
  .vol-bottom-control .video-pro .video-pro-bottom {
    position: absolute;
    width: 36.1vw;
    height: 0.278vw;
    margin-left: 0.1vw;
    background-color: rgba(255, 255, 255, 0.35);
    overflow: hidden;
    border-radius: 100px;
  }
  .vol-bottom-control .video-pro .video-pro-bottom .video-pro-top {
    position: absolute;
    width: 36.1vw;
    height: 0.278vw;
    top: 0;
    left: -26.1vw;
    /* -36.1vw到0 */
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 1);
  }
  .total-time {
    position: absolute;
    top: 0;
    right: 10px;
    width: 2.36vw;
    height: 0.972vw;
    line-height: 0.972vw;
    display: inline-block;
    font-family: SFCompactText-Semibold;
    margin-left: 0.694vw;
    font-size: 0.833vw;
    color: #FFFFFF;
  }
</style>

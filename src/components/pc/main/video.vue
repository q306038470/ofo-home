<template>
  <div class="mainPlayer">
    <ul class="playList">
      <li class="mar1" @click="retVideo(videoArr,mar1)">
        <div class="mc">
          <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_video_play_nor.svg" alt="">
        </div>
        <img class="videopic" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/aofosbirth.png" alt="">
        <!-- <video src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/aofosbirth.mp4"></video> -->
        <p>一辆ofo的诞生</p>
      </li>
      <li class="mar2 mar" @click="retVideo(videoArr,mar2)">
        <div class="mc">
          <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_video_play_nor.svg" alt="">
        </div>
        <img class="videopic" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/ofo_tec_vis.png" alt="">
        <!-- <video src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/ofoTecVis.mp4"></video>                 -->
        <p>ofo科技访谈</p>
      </li>
      <li class="mar3" @click="retVideo(videoArr,mar3)">
        <div class="mc">
          <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/feed_video_play_nor.svg" alt="">
        </div>
        <img class="videopic" src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/qidianbigdata.png" alt="">
        <!-- <video src="../../..//assets/xiaohuangcheqidian.mp4"></video>                 -->
        <p>ofo小黄车"奇点"大数据</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      mar1: 0,
      mar2: 1,
      mar3: 2,
      check: false,
      videoArr: [
        {
          videoSrc: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/a-ofo-born.mp4",
          // videoSrc: require('@/assets/a-ofo-born.mp4'),

          index: 0
        },
        {
          videoSrc: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/ofo-science-talk.mp4",
          // videoSrc: require('@/assets/ofo-science-talk.mp4'),

          index: 1
        },
        {
          videoSrc: "http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/ofo-big-data.mp4",
          // videoSrc: require('@/assets/ofo-big-data.mp4'),
          index: 2
        }
      ]
    };
  },
  methods: {
    retVideo(arr, mar) {
      var modalFlag = !this.check;
      this.$emit("changecheck", modalFlag, arr[mar].videoSrc);
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.mainPlayer {
  position: absolute;
  width: 100vw;
  cursor: pointer;
  height:31.1vw;
  
  /* height: 13.9vw; */
}
.playList {
  position: absolute;
  width: 88.6vw;
  height: 13.9vw;
  left: 50%;
  top: 50%;
  margin-left: -44.3vw;
  margin-top: -7vw;
  float: left;
}
.playList li {
  width: 27.78vw;
}
.playList li p {
  position: absolute;
  text-align: center;
  top: 14.2vw;
  width: 100%;
  font-family: PingFangSC-Semibold;
  font-size: 1.3vw;
  font-weight: 700;
  color: #3e3a39;
}
.playList li video {
  position: absolute;
  width: 27.78vw;
  height: 13.9vw;
  top: 0;
  left: 0;
  z-index: 200;
}
.mc {
  position: absolute;
  width: 27.78vw;
  height: 13.9vw;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 222;
}
.mc img:hover {
  position: absolute;
  width: 5.56vw;
  height: 5.56vw;
  left: 11.1vw;
  top: 4.17vw;
  opacity: 0.6;
}
.mc img {
  position: absolute;
  width: 5.56vw;
  height: 5.56vw;
  left: 11.1vw;
  top: 4.17vw;
}
.mar1 {
  position: absolute;
  top: 0;
  left: 0;
}
.mar2 {
  position: absolute;
  top: 0;
  left: 30.42vw;
}
.mar3 {
  position: absolute;
  top: 0;
  left: 60.84vw;
}
.videopic {
  width: 100%;
  height: 13.9vw;
}
</style>

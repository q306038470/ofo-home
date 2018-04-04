<template>
  <div class="wrapper">
    <div class="mc"></div>
    <div class="container">
      <div class="del" @click="close(true)">
        <img src="http://ofo.oss-cn-qingdao.aliyuncs.com/ofoweb/official/closed.png" alt="" ref="img">
      </div>
      <div class="video">
        <video :src="videoSrc" controls autoplay ref="myVideo"></video>
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'videoModal',
    props: ['videoSrc'],
    mounted(){
      // console.log(this.$refs.img)
    },
    methods: {
      close (flag) {
        // console.log(111);
        this.$emit('hidden',!flag);
      }
    }
  }
</script>

<style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  .wrapper {
    position: absolute;
    width: 100vw;
    height: 100%;
    z-index: 400;
  }
  .wrapper .container {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 400;
    background-color: rgba(0,0,0,0.95);
  }
  .wrapper .container .del {
    position: absolute;
    z-index: 2;
    left: 30.4px;
    top: 30.4px;
    width: 21.4px;
    height: 21.4px;
    cursor: pointer;
  }
  .wrapper .del img {
    width: 100%;
    cursor: pointer;
  }
  .wrapper .container .video {
    width: 100vw;
    height: 100vh;
  }
  .wrapper .container  video {
    display: block;
    margin: 0 auto;
    height: 40vw;
    position: relative;
    top: 50%;
    margin-top: -20vw;
  }
  .wrapper .mc {
    position: absolute;
    width: 100%;
    height: 101.1%;
    background-color: rgba(0,0,0,0.95);
  }
</style>

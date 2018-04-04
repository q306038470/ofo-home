<template>
  <div class="demoRight">
    <div class="left">
      <span class="title">{{ title }}</span>
      <p class="detail">{{ detail[0] }}</p>
      <button class="btn" v-if="show"></button>
      <!-- <p class="detail">{{ detail[1] }}</p> -->
    </div>
    <div class="right">
      <img :src="imgSrc" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'picRight',
    props: ['imgSrc','title','detail','show'],
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped>
  .demoRight {
    position: relative;
    width: 88.61vw;
    height: 27vw;
  }
  .left {
    position: absolute;
    width: 27.8vw;
    height: 15vw;
    top: 50%;
    left: 22%;
    margin-top: -5vw;
  }
  .left .btn {
    width: 120px;
    height: 36px;
    margin-top: 20px;
    background: #4f93ea;
    color: #fff;
    font-size: 14px;
    font-family: PingFangSC-Semibold; 
    font-weight: 700;   
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  .right {
    height: 27vw;
    overflow: hidden;
  }
  .right img{
    position: absolute;
    width: 40.625vw;
    height: 27.083vw;
    top: 0;
    right: 0;
  }
  .title {
    font-family: PingFangSC-Semibold;
    /* font-size: 1.39vw; */
    font-size: 24px;
    font-weight: 700;
    color: #3E3A39;
    margin-bottom: 16px;
  }
  .detail {
    width: 25vw;
    height: 12vw;
    font-family: PingFangSC-Regular;
    font-size: 0.98vw;
    color: #3E3A39;
    display: inline-block;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>

<template>
  <div class="demoLeft">
    <div class="left">
      <img :src="imgSrc" alt="">
    </div>
    <div class="right">
      <span class="title">{{ title }}</span>
      <p class="detail">{{ detail[0] }}</p>
      <a href="/static/bigdata/index.html" class="btn" v-if="show">数据开放平台</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'picLeft',
    props: ['imgSrc','title','detail','show'],
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped>
  .demoLeft {
    position: relative;
    width: 88.76vw;
    height: 27vw;
  }
  .left {
    height: 27vw;
    overflow: hidden;
  }
  .left img{
    position: absolute;
    width: 40.625vw;
    height: 27.083vw;
    top: 0;
    left: 0;
  }
  .right {
    position: absolute;
    width: 27.8vw;
    height: 15vw;
    top: 50%;
    left: 50%;
    margin-top: -5vw;
  }
  .right .btn {
    display: block;
    width: 120px;
    height: 36px;
    /* margin-top: 20px; */
    background: #4f93ea;
    line-height: 36px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-family: PingFangSC-Semibold;  
    font-weight: 700;  
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  .title {
    font-family: PingFangSC-Semibold;
    /* font-size: 1.39vw; */
    font-size: 24px;
    font-weight: 700;
    color: #3E3A39;
    margin-bottom: 8px;
  }
  .detail {
    width: 27.8vw;
    height: 9vw;
    font-family: PingFangSC-Regular;
    font-size: 0.98vw;
    word-wrap: break-word;
    color: #3E3A39;
    display: inline-block;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 12;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>

<template>
  <div class="contain" @click="gotoPage(idx)">
    <div class="bg"></div>
    <div class="demo1">
      <img class="pic" :src="imgSrc" alt="">
      <div class="context">
        <p class="title">{{ month }}<span class="month">月</span></p>
        <p class="describe">{{ title }}</p>
        <p class="text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'adText',
    props: ['imgSrc','month','title','text','index','idx'],
    data: function () {
      return {
        hash: ['/news/gov','/news/brand','/news/brand6'],
      }
    },
    methods: {
      gotoPage (idx) {
        this.$router.push({path: '/news/detail', query: {titleId: idx}});
      }
    }

  }
</script>

<style scoped>
  .contain {
    position: relative;
    width: 100vw;
    height: 18.75vw;
  }
  .demo1 {
    height: 18.75vw;
    overflow: hidden;
  }
  .demo1 .pic {
    position: absolute;
    width: 88.62vw;
    height: 18.75vw;
    left: 50%;
    top: 0;
    margin-left: -44.31vw;
    z-index: 0;
  }
  .bg {
    position: absolute;
    width: 88.62vw;
    height: 18.75vw;
    background-color: rgba(0, 0, 0, 0.5);
    left: 50%;
    margin-left: -44.31vw;
    z-index: 2;
    overflow: hidden;
  }
  .context {
    position: absolute;
    z-index: 4;
    left: 50%;
    height: 13.6vw;
    margin-left: -42vw;
    margin-top: 1.25vw;
    color:#fff;
    
  }
  .title {
    font-family: PingFangSC-Semibold;
    font-weight: 700;
    font-size: 5vw;
    color: #FFFFFF;
  }
  .month {
    font-family: PingFangSC-Semibold;
    font-weight: 700;
    font-size: 1.67vw;
    color: #FFFFFF;
  }
  .describe {
    width: 34.02vw;
    font-family: PingFangSC-Semibold;
    font-weight: 700;
    font-size: 1.39vw;
    color: #FFFFFF;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text {
    width: 34.02vw;
    /* height: 8.3vw; */
    font-family: PingFangSC-Regular;
    font-size: 0.98vw;
    color: #fff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    /* white-space:nowrap; */
  }
</style>

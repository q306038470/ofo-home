<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
  // import { axiosConfig } from './service/fetch';
  // import { activityHostname, userHostname } from './constant/url';
  // import cache from './util/cache';

  // cache.cookie.set("ofo-tokened", window.getOfoToken(), 7,  'ofo.com');

  // axiosConfig({
  //     'token': window.getOfoToken(),
  //     // 'base_url': userHostname,
  //     'source': window.OFO_ENV.sourceForApi
  // });

  export default {
    name: 'app'
  }
</script>

<style lang="scss">
@import './style/reset.scss';
@import './style/rem.scss';

html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  background-color: #fff;
  overflow-x: hidden;
}
</style>

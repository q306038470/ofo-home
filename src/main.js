// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import vuex from 'vuex'
import App from './App'
import router from './router'
// import store from './vuex/store'
// import VueScroller from 'vue-scroller'
import VConsole from 'vconsole';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import utils from './util/utils';

//使用vuex
// Vue.use(vuex);
// Vue.use(VueScroller);


if (utils.getEnv() == 'development') {
  const vConsole = new VConsole();
}



//vue配置属性
Vue.config.productionTip = false

//配置修改标题的钩子
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
    // window.ofoResponseProxy('setTitle', [el.dataset.title])
  }
})


/**
 * 初始化vue对象
 */
new Vue({
  el: '#app',         //根节点元素
  router,             //路由信息
  // store,              //使用store存储管理数据
  template: '<App/>', //模版信息
  components: { App } //组件信息
})

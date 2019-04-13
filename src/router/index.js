import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/pc/main/main'
import About from '@/pages/pc/about/about'
import News from '@/pages/pc/news/news'
import NewsDetail from '@/pages/pc/news/newsDetail'
import Cooperation from '@/pages/pc/cooperation/cooperation'


import MobileMain from '@/pages/mobile/main/main'
import MobileAbout from '@/pages/mobile/about/about'
import MobileNews from '@/pages/mobile/news/news'
import MobileNewsDetail from '@/pages/mobile/news/newsDetail'
import MobileCooperation from '@/pages/mobile/cooperation/cooperation'
import utils from '../util/utils';


Vue.use(Router)

let pc = [{
    path: '/about',
    name: 'About',
    component: About
}, {
    path: '/',
    name: 'Main',
    component: Main
}, {
    path: '/news',
    name: 'News',
    component: News
}, {
    path: '/news/detail',
    name: 'NewsDetail',
    component: NewsDetail
}, {
    path: '/pic',
    name: 'Main',
    component: Main
}, {
    path: '/cooperation',
    name: 'Cooperation',
    component: Cooperation
}];

let phone = [{
    path: '/',
    name: 'Main',
    component: MobileMain
}, {
    path: '/about',
    name: 'About',
    component: MobileAbout
}, {
    path: '/news',
    name: 'News',
    component: MobileNews
}, {
    path: '/news/detail',
    name: 'NewsDetail',
    component: MobileNewsDetail
}, {
    path: '/cooperation',
    name: 'MobileCooperation',
    component: MobileCooperation
}];

let route = [];
let isPC;
let dev = utils.devicetype();
// isPC = (!dev.isAndroid && !dev.isIOS) ? true : false;
isPC = (!dev.isAndroid && !dev.isIOS) ? false : true;

route = isPC ? pc : phone;
//  route = phone;
export default new Router({
    routes: route
})
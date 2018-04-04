import Vue from 'vue';
import Vuex from 'vuex';
//import createLogger from 'vuex/logger'

Vue.use(Vuex);
//Vue.config.debug = true
//const debug = process.env.NODE_ENV !== 'production'

// 导入各个模块的初始状态和 mutations
import wallet from './modules/wallet';

//创建store对象
export default new Vuex.Store({
    // 组合各个模块
    modules: {
        wallet,
    },
    //strict: debug,
    //moddlewares: debug ? [createLogger()] : []
})

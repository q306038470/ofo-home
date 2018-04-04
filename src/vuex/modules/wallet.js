/**
 * mutation-types类型
 */
import { GET_WALLET_INFO } from '../mutation-types';
import API from '../../service/api';

/**
 * 用统一的函数处理并分发mutation-types。
 * @param type
 * @returns {function({dispatch: *}, ...[*]): *}
 */
function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

const state = {
    info: {"balance":'-',"networkTraffic":12,"refundingBalance":0,"packetnum":'-',"bond":0,"bondDesc":"-","isBondWithdrawing":false,"zhiMaState":0,"zhiMaMsg":"","redPacketBalance":'-',"todayWithdrawCount":0,"realBalance":0,"rechargeBalance":0,"activityBalance":0,"freeBondType":"0","freeBondExpireTime":"","monthCardEndTime":0,"monthCardCount":0,"cardPackageShow":1,"depositStatus":0},
    requestSuccess: false
}

const mutations = {
    [GET_WALLET_INFO](state, values) {
        state.info = values.info;
    },
    requestSuccess(state, values) {
        state.requestSuccess = true;
    }
}

/**
 * actions
 */
const actions = {
    getWalletInfo({commit}) {
        API.wallet({'source-version':window.OFO_ENV.ofoAppSourceVersion})
            .then(data => {
                commit("requestSuccess");
                if (data.errorCode === 200) {
                    commit(GET_WALLET_INFO, data.values);
                } else {
                    window.tip(data.msg);
                }
            }, function(res){
                window.tip('网络请求失败！');
            })
    }
}

export default {
    state,
    actions,
    mutations,
}

/**
 * mutation-types类型
 */
import { SET_TITLE_TEST } from '../mutation-types'

/**
 * 用统一的函数处理并分发mutation-types。
 * @param type
 * @returns {function({dispatch: *}, ...[*]): *}
 */
function makeAction (type) {
    return ({ dispatch }, ...args) => dispatch(type, ...args)
}

const state = {
    title: 'default',
    info: {
        name:''
    }
}

const mutations = {
    [SET_TITLE_TEST](state, newTitle) {
        state.title = newTitle
    }
}


/**
 * actions
 */
const actions = {
    setTitle : makeAction(SET_TITLE_TEST)
}

export default {
    state,
    actions,
    mutations
}
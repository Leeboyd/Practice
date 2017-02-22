import api from '../../assets/js/api'

// Initial state
const state = {
  categories: []
}

// Getter
const getters = {
  sidMapping: (state) => {
    return state.categories.reduce((pre, cur, curindex) => {
      let key = cur.sid
      pre[key] = cur.name
      return pre
    }, {})
  }
}

const actions = {
  //--------------------------------
  // Get category 取得所有分類 step 2
  //--------------------------------
  listCate ({commit}, result) {
    commit('GET_CATE', result)
  },
  //--------------------------------
  // Upd category 更新分類 step 2
  //--------------------------------
  updateCate ({commit}, updata) {
    commit('UPD_CATE', updata)
  },
  //--------------------------------
  // create category 新增分類 step 2
  //--------------------------------
  createCate ({commit}, result) {
    commit('ADD_CATE', result)
  },
  //--------------------------------
  // delete category 刪除分類 step 2
  //--------------------------------
  removeCate ({commit}, sid) {
    commit('DEL_CATE', sid)
  },
}

// Mutations
const mutations = {
  //--------------------------------
  // Get category 取得所有分類 step 3
  //--------------------------------
  GET_CATE (state, result) {
    state.categories = result
  },
  //--------------------------------
  // Upd category 更新分類 step 3
  //--------------------------------
  UPD_CATE (state, updata) {
    state.categories.forEach( (cate) => {
      if ( cate.sid === updata.sid ) {
        cate.name = updata.name
      }
    })
  },
  //--------------------------------
  // create category 新增分類 step 3
  //--------------------------------
  ADD_CATE (state, result) {
    state.categories.push(result)
  },
  //--------------------------------
  // delete category 刪除分類 step 3
  //--------------------------------
  DEL_CATE (state, sid) {
    state.categories = api.removeObjFromArray(state.categories, 'sid', sid)
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}

// Initial state
const state = {
  messages: []
}

// Mutations
const mutations = {
  NEW_MESSAGE (state, msg) {
    console.log('2', state, msg)
    state.messages.push(msg)
  }
}

const actions = {
  newMessage ({commit}, msg) {
    commit('NEW_MESSAGE', msg)
  },
}

export default {
  state,
  mutations,
  actions
}

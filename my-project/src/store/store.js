import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  city: '',
  business: '',
  ak: 'qkKs9dxI75yUR1HSP9TPuV1pQnLgRp2o',
  locationX: '',
  locationy: ''
}
const mutations = {
  add (state) {
    state.count += 1
  },
  reduce (state) {
    state.count -= 1
  }
}

export default new Vuex.Store({
  state,
  mutations
})

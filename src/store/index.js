import { createStore } from 'vuex'
import { Counter } from '@/store/modules/Counter'
import { moduleA } from '@/store/modules/moduleA'

export default createStore({
  state: {
    counter: 1234
  },
  getters: {
    time5(state) {
      return state.counter * 2
    }
  },
  mutations: {
    setCounter(state, value) {
      state.counter = value
    }
  },
  actions: {},
  modules: { Counter, moduleA }
})

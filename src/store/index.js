import { createStore } from 'vuex'

export default createStore({
  state: {
    // 상태값
    cardList: null
  },
  mutations: {
    // state를 바꾸는 역할
    // 상태값은 여기서만 바꿀수있음
    ADD_LIST(state, payload) {
      state.cardList = payload
    }
  },
  actions: {
    // 함수methods와 비슷 (비동기 처리)
  },
  getters: {
    // computed와 비슷
    time5(state) {
      return state.counter * 2
    }
  }
})

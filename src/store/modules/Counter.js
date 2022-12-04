export const Counter = {
  state: () => ({ counter: 6789 }),
  mutations: {
    setCounter(state, value) {
      state.counter = value
    }
  },
  actions: {
    test() {
      console.log(4)
    }
  },
  getters: {
    time2(state) {
      return state.counter - 9
    }
  }
}

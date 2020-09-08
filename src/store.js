import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuexFoo: 'Foo'
  },
  mutations: {

    setSimpleFoo(state, data) {
      state.fooSimple = data;
    },

    setManyFoo(state, { param1, param2, param3 }) {
      state.foo1 = param1;
      state.foo2 = param2;
      state.foo3 = param3;
    }

  },
  actions: {

    DO_A_THING({commit, state}) {
      commit('setSimpleFoo', 'data');
      commit('setManyFoo', {
        param1: 'param1',
        param2: 'param2',
        param3: 'param3'
      });
      console.log(state);
    }

  }
})

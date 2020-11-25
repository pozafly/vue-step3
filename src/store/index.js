import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    // mutations의 첫번째 인자는 반드시 state,
    // 두번째 인자는 context.commit의 두번째 인자인 data를 알기 쉽게 이름을 바꾸어서 넣어줌.
    SET_NEWS(state, news) {
      state.news = news;
    }
  },
  actions: {
    FETCH_NEWS(context) {   // actions 이름. 인자로는 context 를 인자로 반드시 받는다.
      fetchNewsList()   // api에 있는 function. json을 받아옴.
        .then(response => {
          console.log(response.data);
          // context는 commit이란 메서드로 mutations에 선언된 function을 부른다.
          // 2번째 인자로는 api 호출 시 가져온 data를 담는다.
          context.commit('SET_NEWS', response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
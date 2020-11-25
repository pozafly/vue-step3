import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: []
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    }
  },
  actions: {
    FETCH_NEWS({ commit }) {
      fetchNewsList()
        .then(({ data }) => commit('SET_NEWS', data))
        .catch(e => console.log(e));
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then(({ data }) => context.commit('SET_ASK', data))
        .catch(e => console.log(e));
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => commit('SET_JOBS', data))
        .catch(e => console.log(e));
    }
  }
});
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

export default {
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
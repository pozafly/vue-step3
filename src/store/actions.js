import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchUserInfo,
  fetchItemInfo
} from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(response => {
        commit('SET_NEWS', response.data);
        return response;
      })
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
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => commit('SET_USER', data))
      .catch(e => console.log(e));
  },
  FETCH_ITEM({ commit }, item) {
    fetchItemInfo(item)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(e => console.log(e));
  }
}
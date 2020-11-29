import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index.js';

export default {
  FETCH_NEWS({ commit }) {
    return fetchNewsList()
      .then(response => {
        commit('SET_NEWS', response.data);
        return response;
      })
      .catch(e => console.log(e));
  },
  FETCH_ASK(context) {
    return fetchAskList()
      .then(({ data }) => context.commit('SET_ASK', data))
      .catch(e => console.log(e));
  },
  FETCH_JOBS({ commit }) {
    return fetchJobsList()
      .then(({ data }) => commit('SET_JOBS', data))
      .catch(e => console.log(e));
  },
  FETCH_USER({ commit }, name) {
    return fetchUserInfo(name)
      .then(({ data }) => commit('SET_USER', data))
      .catch(e => console.log(e));
  },
  FETCH_ITEM({ commit }, item) {
    return fetchItemInfo(item)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(e => console.log(e));
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch(e => console.log(e));
  }
}
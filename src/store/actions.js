import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobsList, 
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
} from '../api/index.js';

export default {
  // promise
  // FETCH_NEWS({ commit }) {
  //   return fetchNewsList()
  //     .then(response => {
  //       commit('SET_NEWS', response.data);
  //       return response;
  //     })
  //     .catch(e => console.log(e));
  // },

  // async
  async FETCH_NEWS(context) {
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  // store단 오류처리
  async FETCH_ASK(context) {
    try {
      const response = await fetchAskList();
      context.commit('SET_ASK', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // 비구조화 적용 async
  async FETCH_JOBS({ commit }) {
    const response = await fetchJobsList();
    commit('SET_JOBS', response.data);
    return response;
  },
  // api단 오류처리
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },
  // Promise 기반 동기처리
  FETCH_ITEM({ commit }, item) {
    return fetchItemInfo(item)
      .then(({ data }) => commit('SET_ITEM', data))
      .catch(e => console.log(e));
  },
  // async 기반 동기처리
  async FETCH_LIST(context, pageName) {
    const response = await fetchList(pageName);
    context.commit('SET_LIST', response.data);
    return response;
  }
}
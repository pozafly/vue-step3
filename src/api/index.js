import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

async function fetchUserInfo(userName) {
  try {
    const response = await axios.get(`${config.baseUrl}user/${userName}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchItemInfo(item) {
  return axios.get(`${config.baseUrl}item/${item}.json`)
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
}
import Axios from 'axios';
// import config from '../../config/index.js';
// 之所以封装这个axios，是因为在一些请求中，无法上传信息，很尴尬，估计原因是继承的有问题，无法携带headers
const baseUrl = 'http://39.105.41.187:8080';
let axios = Axios.create({
  baseURL: baseUrl,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});
// 添加请求拦截器

axios
  .interceptors
  .request
  .use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
// 添加响应拦截器
axios
  .interceptors
  .response
  .use((res) => {
    let { data } = res;
    return data;
  }, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export const postAxios = (url, data) => {
  return axios.post(url, data);
};
export const getAxios = (url, data) => {
  return axios.get(url, {
    params: data
  });
};

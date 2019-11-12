import Axios from 'axios';
import { Message } from 'view-design';
// import config from '../../config/index.js';
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
    if (data.code !== '0') {
      Message['error']({
        background: true,
        content: data.code
      });
      return Promise.reject(data);
    }
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

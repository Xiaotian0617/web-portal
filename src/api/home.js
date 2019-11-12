const http = require('../lib/http.js');

// 获取菜单
function getMemu() {
  return http.postAxios('/nav-menu/find', {});
}
// 根据文章id获取文章详情
function getArticleById(data) {
  return http.postAxios('/chapter/findById', data);
}

// 根据菜单id获取文章列表
function getArticleList(data) {
  return http.postAxios('/chapter/findByNavMenuId', data);
}

// 首页数据接口
function getHomeData(data) {
  return http.postAxios('/chapter/home', data);
}

module.exports = {
  getMemu,
  getArticleById,
  getArticleList,
  getHomeData
};

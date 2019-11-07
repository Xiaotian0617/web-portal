const http = require('../lib/http.js');

// 获取腾讯课堂分类
function getMemu () {
  return http.postAxios('/nav-menu/find', {});
}
module.exports = {
  getMemu
};

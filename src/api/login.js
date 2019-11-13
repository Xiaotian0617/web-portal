const http = require('../lib/http.js');

// 登录
function doLogin (data) {
  return http.postAxios('/common/login', data);
}

// 注册
function doRegister (data) {
  return http.postAxios('/common/register', data);
}

// 修改
function doUpdate (data) {
  return http.postAxios('/common/update', data);
}

module.exports = {
  doLogin,
  doRegister,
  doUpdate
};

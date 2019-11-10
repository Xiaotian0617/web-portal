const http = require('../lib/http.js');

// 登录
function doLogin (data) {
  return http.postAxios('/common/login', data);
}

// 注册
function doRegister (data) {
  return http.postAxios('/common/register', data);
}

module.exports = {
  doLogin,
  doRegister
};

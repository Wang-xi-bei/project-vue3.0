//服务环境配置
let BASE_URL = '';
const TIMEOUT = 10000;
//开发环境
if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://httpbin.org';
} else if (process.env.NODE_ENV == 'production') {
  //生产环境
  BASE_URL = 'http://httpbin.org/pro';
} else {
  //测试及其他化境
  BASE_URL = 'http://httpbin.org/test';
}
export { BASE_URL, TIMEOUT };

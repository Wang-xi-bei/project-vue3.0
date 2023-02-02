import axios from 'axios';
import { BASE_URL } from './request/config';

//全局配置
axios.defaults.baseURL = BASE_URL;
// axios.defaults.timeout = 1000;
// axios
//   .post('http://httpbin.org/post', { params: { name: '999' } })
//   .then((res) => {
//     console.log(res, '===');
//   });
// axios.get('get', { params: { name: '999' } }).then((res) => {
//   console.log(res, '===');
// });

//单项配置
axios
  .get('get', {
    params: { name: '999' },
    headers: { id: '112', name: 'name' },
    timeout: 10000
  })
  .then((res) => {
    console.log(res, '===');
  });

//axios.all 其实就是promise.all
// axios
//   .all([
//     axios.get('get', { params: { name: 'get' } }),
//     axios.post('post', { params: { name: 'post' }})
//   ])
//   .then((res) => {
//     console.log(res[0].data, '----res');
//   });
//拦截器
//请求拦截
axios.interceptors.request.use(
  (config) => {
    console.log(config, '--拦截成功');
    return config;
  },
  (error) => {
    console.log('拦截失败');
    return error;
  }
);

//响应拦截
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log('响应失败');
  }
);

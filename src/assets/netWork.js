/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
import axios from 'axios'


let netWrok = axios.create({
  baseURL: '/api',
  timeout: 6000,
  // headers: {'X-Custom-Header': 'foobar'}
});

netWrok.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

export default netWrok

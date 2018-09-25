/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
import axios from 'axios'
import muToast from 'muse-ui-toast'

muToast.config({
  position: 'top'
})

let page = {
  toastHandler(data) {   // 更加后台返回的数据结构判断是否弹出提示框
    if (!data || !('show' in data)) {
      return;
    }

    let isShow = data.show;
    let msg = data.msg;
    if (data.state != 10000) {
      isShow = 4;
    }
    //console.log('toastHandler', data);
    if (isShow || isShow == 0) {
      switch (isShow) {
        case 0:
          muToast.message(msg)
          break;
        case 1:
          muToast.info(msg)
          break;
        case 2:
          muToast.success(msg)
          break;
        case 3:
          muToast.warning(msg)
          break;
        case 4:
          muToast.error(msg)
          break;
      }
    }
  },
  complete() {
    //console.log('complete');
  }
}

// let qs=require('qs');
function netWork(obj) {
  if(!obj){
    console.error('请传入正确的参数');
  }
  // console.log('网络请求obj',obj);
  axios.request({
      'Content-Type': 'application/x-www-form-urlencoded',
      method: obj.method,
      url: obj.url,
      timeout: productConfig.timeout || 6000,
      data: obj.method === 'POST' || obj.method === 'PUT' ?obj.data: null,
      params: obj.method === 'GET' || obj.method === 'DELETE' ? obj.data : null,
      baseURL: productConfig.apiPath || '',
      withCredentials: false,
      // headers: {'X-Custom-Header': 'foobar'}
      //`transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
      responseType: 'json',//default
  }).then(function (res) {
    page.toastHandler(res.data);
    if(obj.success){
      obj.success(res)
    }
    if(obj.complete){
      obj.complete(res)
    }
  }).catch(function (err) {

    console.error('network出错',err)
    if(obj.error){
      obj.error(err)
    }
    if(obj.complete){
      obj.complete(err);
    }
  });

}


export default {
  get(obj){
    obj.method='GET ';
    return netWork(obj)
  },
  post(obj){
    obj.method='POST';
    return netWork(obj)
  },
  delete(obj){
    obj.method='DELETE';
    return netWork(obj)
  },
  put(obj){
    obj.method='PUT';
    return netWork(obj)
  },
}

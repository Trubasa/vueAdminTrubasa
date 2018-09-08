/**
 * Created by Trubasa 1141521502@qq.com on 2018/9/7.
 */
import axios from 'axios'
import muToast from 'muse-ui-toast'

muToast.config({
  position:'top'
})


let page={
  toastHandler(data){
    let isShow=data.show
    let msg=data.msg
    console.log('toastHandler',data);
    if(isShow||isShow==0){

      switch (data.show){
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
  }
}

let netWrok = axios.create({
  baseURL: '/api',
  timeout: 6000,
  // headers: {'X-Custom-Header': 'foobar'}
  //`transformResponse`选项允许我们在数据传送到`then/catch`方法之前对数据进行改动
  responseType:'json',//default
  transformResponse:[function(data){
    //在这里根据自己的需求改变数据
    // console.log('res',data)
    page.toastHandler(data)
    return data;
  }],
});




export default netWrok

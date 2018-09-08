/**
 * Created by Trubasa 1141521502@qq.com on 2017/12/21.
 */
import messageBox from '../common/messageBox.vue'
import example from '../common/example.vue'
import windowReszie from '../common/windowReszie.vue'
import truImage from '../common/truImage'
import truLoadMore from '../common/truLoadMore'
import truLoadingBtn from '../common/truLoadingBtn'

var myComponents={
  install:function(Vue){
    /*if(productConfig.isDev){  //开发模式下可看到例子
      Vue.component(example.name,example);
    }*/

    Vue.component(windowReszie.name,windowReszie);
    Vue.component(messageBox.name,messageBox);
    Vue.component(truImage.name,truImage);
    Vue.component(truLoadMore.name,truLoadMore);
    Vue.component(truLoadingBtn.name,truLoadingBtn);


  }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default myComponents;

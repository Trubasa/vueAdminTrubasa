// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/test',
      name: 'test',
      component:resolve => require(['../pages/test'], resolve) //测试
    },
    {
      path: '/login',
      name: 'login',
      component:resolve => require(['../pages/login'], resolve) //登陆
    }
  ]
})

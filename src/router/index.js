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
    },
    {
      path: '/content',
      name: 'content',
      component:resolve => require(['../pages/truContent'], resolve) //主页面
    },
    {
      path: '*',
      name: 'notFound',
      component:resolve => require(['../common/notFound'], resolve) //404
    },
  ]
})

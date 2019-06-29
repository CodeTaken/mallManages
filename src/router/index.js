import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import Login from '../pages/Login/Login'
import User from '../pages/User/User'
import Role from '../pages/Role/Role'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:{
        headerAsideShow:true
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
    {
      path: '/role',
      name: 'Role',
      component: Role,
    },
    {
      path: '/',
      redirect:'/user'
    },

  ]
})

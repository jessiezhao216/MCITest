import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import giveGrades from '@/components/giveGrades'
import Register from '@/components/Register'
import Login from '@/components/Login'
import UserInfo from '@/components/UserInfo'
import changePsd from '@/components/changePsd'
import Newtest from '@/components/Newtest'
import TestContent from '@/components/TestContent'
import TestHistory from '@/components/TestHistory'
import editInfo from '@/components/editInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'LogIn',
      component: Login,
      props: true
    },
    {
      path: '/giveGrades',
      name: 'giveGrades',
      component: giveGrades,
      props: true
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo,
      props: true
    },
    {
      path: '/editInfo',
      name: 'editInfo',
      component: editInfo,
      props: true
    },
    {
      path: '/changePsd',
      name: 'changePsd',
      component: changePsd
    },
    {
      path: '/NewTest',
      name: 'NewTest',
      component: Newtest
    },
    {
      path: '/TestContent',
      name: 'TestContent',
      component: TestContent
    },
    {
      path: '/TestHistory',
      name: 'TestHistory',
      component: TestHistory,
      props: true
    }
  ]
})

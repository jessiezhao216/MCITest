import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import giveGrades from '@/components/giveGrades'
import Register from '@/components/Register'
import Login from '@/components/Login'
import UserInfo from '@/components/userInfo'
import EditInfo from '@/components/editInfo'
import ChangePsd from '@/components/changePsd'
import Newtest from '@/components/Newtest'
import TestContent from '@/components/TestContent'
import TestHistory from '@/components/TestHistory'

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
      name: 'SignIn',
      component: Login,
      props: true
    },
    {
      path: '/giveGrades',
      name: 'grade',
      component: giveGrades,
      props: true
    },
    {
      path: '/UserInfo',
      name: 'userInfo',
      component: UserInfo,
      props: true
    },
    {
      path: '/editInfo',
      name: 'editInfo',
      component: EditInfo,
      props: true
    },
    {
      path: '/changePsd',
      name: 'changePsd',
      component: ChangePsd
    },
    {
      path: '/NewTest',
      name: 'collect',
      component: Newtest
    },
    {
      path: '/TestContent',
      name: 'Content',
      component: TestContent
    },
    {
      path: '/TestHistory',
      name: 'History',
      component: TestHistory,
      props: true
    }
  ]
})

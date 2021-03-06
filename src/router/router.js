import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router)


const router = new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/login', component: Login},
    {path: '/home', component: Home},
  ]
})

export default router

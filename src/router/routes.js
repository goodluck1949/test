import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default [{
    path: '/home',
    component: Home
},
{
    path: '/search',
    component: Search
},
{
    path: '/login',
    component: Login
},
{
    path: '/register',
    component: Register
},
{
    path: '/',
    redirect: '/home'
}

]
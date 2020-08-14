import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default [{
    path: '/home',
    component: Home
},
{
    path: '/search/:keyword?',
    component: Search,
    name:'search',
    props(route){
        return{
            keyword:route.params.keyword,keyword2:route.query.keyword
        }
    }
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
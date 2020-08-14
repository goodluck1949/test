import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const instance = axios.create({
    baseURL: '/api',
    timeout: 20000
})
instance.interceptors.request.use(config => {
    NProgress.start()
    return config
})
instance.interceptors.response.use(function (response) {
    NProgress.done()
    return response.data;
}, function (error) {
    NProgress.done()
    alert('发生请求错误:' + error.message || '未知错误')
    return new Promise(() => { })
})
export default instance
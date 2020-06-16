import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Index/home'
import Layout from '@/views/Layout/layout'
import Exam from '@/components/Index/exam'
import System from '@/components/Index/system'
import { Loading } from 'element-ui'
Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
//    VueRouter.prototype.push = function push(location) {
//    return originalPush.call(this, location).catch(err => err)
// }

// let loading;
// router.beforeEach((to, form, next) => {
//   loading = Loading.service({
//     // fullscreen: true,
//     target: '.content-wrapper',
//     text: '跳转中...'
//   });
// })
// router.afterEach((to, from) => {
//   // 解决某些情况下loading无法关闭的情况
//   setTimeout(() => {
//     loading.close();
//   }, 0)
// });

const routes = [
  {
    path: "",
    name: 'Layout',

    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component:Home
      }
    ,
    {
        path: 'exam',
        name: 'exam',
      
        component:Exam
      }
    ,
    {
        path: 'system',
        name: 'system',
       
        component: System
      }
    ]
    

  }

]
var router = new VueRouter({
  routes
})
export default router;

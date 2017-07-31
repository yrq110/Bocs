import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/containers/Home'
import User from '@/components/containers/User'
import Books from '@/components/containers/Books'
import Plans from '@/components/containers/Plans'
import NewBook from '@/components/views/NewBook'
import BookDetail from '@/components/views/BookDetail'
import PlanDetail from '@/components/views/PlanDetail'
import Error from '@/components/views/Error'
// import store from '@/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
      // children: [
      //   {
      //     path: ':bookID',
      //     name: 'BookDetail',
      //     component: BookDetail
      //   }
      // ]
    },
    {
      path: '/newbook',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/books/:bookID',
      name: 'BookDetail',
      component: BookDetail
    },
    {
      path: '/plans',
      name: 'Plans',
      component: Plans,
      children: [
        {
          path: ':planID',
          component: PlanDetail
        }
      ]
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})

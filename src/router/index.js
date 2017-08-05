import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/containers/Home'
import Books from '@/components/containers/Books'
import Plans from '@/components/containers/Plans'
import NewBook from '@/components/views/NewBook'
import NewPlan from '@/components/views/NewPlan'
import BookDetail from '@/components/views/BookDetail'
import PlanDetail from '@/components/views/PlanDetail'
import Error from '@/components/views/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
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
      component: Plans
    },
    {
      path: '/newplan',
      name: 'NewPlan',
      component: NewPlan
    },
    {
      path: '/newplan/:bookid',
      name: 'NewPlanWithBook',
      component: NewPlan
    },
    {
      path: '/plans/:planID',
      name: 'PlanDetail',
      component: PlanDetail
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ]
})

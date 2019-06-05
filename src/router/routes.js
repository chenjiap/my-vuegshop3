import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile'
import  Login   from '../pages/Login/Login.vue'

export    const  routes =  [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        isShowFoot: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShowFoot: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        isShowFoot: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isShowFoot: true
      }
    },
    {
      path: '/login',
      component:  Login
    }
  ]
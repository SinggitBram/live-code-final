import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LoginPage from '../views/LoginPage.vue'
import MainPage from '../views/MainPage.vue'

Vue.use(VueRouter)

const beforeEnter = async (to, from, next) => {
  if (localStorage.getItem("token")) {
    next({
      path: '/mainpage'
    })
  } else {
    next()
  }
}

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      beforeEnter,
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage,
      
    },
    {
      path: '/mainpage',
      name: 'MainPage',
      component: MainPage,
      meta: { requiresAuth: true }
    },
  ]

  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      let token = localStorage.getItem("token")
      if (!token) {
        next({ name: "LoginPage" })
      }
      else 
        next()
    }
    else {
      next()

    }
  })


export default router

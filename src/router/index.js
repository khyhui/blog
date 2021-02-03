import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component: resolve => require(['../pages/home.vue'], resolve),
			name: 'home'
    },
    {
      path:"/home",
      component:resolve=>require(['../pages/home.vue'],resolve),
      name:'home'
    },
    {
      path:"/about",
      component:resolve=>require(['../pages/about.vue'],resolve),
      name:'about'
    },
    {
      path:"/message",
      component:resolve=>require(['../pages/message.vue'],resolve),
      name:"message"
    },
    {
      path:"/friends",
      component:resolve=>require(['../pages/friends.vue'],resolve),
      name:"friends"
    }
  ]
})

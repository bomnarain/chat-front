import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import ChatRoom from '../views/ChatRoom.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/char-room/:username',
    name: 'ChatRoom',
    component: ChatRoom,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

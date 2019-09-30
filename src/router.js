import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtleTimer from './components/ButtleTimer.vue';
import WaitTimer from './components/WaitTimer.vue';
import Setting from './components/Setting.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ButtleTimer',
      name: 'buttlrtimer',
      component: ButtleTimer,
    },
    {
      path: '/WaitTimer',
      name: 'Waittimer',
      component: WaitTimer,
    },
    {
      path: '/Setting',
      name: 'setting',
      component: Setting
    }
  ]
})

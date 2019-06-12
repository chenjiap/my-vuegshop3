 import Vue from 'vue'


 import {Button} from 'mint-ui'

import App from './App'
import router from './router'
import Header from './components/Header/Header.vue'

import Star from './components/Star/Star.vue'

import store from './vuex/store'

import './validate.js'

import './mock/mock-server' 

import CartControl from './components/CartControl/CartControl.vue'

import Split from './components/Split/Split.vue'

import './filters' // 加载自定义过滤器

Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)

Vue.component(Button.name, Button) // mt-button

Vue.component('CartControl', CartControl)// 加减数量的小圆圈

// 注册为全局组件标签
Vue.component('Split', Split)

Vue.prototype.$eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

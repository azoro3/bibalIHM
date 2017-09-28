import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueRessource from 'Vue-resource'
import App from './components/App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Lodash from 'lodash'


import '../node_modules/vue-material/dist/vue-material.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueRessource)
Vue.use(axios)
Vue.use(Lodash)
const routes =[
  {path: '/home', component :Home, name :'home'},
  {path: '/user',component: User,name: 'user'},
  {path: '*',redirect:'/home'},

]
export const Router = new VueRouter({
  routes
})
new Vue({
  router: Router,
  render: h=>h(App)
}).$mount('#app')

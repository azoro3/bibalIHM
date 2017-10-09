import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueRessource from 'vue-resource'
import MaterialIcons from 'material-design-icons'
// import VueJsDatatable from 'vuejs-datatable'
import App from './components/App.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'
import DelUser from './components/DelUser.vue'
import Oeuvre from './components/Oeuvre.vue'
import Exemplaire from './components/Exemplaire.vue'
import Reservation from './components/Reservation.vue'
import Emprunt from './components/Emprunt.vue'
import Rendu from './components/Rendu.vue'
import Login from './components/Login.vue'
import Author from './components/Author.vue'


import '../node_modules/vue-material/dist/vue-material.css'


Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueRessource)
Vue.use(axios)
Vue.use(MaterialIcons)
const routes =[
  {path: '/home', component :Home, name: 'home'},
  {path: '/user', component: User, name: 'user'},
  {path: '/delUser', component: DelUser, name: 'delUser'},
  {path: '/oeuvre', component: Oeuvre, name: 'oeuvre'},
  {path: '/exemplaire', component: Exemplaire, name: 'exemplaire'},
  {path: '/reservation', component: Reservation, name: 'reservation'},
  {path: '/emprunt', component: Emprunt, name: 'emprunt'},
  {path: '/rendu', component: Rendu, name: 'rendu'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/author', component: Author, name: 'author'},
  {path: '*',redirect:'/home'},

]
export const Router = new VueRouter({
  routes
})
new Vue({
  router: Router,
  render: h=>h(App)
}).$mount('#app')

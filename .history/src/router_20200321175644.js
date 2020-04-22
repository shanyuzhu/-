import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home.vue'
import Index from './pages/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                }
            ]
        }
    ]
})
import Vue from 'vue'
import Router from 'vue-router'

import home from './pages/home.vue'
import index from './pages/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: index,
                }
            ]
        }
    ]
})
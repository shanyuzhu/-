import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/Product.vue'

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
                },
                {
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        }
    ]
})
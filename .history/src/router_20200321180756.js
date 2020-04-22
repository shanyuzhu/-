import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Order from './pages/order.vue'
import OrderList from './pages/orderList.vue'
import OrderConfirm from './pages/orderConfirm.vue'

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
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: '/orderList',
                    name: 'orderList',
                    component: OrderList,
                },
                {
                    path: '/orderConfirm',
                    name: 'orderConfirm',
                    component: OrderConfirm,
                },
            ]
        }
    ]
})
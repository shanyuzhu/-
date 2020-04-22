import Vue from 'vue'
import Router from 'vue-router'

import Home from './view/home.vue'
import Index from './view/index.vue'
import Product from './view/product.vue'
import Detail from './view/detail.vue'
import Cart from './view/cart.vue'
import Order from './view/order.vue'
import OrderList from './view/orderList.vue'
import Orderconfirm from './view/orderconfirm.vue'
import OrderPay from './view/orderPay.vue'
import AliPay from './view/aliPay.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
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
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'list',
                    name: 'order-List',
                    component: OrderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: Orderconfirm,
                },
                {
                    path: 'pay',
                    name: 'order-Pay',
                    component: OrderPay,
                },
                {
                    path: 'aliPay',
                    name: 'aliPay',
                    component: AliPay,
                },
            ]
        }

    ]
})
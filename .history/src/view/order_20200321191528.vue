<template>
    <div>
        <order-header></order-header>
        <router-view></router-view>
        <order-footer></order-footer>
    </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import NavFooter from "./../components/NavFooter";
export default {
    name: "order",
    components: {
        OrderHeader,
        NavFooter,
    },
};
</script>

<style></style>

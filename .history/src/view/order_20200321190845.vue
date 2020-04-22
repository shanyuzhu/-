<template>
    <div>
        <order-header></order-header>
        <order-footer></order-footer>
    </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader";
import OrderFooter from "./../components/OrderFooter";
export default {
    name: "order",
    components: {
        OrderHeader,
        OrderFooter,
    },
};
</script>

<style></style>

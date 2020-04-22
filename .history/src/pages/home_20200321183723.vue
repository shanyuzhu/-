<template>
    <div>
        <nav-NavHader></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
export default {
    name: "home",
    components: {
        [NavHeader.name]:nav-header
    },
};
</script>

<style></style>

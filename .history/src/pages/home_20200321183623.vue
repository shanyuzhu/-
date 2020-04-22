<template>
    <div>
        <NavHader></NavHader>
        <router-view></router-view>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
import NavHader from "./../components/NavHeader";
import NavFooter from "./../components/NavFooter";
export default {
    name: "home",
    components: {
        NavHader,
        NavFooter,
    },
};
</script>

<style></style>

<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import jsonp from "jsonp";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
    data() {
        return {
            age: 30,
        };
    },
    mounted() {
        let url =
            "api/5e7108e5e728b43489c699e8/example/restful/:id/list#!method=get";
        jsonp(url, (err, res) => {
            let result = res;
            this.data = result;
        });
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

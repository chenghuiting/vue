//使用vue进行开发
import Vue from "vue";
import App from "./vue/App";

new Vue({
    el: "#app",
    template: '<App/>',
    data: {},
    components: {
        App
    }
})

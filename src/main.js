import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');

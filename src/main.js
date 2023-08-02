import { createApp } from 'vue';
import App from './App.vue';
import LoginView from './views/LoginView.vue';
import SignupView from './views/SignupView.vue';
import { createRouter, createWebHistory } from 'vue-router';
// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as views from 'vuetify/components';
import * as directives from 'vuetify/directives';
const vuetify = createVuetify({
  views,
  directives,
});
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', views: LoginView },
    { path: '/signup', views: SignupView },
  ],
});
const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');
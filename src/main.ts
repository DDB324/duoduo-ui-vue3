import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Ddb from './components/Ddb.vue';
import Ddb2 from './components/Ddb2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Ddb},
    {path: '/2', component: Ddb2}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

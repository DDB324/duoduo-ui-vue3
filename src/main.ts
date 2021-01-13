import './lib/duoduo.scss'
import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {router} from './router';
import 'github-markdown-css'
import Button from './lib/Button.vue'
import Demo from './components/Demo.vue';
import Dialog from './lib/Dialog.vue';
import Tab from './lib/Tab.vue';
import Tabs from './lib/Tabs.vue';


const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Button',Button)
app.component('Demo',Demo)
app.component('Dialog',Dialog)
app.component('Tab',Tab)
app.component('Tabs',Tabs)

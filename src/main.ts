import './index.scss';
import './lib/duoduo.scss'
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css'
import Demo from './components/Demo.vue';
import {
  Button, Switch, Dialog, Tabs, Tab, Icon,
  Layout, Content, Header, Footer, Sider, Input
} from './lib/index';


const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Demo',Demo)
app.component('d-button',Button)
app.component('d-dialog',Dialog)
app.component('d-tab',Tab)
app.component('d-tabs',Tabs)
app.component('d-icon',Icon)
app.component('d-layout',Layout)
app.component('d-content',Content)
app.component('d-switch',Switch)
app.component('d-header',Header)
app.component('d-footer',Footer)
app.component('d-sider',Sider)
app.component('d-input',Input)

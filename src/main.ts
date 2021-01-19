import './index.scss';
import './lib/duoduo.scss'
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css'
import Demo from './components/Demo.vue';
import {Button,Switch,Dialog,Tabs,Tab,Icon,
  Layout,Content,Header,Footer,Sider
} from './lib/index'


const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('Button',Button)
app.component('Demo',Demo)
app.component('Dialog',Dialog)
app.component('Tab',Tab)
app.component('Tabs',Tabs)
app.component('Icon',Icon)
app.component('Layout',Layout)
app.component('Content',Content)
app.component('Switch',Switch)
app.component('Header',Header)
app.component('Footer',Footer)
app.component('Sider',Sider)

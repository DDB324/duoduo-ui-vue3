import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import DocDemo from './components/DocDemo.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import Intro from './markdown/Intro.md';
import Install from './markdown/Install.md';
import GetStarted from './markdown/GetStarted.md';
import {h} from 'vue';

const md = string => {return h(Markdown, {content: string, key: string});};

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', component: DocDemo},
        {path: 'intro', component: md(Intro)},
        {path: 'get-started', component: md(GetStarted)},
        {path: 'install', component: md(Install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo}
      ]
    }
  ]
});
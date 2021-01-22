import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Intro from './markdown/Intro.md';
import Install from './markdown/Install.md';
import GetStarted from './markdown/GetStarted.md';
import {h} from 'vue';
import SwitchDemo from './components/Demo/SwitchDemo.vue';
import ButtonDemo from './components/Demo/ButtonDemo.vue';
import DialogDemo from './components/Demo/DialogDemo.vue';
import TabsDemo from './components/Demo/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import IconDemo from './components/Demo/IconDemo.vue';
import LayoutDemo from './components/Demo/LayoutDemo.vue';
import InputDemo from './components/Demo/InputDemo.vue';
import CollapseDemo from './components/Demo/CollapseDemo.vue';

const md = string => {return h(Markdown, {content: string, key: string});};

const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(Intro)},
        {path: 'get-started', component: md(GetStarted)},
        {path: 'install', component: md(Install)},
        {path: 'switch', component: SwitchDemo},
        {path: 'icon', component: IconDemo},
        {path: 'button', component: ButtonDemo},
        {path: 'dialog', component: DialogDemo},
        {path: 'tabs', component: TabsDemo},
        {path: 'layout', component: LayoutDemo},
        {path: 'input', component: InputDemo},
        {path: 'collapse', component: CollapseDemo},
      ]
    }
  ]
});
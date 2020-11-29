import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  // mode: 'history'는 브라우저 url에 /#/ 가 붙는 것을 방지해줌
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'news',
      component: createListView('NewsView')
    },
    {
      path: '/ask',
      name: 'ask',
      component: createListView('AskView')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: createListView('JobsView')
    },
    {
      path: '/user/:id',
      component: UserView
    },
    {
      path: '/item/:id',
      component: ItemView
    }
  ]
});
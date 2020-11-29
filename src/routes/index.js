import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

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
      // component: createListView('NewsView')
      component: NewsView,
      beforeEnter: (to, from, next) => {
        // console.log('to : ', to);
        // console.log('from : ', from);
        // console.log('next : ', next);
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => {
            console.log('fetched');
            bus.$emit('end:spinner');
            next();
          })
          .catch(e => console.log(e));
      }
    },
    {
      path: '/ask',
      name: 'ask',
      // component: createListView('AskView')
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch(e => console.log(e));
      }
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: createListView('JobsView')
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then(() => next())
          .catch(e => console.log(e));
      }
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
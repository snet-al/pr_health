import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

import Insight from '../views/Insight.vue';
import Questions from '../views/Questions.vue'

Vue.use(Router);

class RouteMeta {
  title: string;

  constructor({title}: { title: string }) {
    this.title = title;
  }
}

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Insight,
      meta: new RouteMeta({ title: 'Rastet' })
    },{
      path: '/insight',
      name: 'insight',
      component: Insight,
      meta: new RouteMeta({ title: 'Rastet' })
    },
    {
      path: '/questions',
      name: 'questions',
      component: Questions,
      meta: new RouteMeta({ title: 'Pyetje' })
    }
  ]
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {
  const routeMeta = to.meta as RouteMeta;
  store.dispatch('topToolbar/changeTitle', routeMeta.title);
  next();
});

export default router;
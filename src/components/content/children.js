import Home from './children/Home.vue';
import User from './children/User.vue';
import List from './children/List.vue';
import Info from './children/Info.vue';

export default [
  {
    path: '',
    component: Home,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: 'list',
    component: List,
  },
  {
    path: 'info',
    component: Info,
  }
]

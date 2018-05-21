import Splash from '@views/Splash';
import NotFound from '@views/NotFound';
import Party from '@views/Party';

const routes = [
  {
    path: '/',
    exact: true,
    component: Splash,
  },
  {
    path: '/party',
    exact: true,
    component: Party,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;

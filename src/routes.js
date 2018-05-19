import Splash from '@views/Splash';
import NotFound from '@views/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    component: Splash,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;

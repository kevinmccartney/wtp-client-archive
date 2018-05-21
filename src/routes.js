import Splash from '@views/Splash';
import NotFound from '@views/NotFound';
import Party from '@views/Party';
import Root from '@views/Root';

const routes = [{
  component: Root,
  routes: [{
    path: '/',
    exact: true,
    component: Splash,
    routes: [
      {
        path: '/party',
        exact: true,
        component: Party,
      },
      {
        path: '/*',
        component: NotFound,
      },
    ],
  }],
}];

export default routes;

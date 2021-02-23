import { Redirect } from 'react-router-dom';

import Aboutpage from './views/About';
import contactpage from './views/Contact';
import Servicepage from './views/Services';
import Homepage from './views/Home';

const routes = [
  {
    path: '/home',
    exact: true,
    component: Homepage,
  },
  {
    path: '/about',
    exact: true,
    component: Aboutpage,
  },
  {
    path: '/contact',
    exact: true,
    component: contactpage,
  },
  {
    path: '/services',
    exact: true,
    component: Servicepage,
  },
  {
    component: () => <Redirect to="/home" />,
  },
];

export default routes;

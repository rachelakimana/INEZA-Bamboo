import { Redirect } from 'react-router-dom';

import Aboutpage from './views/About';
import contactpage from './views/Contact';
import Gallerypage from './views/Gallery';
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
    path: '/gallery',
    exact: true,
    component: Gallerypage,
  },
  {
    component: () => <Redirect to="/home" />,
  },
];

export default routes;

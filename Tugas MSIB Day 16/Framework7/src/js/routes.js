// routes.js
import LoginPage from '../pages/login.f7';
import HomePage from '../pages/home.f7';

const routes = [
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/home/',
    component: HomePage,
  },
];

export default routes;

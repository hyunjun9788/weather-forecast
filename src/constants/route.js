import Detail from '../pages/detail';
import Home from '../pages/home';

export const APP_BASE_URL = 'http://localhost:5173';

export const ROUTES = [
  { path: /^\/$/, component: Home },
  { path: /^\/detail$/, component: Detail },
];

import Detail from '../pages/detail';
import Home from '../pages/home';

export const BASE_URL = 'http://localhost:5173';

export const routes = [
  { path: /^\/$/, component: Home },
  { path: /^\/detail$/, component: Detail },
];

import App from './src/app';
import { $ } from './src/utils/dom';
import './src/style.css';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App($('#app'));
  app.init();
});

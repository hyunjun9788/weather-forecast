import App from './src/app';
import './src/style.css';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App(document.querySelector('#app'));
  app.init();
});

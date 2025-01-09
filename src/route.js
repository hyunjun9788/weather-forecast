import { BASE_URL, routes } from './constants/route';
import { navigate } from './navigate';

function Router(container) {
  this.container = container;

  const findMatchedRoute = () => {
    return routes.find((route) => route.path.test(location.pathname));
  };

  const render = () => {
    const matchedRoute = findMatchedRoute();
    // new TargetPage(this.container);
    const Component = matchedRoute.component;
    new Component(this.container);

    const $weatherBox = document.querySelector('#weather-box');
    if ($weatherBox) {
      $weatherBox.addEventListener('click', (e) => {
        const target = e.target.closest('a');
        if (!(target instanceof HTMLAnchorElement)) return;

        e.preventDefault();
        const targetURL = target.href.replace(BASE_URL, '');
        navigate(targetURL);
      });
    }
  };

  const init = () => {
    window.addEventListener('historyChange', ({ detail }) => {
      const { to, isReplace } = detail;

      if (isReplace || to === location.pathname) {
        history.replaceState(null, '', to);
      } else {
        history.pushState(null, '', to);
      }
      render();
    });

    window.addEventListener('popState', () => {
      render();
    });

    render();
  };

  init();
}

export default Router;

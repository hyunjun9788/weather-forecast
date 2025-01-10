import { BASE_URL, routes } from './constants/route';
import { navigate } from './utils/navigate';

function Router(container) {
  this.container = container;
  const findMatchedRoute = () => {
    return routes.find((route) => route.path.test(location.pathname));
  };

  const renderComponent = () => {
    const matchedRoute = findMatchedRoute();
    const Component = matchedRoute.component;
    new Component(this.container);
  };

  const handleNavigate = (e) => {
    const target = e.target.closest('a');
    if (!(target instanceof HTMLAnchorElement)) return;

    e.preventDefault();
    const targetURL = target.href.replace(BASE_URL, '');
    navigate(targetURL);
  };

  const updateRoute = ({ detail }) => {
    const { toPath } = detail;
    if (toPath !== location.pathname) {
      history.pushState(null, '', toPath);
    }
    renderComponent();
  };

  const registerRouterEvents = () => {
    this.container.addEventListener('click', handleNavigate);

    window.addEventListener('historyChange', updateRoute);

    window.addEventListener('popstate', () => {
      renderComponent();
    });

    renderComponent();
  };

  registerRouterEvents();
}

export default Router;

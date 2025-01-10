import { BASE_URL, routes } from './constants/route';
import { navigate } from './utils/navigate';

class Router {
  constructor(container) {
    this.container = container;
    this.registerRouterEvents();
  }

  findMatchedRoute() {
    return routes.find((route) => route.path.test(location.pathname));
  }

  renderComponent() {
    const matchedRoute = this.findMatchedRoute();
    const Component = matchedRoute.component;
    new Component(this.container);
  }

  handleNavigate(e) {
    const target = e.target.closest('a');
    if (!(target instanceof HTMLAnchorElement)) return;

    e.preventDefault();
    const targetURL = target.href.replace(BASE_URL, '');
    navigate(targetURL);
  }

  updateRoute({ detail }) {
    const { toPath } = detail;
    if (toPath !== location.pathname) {
      history.pushState(null, '', toPath);
    }
    this.renderComponent();
  }

  registerRouterEvents() {
    this.container.addEventListener('click', (e) => this.handleNavigate(e));
    window.addEventListener('historyChange', (e) => this.updateRoute(e));
    window.addEventListener('popstate', () => this.renderComponent());
    this.renderComponent();
  }
}

export default Router;

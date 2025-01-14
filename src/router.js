import { HISTORY_EVENT } from './constants/history-api';
import { BASE_URL, routes } from './constants/route';

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

  navigate(toPath) {
    const historyChangeEvent = new CustomEvent(HISTORY_EVENT.HISTORY_CHANGE, {
      detail: {
        toPath,
      },
    });
    dispatchEvent(historyChangeEvent);
  }

  handleNavigate(e) {
    const target = e.target.closest('a');
    if (!(target instanceof HTMLAnchorElement)) return;

    e.preventDefault();
    const targetURL = target.href.replace(BASE_URL, '');
    this.navigate(targetURL);
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
    window.addEventListener(HISTORY_EVENT.HISTORY_CHANGE, (e) => this.updateRoute(e));
    window.addEventListener(HISTORY_EVENT.POP_STATE, () => this.renderComponent());
    this.renderComponent();
  }
}

export default Router;

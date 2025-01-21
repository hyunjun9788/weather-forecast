import { HISTORY_EVENT } from './constants/custom-event';
import { APP_BASE_URL, ROUTES } from './constants/route';

class Router {
  constructor(container) {
    this.container = container;
    this.registerRouterEvents();
  }

  findMatchedRoute() {
    return ROUTES.find((route) => route.path.test(location.pathname));
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
    const targetURL = target.href.replace(APP_BASE_URL, '');
    this.navigate(targetURL);
  }

  updateRoute({ detail }) {
    const { toPath } = detail;
    if (toPath !== location.pathname) {
      history.replaceState(null, '', toPath);
    }
    this.renderComponent();
  }

  navigate(toPath) {
    const historyChangeEvent = new CustomEvent(HISTORY_EVENT.HISTORY_CHANGE, {
      detail: {
        toPath,
      },
    });
    dispatchEvent(historyChangeEvent);
  }

  registerRouterEvents() {
    this.container.addEventListener('click', (e) => this.handleNavigate(e));
    window.addEventListener(HISTORY_EVENT.HISTORY_CHANGE, (e) => this.updateRoute(e));
    window.addEventListener(HISTORY_EVENT.POP_STATE, () => this.renderComponent());
    this.renderComponent();
  }
}

export default Router;

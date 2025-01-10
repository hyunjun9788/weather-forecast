import Router from './router';

class App {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    new Router(this.container);
  }
}

export default App;

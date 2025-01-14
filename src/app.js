import Router from './router';

class App {
  constructor(container) {
    this.container = container;
  }

  init() {
    new Router(this.container);
  }
}

export default App;

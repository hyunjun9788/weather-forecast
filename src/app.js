import Router from './route';

function App(container) {
  console.log(container);
  this.container = container;

  const init = () => {
    new Router(container);
  };
  init();
}

export default App;

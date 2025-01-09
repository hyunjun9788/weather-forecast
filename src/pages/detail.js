function Detail(container) {
  this.container = container;
  console.log('container', container);
  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.container.innerHTML = `
      <main class="mainPage">
        메인 페이지에요.
      </main>
    `;
  };

  this.render();
}

export default Detail;

function Home(container) {
  this.container = container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.container.innerHTML = `
      <div id="home-container">
      <h1 id="title">홈 페이지</h1>
      <a href="/detail" id="weather-box" >
        <h3 id="region">Seoul</h3>
        <div>2025년 01월 05일 11시 52분</div>
        <div id="weather-info-box">
          <img src="/vite.svg" />
          <div id="weather-detail-box">
            <p>현재</p>
            <p>0.84</p>
            <p>최저/최고</p>
            <p>0.84C/0.84C</p>
          </div>
        </div>
        <p>온흐림</p>
      </a>
    </div>
    `;
  };

  this.render();
}

export default Home;

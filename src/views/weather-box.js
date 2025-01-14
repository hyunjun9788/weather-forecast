class WeatherBoxView {
  constructor({ container, weatherData, page }) {
    this.container = container;
    this.page = page;
    Object.assign(this, weatherData);
  }

  render() {
    return `
        <a href="/detail" id="weather-box" class="${this.page === 'detailPage' ? 'disabled-link' : ''}" >
          <h3 id="region-box">${this.region}</h3>
          <div>${this.date}</div>
          <div id="weather-info-box">
            <img src=${this.url} />
            <div id="weather-detail-box">
              <p>현재</p>
              <p>${this.curTemperature}</p>
              <p>최저/최고</p>
              <p>${this.low}/${this.high}</p>
            </div>
          </div>
          <p>온흐림</p>
        </a>
        `;
  }
}

export default WeatherBoxView;

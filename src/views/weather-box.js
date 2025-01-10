function getWeatherBoxView({ weatherData, page }) {
  const { title, region, date, url, curTemperature, low, high } = weatherData;
  const getHomeButton = () => {
    return page === 'detailPage' ? `<a href="/" id="home-btn">홈으로</a>` : '';
  };

  return `
    <div id="home-container">
      <h1 id="title-box">${title}</h1>
      ${getHomeButton()}
      <a href="/detail" id="weather-box" class="${page === 'detailPage' ? 'disabled-link' : ''}" >
        <h3 id="region">${region}</h3>
        <div>${date}</div>
        <div id="weather-info-box">
          <img src=${url} />
          <div id="weather-detail-box">
            <p>현재</p>
            <p>${curTemperature}</p>
            <p>최저/최고</p>
            <p>${low}/${high}</p>
          </div>
        </div>
        <p>온흐림</p>
      </a>
    </div>`;
}

export default getWeatherBoxView;

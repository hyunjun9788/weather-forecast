class WeatherBoxSkeleton {
  constructor() {}

  render() {
    return `
       <div
         id="weather-box"
         class="skeleton-loading"
       >
         <div class="skeleton skeleton-title"></div>
         <div class="skeleton skeleton-date"></div>
         <div id="weather-info-box" style="display: flex;">
           <div class="skeleton skeleton-icon"></div>
           <div id="weather-detail-box">
             <div class="skeleton skeleton-detail-box"></div>
             <div class="skeleton skeleton-detail-box"></div>
             <div class="skeleton skeleton-detail-box"></div>
           </div>
         </div>
         <div class="skeleton skeleton-description"></div>
       </div>
       `;
  }
}

export default WeatherBoxSkeleton;

var $ = require('jquery');
var $container = $('#forecast-io');

var COLOR = '#FFFFFF';
var LATITUDE = 47.6062;
var LONGITUDE = -122.3321;
var REFRESH_INTERVAL_MS = 600000;

var forcastIO = require('../third_party/forecast-io');

var renderWeatherWidget = function() {
  $container.empty();
  forcastIO.render(LATITUDE, LONGITUDE, COLOR, $container)
  setTimeout(renderWeatherWidget, REFRESH_INTERVAL_MS);
}

renderWeatherWidget();
var map4 = L.Wrld.map ('map4', 'e65117ae7fb552545c72547b0314b47d')
var map4 = L.Wrld.map ('map4', 'e65117ae7fb552545c72547b0314b47d', {
  center: [29.95, -90.07],
  zoom: 15
})
map4.themes.setWeather(L.Wrld.themes.weather.Rainy)
map4.themes.setTime(L.Wrld.themes.time.Day)
var geojsonUrlString = 'https://opendata.arcgis.com/datasets/3273a5f8334d40838681ff0337eddb8c_0.geojson'
jQuery.getJSON(geojsonUrlString, function (data) {
  L.geoJSON(data).addTo(map4)
})

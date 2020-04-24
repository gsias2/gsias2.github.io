var map4 = L.Wrld.map ('map4', 'e65117ae7fb552545c72547b0314b47d')
var map4 = L.Wrld.map ('map4', 'e65117ae7fb552545c72547b0314b47d', {
  center: [29.95, -90.07],
  zoom: 15
})
map4.themes.setWeather(L.Wrld.themes.weather.Rainy)
map4.themes.setTime(L.Wrld.themes.time.Day)
var bikeshareUrlString = 'https://opendata.arcgis.com/datasets/63aa98f68bd54e528d7a75e6cf2492bd_0.geojson'
jQuery.getJSON(bikeshareUrlString, function (data) {
  L.geoJSON(data).addTo(map4)
})
L.geoJSON(data, {
  onEachFeature: renameThisCreatePopupFunction
}).addTo(map4)

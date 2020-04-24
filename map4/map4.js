var map4 = L.Wrld.map('map','e65117ae7fb552545c72547b0314b47d')
var map4 = L.Wrld.map('map','e65117ae7fb552545c72547b0314b47d', {
  center: [29.95, -90.07],
  zoom: 15
})
var map4.themes.setWeather(L.Wrld.themes.weather.Rainy)
var map4.themes.setTime(L.Wrld.themes.time.Day)
var nonprofiturl = 'https://opendata.arcgis.com/datasets/ada75a6799874e09aa61d05ba65038e5_0.geojson'
jQuery.getJSON(nonprofiturl, function (data) {
  L.geoJSON(data).addTo(map4)
})
L.geoJSON(data, {
  onEachFeature: renameThisCreatePopupFunction
}).addTo(map4)
var renameThisCreatePopupFunction = function (feature, layer) {
  layer.bindPopup(feature.properties.Name)
}
var renameThisCreatePopupFunction = function (feature, layer) {
  layer.bindPopup(feature.properties.Website)
}
jQuery('#Arts Council of New Orleans').on('click', function () {
  map4.setView([29.952, -90.073], 17, {
    headingDegrees: -45,
    animate: true,
    durationSeconds: 3
  })
})

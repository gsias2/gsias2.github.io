var map3 = L.map('map3').setView([32.18, -99.14], 5)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map3)
var statesurl1 = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesurl1, function (data) {
  var statestyle = function () {
  return {
    color: 'green',
    weight: 1,
    fillOpacity: 0.2
  }
}
  L.geoJSON(data,{ style: statestyle }).addTo(map3)
})

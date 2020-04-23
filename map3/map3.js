var map3 = L.map('map3').setView([32.18, -99.14], 5)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map3)
var statesurl1 = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesurl1, function (data) {
  var statestyle = function (feature) {
  var black = feature.properties.BLACK
  var statecolor = 'olive'
  if (black < 20000) { statecolor = 'green' }
  return {
    color: statecolor,
    weight: 1,
    fillOpacity: 0.2,
    fill: statecolor
  }
}
var stateLayerOptions = {
  style: statestyle,
  onEachFeature: createPopup
}
  L.geoJSON(data, stateLayerOptions).addTo(map3)
})
var createPopup = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var black = feature.properties.BLACK
  var pop2010 = feature.properties.POP2010
     layer.bindPopup('Black Population of' + name + ': ' black + '<br>Total population: pop2010')
   }

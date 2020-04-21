var map3 = L.map('map3').setView([32.18, -99.14], 5)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map3)
var statesurl1 = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(statesurl1, function (data) {
  var statestyle = function (feature) {
  var AVERAGEHOUSEHOLDSIZE = feature.properties.AVERAGEHOUSEHOLDSIZE // get the current state's Median Age attribute
  var statecolor = 'olive' // let the initial color be a darker green
  if (AVERAGEHOUSEHOLDSIZE < 2.5) { statecolor = 'green' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: statecolor, // use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}
var renameThisGeojsonOptionsObject = {
  style: renameThisStyleFunction,
  onEachFeature: renameThisOnEachFeatureFunction
}
  L.geoJSON(data,{ style: statestyle }).addTo(map3)
})

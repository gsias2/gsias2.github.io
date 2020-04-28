var map4 = L.Wrld.map('map4','e65117ae7fb552545c72547b0314b47d', {
  center: [29.95, -90.07],
  zoom: 15
})
 map4.themes.setWeather(L.Wrld.themes.weather.Clear)
 map4.themes.setTime(L.Wrld.themes.time.Dawn)
 var nonprofiturl1 = 'https://opendata.arcgis.com/datasets/ada75a6799874e09aa61d05ba65038e5_0.geojson'
 jQuery.getJSON(nonprofiturl1, function (data) {
   L.geoJSON (data,{
     onEachFeature: createPopup
   }).addTo(map4)
 var createPopup = function (feature, layer) {
  layer.bindPopup(feature.properties.NonProfitName + "" <br>Website: ""+ feature.properties.Website)
 }
})
 jQuery('#Arts Council of New Orleans').on('click', function () {
   map4.setView([29.952, -90.073], 17, {
    headingDegrees: -45,
    animate: true,
    durationSeconds: 3
   })
 })
 jQuery('#Contemporary Arts Center').on('click', function () {
   map4.setView([29.943, -90.070], 17, {
     headingDegrees: -45,
    animate: true,
    durationSeconds: 3
  })
})

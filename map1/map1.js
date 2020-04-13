var map1 = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1)
var renameThisMarkerObject = L.marker([30.47, -91.14]).addTo(map1)
var renameThisPolygonObject = L.polygon([
  [32.77, -96.80],
  [30.26, -97.73],
  [29.74, -95.35]
]).addTo(map1)
var renameThisPolylineObject = L.polyline([
  [32.52, -93.76],
  [30.26, -93.21],
]).addTo(map1)
renameThisPolygonObject.bindPopup('Texas.')
renameThisMarkerObject.bindPopup('Baton Rouge.')
renameThisPolylineObject.bindPopup('West Louisiana.')

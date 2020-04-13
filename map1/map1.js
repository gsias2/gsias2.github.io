var map1 = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1)
var renameThisMarkerObject = L.marker([30.47, -91.14]).addTo(map1)
var renameThisPolygonObject = L.polygon([
  [32.77, 96.79],
  [30.26, 97.74],
  [29.76, 95.36]
]).addTo(map1)
renameThisPolygonObject.bindPopup('Texas.')
renameThisMarkerObject.bindPopup('Baton Rouge.')

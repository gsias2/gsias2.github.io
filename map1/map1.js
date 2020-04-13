var map1 = L.map('map1').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map1)
var renameThisMarkerObject = L.marker([30, -90]).addTo(map1)
var renameThisPolygonObject = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(map1)
renameThisPolygonObject.bindPopup('Polygon.')
renameThisMarkerObject.bindPopup('Baton Rouge.')

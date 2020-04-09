var Map1 = L.map('Map1').setView([30.22, 93.21], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(Map1)
var Baton Rouge = L.marker([30.45, 91.18]).addTo(Map1)
var Polygon = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(Map1)
renameThisPolygonObject.bindPopup('Polygon.')
renameThisMarkerObject.bindPopup('Baton Rouge.')

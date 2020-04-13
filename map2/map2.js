var map2 = L.map('map2').setView([32.18, -99.14], 3)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map2)
L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(map2)
L.tileLayer.warnings_c('https://mesonet.agron.iastate.edu/cgi-bin/wms/us/wwa.cgi, {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(map2)

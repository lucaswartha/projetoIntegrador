const map = L.map('map').setView([-29.93083, -51.06563], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

var marker = L.marker([-29.9305202,-51.0653947]).addTo(map);
marker.bindPopup("<b>Estamos aqui!").openPopup();
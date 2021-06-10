const mymap = L.map('mapid').setView([3.43722, -76.5225], 14);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution });


tiles.addTo(mymap);

let markers = [];


database.ref('reports/').on('value', function(data) {

    markers.forEach(function(marker) {
        mymap.removeLayer(marker);
    });

    markers = [];
    data.forEach(data => {

        const report = data.val();
        console.log(report.lat + ' ' + report.lon);
        const marker = L.marker([report.lat, report.lon]).addTo(mymap);
        const popup = marker.bindPopup(`<b>${report.name}</b><br/>${report.msg}`);
        markers.push(marker);

    });

});
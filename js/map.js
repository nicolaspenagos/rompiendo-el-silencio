const mymap = L.map('mapid').setView([3.43722, -76.5225], 14);
//const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="https://www.carto.com/">carto.com</a> contributors';
const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png';
const goBackMap = document.querySelector('.goBackMap');
const reportBtn = document.querySelector('.reportBtn');

const tiles = L.tileLayer(tileUrl, { attribution });

goBackMap.addEventListener('click', () => {
    window.location.href = './menu.html';
});

reportBtn.addEventListener('click', () => {
    handleOpenModal();
})




mymap.removeControl(mymap.zoomControl);

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
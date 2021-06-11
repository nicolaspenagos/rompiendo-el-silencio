const params = new URLSearchParams(location.search);
const map = params.get('map');
let open = false;
if (map == 1) {
    open = true;
}

const mymap = L.map('mapid').setView([3.43722, -76.5225], 14);
const attribution = '&copy; <a href="https://www.carto.com/">carto.com</a> contributors';
const tileUrl = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png';
const goBackMap = document.querySelector('.goBackMap');
const reportBtn = document.querySelector('.reportBtn');
const checkBox1 = document.querySelector('.one');
const checkBox2 = document.querySelector('.two');
const checkBox3 = document.querySelector('.three');
const errorLb = document.querySelector('.errorLb');
const tiles = L.tileLayer(tileUrl, { attribution });

goBackMap.addEventListener('click', () => {
    window.location.href = './menu.html';
});

reportBtn.addEventListener('click', () => {
    handleOpenModal();
})

checkBox1.addEventListener('click', () => {

    checkBox1.checked = true;
    checkBox2.checked = false;
    checkBox3.checked = false;
});

checkBox2.addEventListener('click', () => {
    checkBox1.checked = false;
    checkBox3.checked = false;
    checkBox2.checked = true;
});

checkBox3.addEventListener('click', () => {
    checkBox2.checked = false;
    checkBox1.checked = false;
    checkBox3.checked = true;
});


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
        let iconColor = redIcon;

        if (report.number == 1)
            iconColor = yellowIcon;

        if (report.number == 2)
            iconColor = orangeIcon;

        const marker = L.marker([report.lat, report.lon], { icon: iconColor }).addTo(mymap);
        const popup = marker.bindPopup(`<b>${report.name}</b><br/>${report.msg}`);
        markers.push(marker);

    });

});


var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: './img/sss.png',
        iconSize: [24, 33],
        shadowSize: [45, 37],
        iconAnchor: [0, 24],
        shadowAnchor: [-8, 20],
        popupAnchor: [12, -25]
    }
});

var orangeIcon = new LeafIcon({ iconUrl: './img/orange_marker.png' }),
    redIcon = new LeafIcon({ iconUrl: './img/red-marker.png' }),
    yellowIcon = new LeafIcon({ iconUrl: './img/yellow_marker.png' });
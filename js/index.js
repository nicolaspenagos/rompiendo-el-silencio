const mymap = L.map('mapid').setView([3.43722, -76.5225], 14);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
const msgInput = document.querySelector('.msg');

tiles.addTo(mymap);
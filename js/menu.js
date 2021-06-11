const goBackBtn = document.querySelector('.goBack');
const showMapBtn = document.querySelector('.seeMap');


goBackBtn.addEventListener('click', () => {
    window.location.href = './index.html';
});

showMapBtn.addEventListener('click', () => {
    window.location.href = './map.html';
});
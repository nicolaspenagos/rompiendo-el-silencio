const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const closeModal = document.querySelector('.closeModal');
let lat = 0.0;
let lon = 0.0;



closeModal.addEventListener('click', handleCloseModal);

function handleOpenModal() {

    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';
    setTimeout(handleModalAppear, 15);

}

function handleCloseModal() {

    modal.style.opacity = 0;
    modalContent.style.transform = 'translate(0px, -500px)';
    document.body.style.overflow = 'hidden scroll';
    document.body.style.overflowX = 'hidden';
    putMarker();
    setTimeout(function() {
        modal.style.display = 'none';
    }, 500);

}

function handleModalAppear() {

    modal.style.opacity = 1;
    modalContent.style.transform = 'translate(0px, 0px)';

}

function putMarker() {

    navigator.geolocation.getCurrentPosition(function(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        mymap.setView([lat, lon], 18);
        var marker = L.marker([lat, lon]).addTo(mymap);
        var msg = msgInput.value;
        var popup = marker.bindPopup(`<b>Hello world!</b><br/>${msg}`);
        popup.openPopup();
    });

}

handleOpenModal();
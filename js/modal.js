const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const report = document.querySelector('.report');
const nameInput = document.querySelector('.name');
const msgInput = document.querySelector('.msg');
const closeModal = document.querySelector('.closeModal');

closeModal.addEventListener('click', handleCloseModal);

report.addEventListener('click', function() {

    let error = false;
    if (!nameInput.value || !msgInput.value || (!checkBox1.checked && !checkBox2.checked && !checkBox3.checked)) {
        errorLb.classList.remove('hidden');
        error = true;
    }

    if (!error) {
        putMarker();
        handleCloseModal();
    }

});

function handleOpenModal() {

    nameInput.value = '';
    msgInput.value = '';
    checkBox1.checked = false;
    checkBox2.checked = false;
    checkBox3.checked = false;
    errorLb.classList.add('hidden');
    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';
    setTimeout(handleModalAppear, 15);

}

function handleCloseModal() {


    modal.style.opacity = 0;
    modalContent.style.transform = 'translate(0px, -500px)';
    document.body.style.overflow = 'hidden scroll';
    document.body.style.overflowX = 'hidden';
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

        let name = nameInput.value;
        let msg = msgInput.value;
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let number = 1;

        if (checkBox2.checked) {
            number = 2;
        }

        if (checkBox3.checked) {
            number = 3;
        }



        mymap.setView([lat, lon], 18);

        let ref = database.ref('reports/').push();

        let report = {
            lat,
            lon,
            msg,
            name,
            number
        }

        ref.set(report);

    });

}


if (open)
    handleOpenModal();
else {
    handleCloseModal();
}
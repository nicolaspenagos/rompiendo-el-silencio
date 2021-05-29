const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const closeModal = document.querySelector('.closeModal');

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
    setTimeout(function() {
        modal.style.display = 'none';
    }, 500);

}

function handleModalAppear() {

    modal.style.opacity = 1;
    modalContent.style.transform = 'translate(0px, 0px)';

}

handleOpenModal();
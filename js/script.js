const modal = document.querySelector('.cart-popup');
const btnCart = document.querySelector('.btn__cart');
const btnClose = document.querySelector('.cart-popup__close');
const btnCancel = document.querySelector('.cart-popup__bottom-cancel');

btnCart.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
btnCancel.addEventListener('click', toggleModal);

function toggleModal() {
	modal.classList.toggle('open');
};
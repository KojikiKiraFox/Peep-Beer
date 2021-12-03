const modal = document.querySelector('.cart-popup');
const btnCart = document.querySelector('.btn__cart');
const btnClose = document.querySelector('.cart-popup__close');
const btnCancel = document.querySelector('.cart-popup__bottom-cancel');
const rows = modal.querySelectorAll('.cart-popup__item');
const total = modal.querySelector('.cart-popup__bottom-sum');


btnCart.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
btnCancel.addEventListener('click', toggleModal);



function toggleModal() {
	modal.classList.toggle('open');
};

modal.addEventListener('click', (event)=>{
	if(event.target == modal){
		toggleModal()
	}
})



const getFullPrice = () => {
	let fullPrice = 0;
	const rows = modal.querySelectorAll('.cart-popup__item');
	rows.forEach(row => {
		let priceBlock = row.querySelector('.cart-popup__item-price')
		let price = +priceBlock.textContent 
		fullPrice += price;
	})
	total.textContent = fullPrice
}

const getNewPrice = (count, price, priceBlock) => {
	newPrice = count * price
	priceBlock.textContent = newPrice
	getFullPrice()
}

rows.forEach(row => {
	let newPrice = 0;
	let priceBlock = row.querySelector('.cart-popup__item-price')
	let price = +priceBlock.textContent 
	let countBlock = row.querySelector('.cart-popup__item-number')
	let count = +countBlock.textContent
	const btnMinus = row.querySelector('.cart-popup__item-minus')
	const btnPlus = row.querySelector('.cart-popup__item-plus')


	
	btnMinus.addEventListener('click', () => {
		if (count > 0) {
			count--
			countBlock.textContent = count
			getNewPrice(count, price, priceBlock)
		}
	})

	btnPlus.addEventListener('click', () => {
		count++
		countBlock.textContent = count
		getNewPrice(count, price, priceBlock)
	})
	
})

getFullPrice()
const sliderItem = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let count = 0;

const sliders = Array.from(sliderItem);

prev.onclick = function() {  
        sliderItem.item(count).classList.toggle('slider__item_active');
        count = count == sliderItem.length - 1 ? 0 : count + 1;
        sliderItem.item(count).classList.toggle('slider__item_active');
}
next.onclick = function() { 
        sliderItem.item(count).classList.toggle('slider__item_active');
        count = count == sliderItem.length - 1 ? 0 : count + 1;
        sliderItem.item(count).classList.toggle('slider__item_active');
}
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = Array.from(document.getElementsByClassName('dropdown__item'));

function dropClick() {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    };
};

function itemClick(event) {
    event.preventDefault()
    dropClick();
    dropdownValue.textContent = this.textContent;
};

dropdownValue.addEventListener('click', dropClick);

for (let item of dropdownItem) {
    item.addEventListener('click', itemClick);
};
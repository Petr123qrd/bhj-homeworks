const menuItem = document.getElementsByClassName('menu__item');
const menuLink = document.getElementsByClassName('menu__link');
const active = document.querySelector('.menu_active');

const links = Array.from(menuItem);

for (let i = 0; i < menuLink.length; i++) { 
	menuLink[i].onclick = function () {
		if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') === null) {

            links.forEach((element, index) => {
                if (element.querySelector('.menu_active')) {
                    links[index].querySelector('.menu_sub').classList.remove('menu_active');
                }
            });

            menuItem[i].querySelector('.menu_sub').classList.add('menu_active');
            return menuItem[i].href = false;
        } else if (menuItem[i].querySelector('.menu_sub') !== null && menuItem[i].querySelector('.menu_active') !== null) {
            menuItem[i].querySelector('.menu_sub').classList.remove('menu_active');
            return menuItem[i].href = false;
        }
    }
}
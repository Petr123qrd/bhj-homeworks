const Tab = Array.from(document.getElementsByClassName('tab'));
const tabContent = Array.from(document.getElementsByClassName('tab__content'));

function clickTab() {
    for (let element of Tab) {
        if (element.classList.contains('tab_active')) {
            element.classList.remove('tab_active');
            tabContent[Tab.indexOf(element)].classList.remove('tab__content_active');
        };
    };
    this.classList.add('tab_active');
    tabContent[Tab.indexOf(this)].classList.add('tab__content_active');
};

Tab.forEach((e) => {
    e.addEventListener('click', clickTab);
});


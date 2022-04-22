const rotatorCase = Array.from(document.getElementsByClassName('rotator__case'));

function rotation() {
    let i = 0;
    setInterval(() => {
        rotatorCase.forEach((e) => {
            if (e.classList.contains('rotator__case_active')) {
                e.classList.remove('rotator__case_active');
            };
        });
        let i  = Math.floor(Math.random() * (rotatorCase.length));
        rotatorCase[i].classList.add('rotator__case_active');
        rotatorCase[i].style.color = rotatorCase[i].dataset.color;
    },  rotatorCase[i].dataset.speed);
};
rotation();
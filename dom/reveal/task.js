const reveal = document.getElementsByClassName('reveal');

function isVisible(element) {
    const height = window.innerHeight;
    const top = element.getBoundingClientRect().top;
    if (top < 0 && top > height) {
        return false;
    } else {
        return true;
    }
    
}


window.addEventListener('scroll', function() {
    for (let i = 0; i < reveal.length; i++) {
        if (isVisible(reveal[i]) === true) {
            reveal[i].classList.add('reveal_active');
        } else {
            reveal[i].classList.remove('reveal_active');
        }
        
    }
});
    
var navOffsetY = 100

navBar = document.querySelector("#nav")

window.addEventListener('scroll', function() {
    if (window.pageYOffset > navOffsetY) {
        navBar.classList.add('scrolled')
    }
    else {
        navBar.classList.remove('scrolled')
    }  
});

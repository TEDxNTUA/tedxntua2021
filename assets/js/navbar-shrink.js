var navOffsetY = 100

window.addEventListener('scroll', function() {
    navBar = document.querySelector("#nav")
    if (window.pageYOffset > navOffsetY) {
        navBar.classList.add('scrolled')
    }
    else {
        navBar.classList.remove('scrolled')
    }  
});

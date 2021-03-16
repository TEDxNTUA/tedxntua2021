let socialOffsetY = 500
let socialOffsetBottomY = 2800

window.addEventListener('scroll', function() {
    socialContainer = document.querySelector("#social-container");
    if (window.pageYOffset > socialOffsetY && window.pageYOffset < socialOffsetBottomY) {
        socialContainer.classList.add('scrolled')
    }
    else {
        socialContainer.classList.remove('scrolled')
    }  
});
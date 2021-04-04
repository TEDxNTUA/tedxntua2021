let navOffsetY = 500

window.addEventListener('scroll', function() {
    socialContainer = document.querySelector("#social-container");
    footerOffsetY = document.querySelector('#footer').offsetTop;
    if (socialContainer != null) {
        if (window.pageYOffset > navOffsetY && window.pageYOffset < footerOffsetY-800) {
            socialContainer.classList.add('scrolled');
        }
        else {
            socialContainer.classList.remove('scrolled');
        }  
    }
});


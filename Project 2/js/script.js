document.addEventListener('DOMContentLoaded', function(){
    
    const nav = document.querySelector('.navbar')
    const burger = document.querySelector('.navbar-toggler')
    const navItems = document.querySelectorAll('a.navbar-brand, a.nav-link');
    const navCollapsed = document.querySelector('div.navbar-collapse')
    
    function addShadow(){
        if (window.scrollY >= 150) {
            nav.classList.add('shadow-bg');
        } 
        else if (burger.classList.contains('collapsed')) {
            nav.classList.remove('shadow-bg');
        }
        else {
            nav.classList.add('shadow-bg');
        }
    }

    function collapseMenu () {
        navCollapsed.classList.remove('show');
        burger.classList.add('collapsed')
        }

    window.addEventListener('scroll', addShadow)
    burger.addEventListener('click', addShadow)
    
    navItems.forEach(function(navItems) {
    navItems.addEventListener('click', collapseMenu);
        });
})

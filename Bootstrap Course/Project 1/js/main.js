var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  })

const navItems = document.querySelectorAll('.nav-link, .navbar-brand')
const navIcon = document.querySelector('.navbar-collapse')

function collapseMenu () {
  if (navIcon.classList.contains('show')) {
    navIcon.classList.remove('show');
  }
}

document.addEventListener('click', collapseMenu)

console.log(navItems)
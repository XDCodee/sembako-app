// Active and remove menu

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active');

    const navCollapse = document.querySelector('.navbar-collapse');
    navCollapse.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

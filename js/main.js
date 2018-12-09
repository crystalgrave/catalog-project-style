function classToggle(evt) {
    const navs = document.querySelectorAll('.nav-items');
//document.querySelector('#nav-header').classList.toggle('.mobile-menu');
    navs.forEach(nav => nav.classList.toggle('show-toggle'));
    evt.preventDefault();
}
const button = document.querySelector('.nav-toggle')
button.addEventListener('click', classToggle);
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
hamburger.onclick = () => {
    hamburger.classList.toggle('active');
    navlinks.classList.toggle('show');
    console.log()
}